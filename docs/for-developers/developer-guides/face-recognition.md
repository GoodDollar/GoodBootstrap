---
description: Describes the identification process
This document describes the FR process on the following parts: GoodDapp (client side), GoodServer (server side)
---

# Liveness & Uniqness test

## High level description

Face Recognition is the process when the user becomes a GoodDollar citizen (`this.props.store.get('isLoggedInCitizen')`), and without being a citizen, the user cannot _claim GoodDollars_ or _send existing GoodDollars_ using his/hers wallet. Therefore, Face Recognition process is triggered when, assuming the user have not passed face recognition yet:

* The first time the user tries to claim for GoodDollars
* The first time the user tries to send GoodDollars

The Face Recognition process includes the following steps: 1. Capture - the user video stream is recorded and captured on the client side, using a guided wizard which tells the user how to create the capture. See LLD below for technical details.

1. If succeed, the capture (also called ZoomCaptureResult) is sent to the GoodServer server.
2. On the server, the zoom capture is sent to _/verify/facerecognition_ route which:
3. Calls to Zoom _liveness_ test, which check if the user passed liveness test indicators by Zoom. If passed:
4. Calls to Zoom _search_ action, which returns similar users to the user, and server checks if the capture already exists for a GoodDollar citizen already. if not (no duplicates found for the user):
5. The user is whitelisted on the server and becomes a citizen.
6. _/verify/facerecognition_ result is returned to the client, and the client shows error message, or continue the desired action (claim / send) if the user was whitelisted successfully.

## Low level technical description - GoodDapp

The Face Recognition files are located under: [https://github.com/GoodDollar/GoodDAPP/tree/master/src/components/dashboard/FaceRecognition](https://github.com/GoodDollar/GoodDAPP/tree/master/src/components/dashboard/FaceRecognition)

### Dashboard Integration

FaceRecognition is a component that is part of the stackNavigation of the dashboard:

```
import FaceRecognition from './FaceRecognition/FaceRecognition'
.
.
export default createStackNavigator({
  .
  .
  FaceRecognition,
  .
  .

})
```

### FaceRecognition.js.web

This is the main FaceRecognition container which is loaded into the dashboard.

{% hint style="info" %}
Please note, Currently, it is not supported as a react native component out of the box and will have to be translated into proper native components (The tag is web only)
{% endhint %}

FaceRecognition holds the [Camera component ](https://github.com/GoodDollar/GoodDAPP/blob/a6dbf966ac45660f50165979b95c08fdcea24000/src/components/dashboard/FaceRecognition/Camera.web.js)and uses the it's capture method result to send it to the server:

```
onCameraLoad = async (track: MediaStreamTrack) => {
      ..
      captureOutcome = await capture(track) 
      ..
      await this.performFaceRecognition(captureOutcome)
}
```

FaceRecognition request is prepared using the capture result. The capture result made by Zoom API contains the following relevant fields:

* facemap - a zip file contains user facemap data in zoomformat
* auditTrailImage - a jpg file contains user single image data in zoomformat
* sessionId - identifier for this zoom session
* enrollmentIdentifier - an identifier GoodDollar choose to give for the enrollment (if succeed on the server). We are using one of the account numbers generated from the wallet seed.

The request is sent to the server to go through face recognition steps described above. The returned result is analyzed - in case of failure, `onFaceRecognitionFailure` is triggered - generally it displays the error message and suggest to try again. on success, `onFaceRecognitionSuccess` is triggered and stores the enrollment identifier under field `zoomEnrollmentId`, and takes the user to the initially desired screen using the routing system.

For more information about Zoom integration: [https://dev.zoomlogin.com/zoomsdk/#/docs](https://dev.zoomlogin.com/zoomsdk/#/docs)\
[Link to Face Recognition code](https://github.com/GoodDollar/GoodDAPP/blob/a6dbf966ac45660f50165979b95c08fdcea24000/src/components/dashboard/FaceRecognition/FaceRecognition.web.js)

### Zoom.js

Mainly contains the `capture` method which recieves the streaming video track from the Camera component and translates it into zoom data objects. [Link to code](https://github.com/GoodDollar/GoodDAPP/blob/a6dbf966ac45660f50165979b95c08fdcea24000/src/components/dashboard/FaceRecognition/Zoom.js)

### Camera.web.js

{% hint style="info" %}
Please note, Currently, it is not supported as a react native component out of the box and will have to be translated into proper native components (The tag is web only)
{% endhint %}

Contains a Video tag and methods that handles the actual video capture of the user. [Link to code](https://github.com/GoodDollar/GoodDAPP/blob/a6dbf966ac45660f50165979b95c08fdcea24000/src/components/dashboard/FaceRecognition/Camera.web.js)

## Low level technical description - GoodServer

Git repo is located here: [https://github.com/GoodDollar/GoodServer](https://github.com/GoodDollar/GoodServer)

Recall that, on the server under _/verify/facerecognition_, the face recognition process is triggered by calling _liveness_ test, and then _search_ test with the user capture data, to verify the user is a real user and haven't been registered to Zoom & GoodDollar before (it is not duplicated). In case both pass, the user is whitelisted on the GoodDollar contract.

Both verification tests (_liveness_ & _search_) are done by calling from the server to Zoom (FaceTech) API's.

### VerificationAPI.js

Contains the endpoint code for _/verify/facerecognition_ endpoint. Responsible for the following actions: 1. Receive the uploaded capture data: facemap,auditTrailImage, enrollmentIdentifier and sessionId, using `upload.any()` middleware provided by _multer_ npm package.

1. Load the files that were automatically stored by multer middleware
2. call verifyUser() which performs face recognition process (see below)
3. cleanup loaded files after verifying the user
4. in case user is verified, whitelist the user in the Admin Wallet contract, and update the user on the GD storage as verified.

[Link to code](https://github.com/GoodDollar/GoodServer/blob/0c4b6124a97f719bbf4f75a8d4edde58715fa01b/src/server/verification/verificationAPI.js)

### Verification.js

This module contains a method called `verifyUser(user: UserRecord, verificationData: any): Promise<boolean>` which receives the active user that needs to pass face recognition, and the face recognition data. It: 1. Prepares Liveness & Search request 2. Calling Zoom Liveness & Search API (using Helper class) to verify the user is alive, and that the user has no duplicates.

The testing is gradual. Liveness must pass first, then duplicates test. Once both passed, the user is enrolled to Zoom database, in order to be available for the next _search_ actions.

[Link to code](https://github.com/GoodDollar/GoodServer/blob/0c4b6124a97f719bbf4f75a8d4edde58715fa01b/src/server/verification/verification.js)

This module is using [`zoomClient.js`](https://github.com/GoodDollar/GoodServer/blob/0c4b6124a97f719bbf4f75a8d4edde58715fa01b/src/server/verification/faceRecognition/zoomClient.js) and [`faceRecognitionHelper.js`](https://github.com/GoodDollar/GoodServer/blob/0c4b6124a97f719bbf4f75a8d4edde58715fa01b/src/server/verification/faceRecognition/faceRecognitionHelper.js), which are straight forward and self explanatory.
