---
description: The identity contract controls addresses that are whitelisted to "Claim" UBI.
---

# Identity

* **Face Verification** GoodDollar currently whitelists users based on a user proving "uniqueness" by signing up with a live and unique face. All image data and details are anonymized in order to allow the user to create a new account in case he is unable to recover his wallet. Facial details are deleted after `authenticationPeriod` and users are required to perform face verification again every `authenticationPeriod` days.
* **Social Profile** Each blockchain address is linked to the user's public profile as created in the wallet. The DID is the node id in the public p2p GunDB database. Mappings from wallet address to DID are held in `addrTODID`.

```
/* 
 * @dev Returns true if given address has been added to whitelist
 * @param account the address to check
 * @return a bool indicating weather the address is present in whitelist
*/
function isWhitelisted(address account) public view returns (bool)

/* 
 * @dev Function that gives the date the given user was added
 * @param account The address to check
 * @return The date the address was added
*/
function lastAuthenticated(address account) public view returns (uint256)

/* the number of days an authentication is valid for*/
uint256 public authenticationPeriod

mapping(address => string) public addrToDID;
```
