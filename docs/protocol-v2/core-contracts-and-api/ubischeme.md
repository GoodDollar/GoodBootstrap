---
description: Holds all the G$s that were transferred via bridge from the FundManager.
---

# UBIScheme

The pool of G$s is divided equally by the amount of current active users, and distributed every day. Each active user can then "claim" his quota. If a user fails to claim his quota it becomes part of the next day's pool of G$ to be distributed as basic income.

```
/**
 * @dev Checks the amount which the sender address is eligible to claim for,
 * regardless if they have been whitelisted or not. In case the user is
 * active, then the current day must be equal to the actual day, i.e. claim
 * or fish has already been executed today.
 * @return The amount of GD tokens the address can claim.
 */
function checkEntitlement() public view requireStarted returns (uint256);

/**
 * @dev Function for claiming UBI. Requires contract to be active and claimer to be whitelisted.
 * Calls distributionFormula, calculats the amount the caller can claim, and transfers the amount
 * to the caller. Emits the address of caller and amount claimed.
 * @return A bool indicating if UBI was claimed
 */
function claim() public requireStarted returns (bool);

/**
 * @dev In order to update users from active to inactive, we give out incentive to people
 * to update the status of inactive users, this action is called "Fishing". Anyone can
 * send a tx to the contract to mark inactive users. The "fisherman" receives a reward
 * equal to the daily UBI (ie instead of the “fished” user). User that “last claimed” > 14
 * can be "fished" and made inactive (reduces active users count by one). Requires
 * contract to be active.
 * @param _account to fish
 * @return A bool indicating if UBI was fished
 */
function fish(address _account) public requireStarted returns (bool);

/**
 * @dev executes `fish` with multiple addresses. emits the number of users from the given
 * array who actually been tried being fished.
 * @param _accounts to fish
 * @return A bool indicating if all the UBIs were fished
*/
function fishMulti(address[] memory _accounts) public requireStarted returns (uint256);
```
