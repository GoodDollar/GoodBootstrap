---
description: Holds all the G$s that were transferred via bridge from the FundManager.
---

# UBIScheme

The pool of G$s is divided equally by the amount of current active users, and distributed every day. Each active user can then "claim" his quota. If a user fails to claim his quota it becomes part of the next day's pool of G$ to be distributed as basic income.

### Events

#### WithdrawFromDao

Emits when a withdraw has been succeded.

| Parameter name | Annotation                       |
| -------------- | -------------------------------- |
| prevBalance    | The balance before the withdraw. |
| newBalance     | The balance after the withdraw.  |

```
event WithdrawFromDao(uint256 prevBalance, uint256 newBalance);
```

#### ActivatedUser

Emits when a user is activated.

| Parameter name | Annotation                   |
| -------------- | ---------------------------- |
| account        | The user that was activated. |

```
event ActivatedUser(address indexed account);
```

#### InactiveUserFished

Emits when a `fish` call has been succeded.

| Parameter name  | Annotation                                     |
| --------------- | ---------------------------------------------- |
| caller          | The user that doing "fishing".                 |
| fished\_account | The user that has beed "fished".               |
| claimAmount     | The amount of tokens caller got for "fishing". |

```
event InactiveUserFished(
    address indexed caller,
    address indexed fished_account,
    uint256 claimAmount
);
```

#### TotalFished

Emits when finishing a "multi fish" execution. Indicates the number of users from the given array who actually been fished. It might not be finished going over all the array if there no gas left.

| Parameter name | Annotation                                   |
| -------------- | -------------------------------------------- |
| total          | The amount of total user that were "fished". |

```
event TotalFished(uint256 total);
```

#### UBICalculated

Emits when daily UBI is calculated.

| Parameter name | Annotation                                    |
| -------------- | --------------------------------------------- |
| day            | The timestamp when this event was emitted.    |
| dailyUbi       | The amount of UBI per daily cycle.            |
| blockNumber    | The block number when this event was emitted. |

```
event UBICalculated(uint256 day, uint256 dailyUbi, uint256 blockNumber);
```

#### UBICycleCalculated

Emits whenever a new multi day cycle starts.

| Parameter name | Annotation                                                                        |
| -------------- | --------------------------------------------------------------------------------- |
| day            | The amount of days from the start when the event was emitted.                     |
| pool           | The balance of the UBI scheme in G$.                                              |
| cycleLength    | The duration that used to calculate a frequency of daily cycle pool distribution. |
| dailyUBIPool   | The amount of the pool.                                                           |

```
event UBICycleCalculated(
    uint256 day,
    uint256 pool,
    uint256 cycleLength,
    uint256 dailyUBIPool
);
```

#### UBIClaimed

Emits when someone claims the UBI.

| Parameter name | Annotation                                                       |
| -------------- | ---------------------------------------------------------------- |
| claimer        | The claimer of the UBI user.                                     |
| amount         | The amount of the UBI the user gathered after claim reward call. |

```
event UBIClaimed(address indexed claimer, uint256 amount);
```

#### CycleLengthSet

Emits when the Avatar sets the cycle length.

| Parameter name | Annotation                              |
| -------------- | --------------------------------------- |
| newCycleLength | The duration of the collect UBI cycle.. |

```
event CycleLengthSet(uint256 newCycleLength);
```

#### CycleLengthSet

Emits when the Avatar sets the cycle length.

| Parameter name | Annotation                              |
| -------------- | --------------------------------------- |
| newCycleLength | The duration of the collect UBI cycle.. |

```
event CycleLengthSet(uint256 newCycleLength);
```

#### DaySet

Emits when the Avatar sets the day.

| Parameter name | Annotation                                      |
| -------------- | ----------------------------------------------- |
| newDay         | New days amount from the start of the UBI work. |

```
event DaySet(uint256 newDay);
```

#### DaySet

Emits when the Avatar sets up he is not eligible for G$.

| Parameter name        | Annotation                                                |
| --------------------- | --------------------------------------------------------- |
| ShouldWithdrawFromDAO | Accounts whether to also withdraw G$ from Avatar for UBI. |

```
event ShouldWithdrawFromDAOSet(bool ShouldWithdrawFromDAO);
```

### checkEntitlement

Checks the amount which the `_member` address is eligible to claim for, regardless if they have been whitelisted or not. In case the user is active, then the current day must be equal to the actual day, i.e. claim or fish has already been executed today.

| Parameter name | Annotation                  |
| -------------- | --------------------------- |
| \_member       | Potential claimers address. |

Returns: the amount of G$ tokens the address can claim.

```
function checkEntitlement(address _member) public view returns (uint256);
```

### claim

Function for claiming UBI. Requires contract to be active and claimer to be whitelisted. Calls `distributionFormula`, calculates the amount the caller can claim, and transfers the amount to the caller.

Returns: a boolean indicating if UBI was claimed.

```
function claim() public returns (bool);
```

### fish

In order to update users from active to inactive, we give out incentive to people to update the status of inactive users, this action is called "Fishing". Anyone can send a tx to the contract to mark inactive users. The "fisherman" receives a reward equal to the daily UBI (i.e. instead of the “fished” user). User that “last claimed” > 14 can be "fished" and made inactive (reduces active users count by one). Requires contract to be active.

| Parameter name | Annotation             |
| -------------- | ---------------------- |
| \_account      | The account to "fish". |

Returns: a bool indicating if UBI was fished.

```
function fish(address _account) public returns (bool);
```

### fishMulti

Executes `fish` with multiple addresses.

| Parameter name | Annotation              |
| -------------- | ----------------------- |
| \_accounts     | The accounts to "fish". |

Returns: a bool indicating if all the UBIs were fished.

```
function fishMulti(address[] memory _accounts) public returns (uint256);
```
