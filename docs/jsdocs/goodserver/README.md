# goodserver

## @gooddollar/goodserver v0.1.0

GoodDollar Server

* [Login](./#login)
  * [Request user token](./#request-user-token)
* [Send](./#send)
  * [Send link email](./#send-link-email)
  * [Send link sms](./#send-link-sms)
  * [Send recovery instructions email](./#send-recovery-instructions-email)
* [Storage](./#storage)
  * [Add user account](./#add-user-account)
  * [Delete user account](./#delete-user-account)
* [Verification](./#verification)
  * [Verify email code](./#verify-email-code)
  * [Verify users face](./#verify-users-face)
  * [Verify mobile data code](./#verify-mobile-data-code)
  * [Send verification email endpoint](./#send-verification-email-endpoint)
  * [Sends OTP](./#sends-otp)
  * [Tops Users Wallet if needed](./#tops-users-wallet-if-needed)
  * [Whitelist user](./#whitelist-user)

## Login

### Request user token

```text
POST /auth/eth
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| signature | String |  |
| gdSignature | String |  |
| profilePublickey | String |  |
| profileSignature | String |  |
| nonce | String |  |
| method | String |  |

## Send

### Send link email

```text
POST /send/linkemail
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| to | String |  |
| sendLink | String |  |

### Send link sms

```text
POST /send/linksms
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| to | String |  |
| sendLink | String |  |

### Send recovery instructions email

```text
POST /send/recoveryinstructions
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| mnemonic | String |  |

## Storage

### Add user account

```text
POST /user/add
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| user | Object |  |

### Delete user account

```text
POST /user/delete
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| zoomId | String |  |

## Verification

### Verify email code

```text
POST /verify/email
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| verificationData | Object |  |
| verificationData.code | String |  |

### Verify users face

```text
POST /verify/facerecognition
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| enrollmentIdentifier | String |  |
| sessionId | String |  |

### Verify mobile data code

```text
POST /verify/mobile
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| verificationData | Object |  |

### Send verification email endpoint

```text
POST /verify/email
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| user | UserRecord |  |

### Sends OTP

```text
POST /verify/sendotp
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| user | UserRecord |  |

### Tops Users Wallet if needed

```text
POST /verify/topwallet
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| user | LoggedUser |  |

### Whitelist user

```text
POST /verify/user
```

#### Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| verificationData | Object |  |

