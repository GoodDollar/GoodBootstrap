---
description: Holds all the G$s that were transferred via bridge from the FundManager.
---

# UBIScheme

The pool of G$s is divided equally by the amount of current active users, and distributed every day. Each active user can then "claim" his quota. If a user fails to claim his quota it becomes part of the next day's pool of G$ to be distributed as basic income.

### Events

#### WithdrawFromDao

Emits when a withdraw has been succeded.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>prevBalance</td><td>The balance before the withdraw.</td></tr><tr><td>newBalance</td><td>The balance after the withdraw.</td></tr></tbody></table>

```
event WithdrawFromDao(uint256 prevBalance, uint256 newBalance);
```

#### ActivatedUser

Emits when a user is activated.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>account</td><td>The user that was activated.</td></tr></tbody></table>

```
event ActivatedUser(address indexed account);
```

#### InactiveUserFished

Emits when a `fish` call has been succeded.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>caller</td><td>The user that doing "fishing".</td></tr><tr><td>fished_account</td><td>The user that has beed "fished".</td></tr><tr><td>claimAmount</td><td>The amount of tokens caller got for "fishing".</td></tr></tbody></table>

```
event InactiveUserFished(
    address indexed caller,
    address indexed fished_account,
    uint256 claimAmount
);
```

#### TotalFished

Emits when finishing a "multi fish" execution. Indicates the number of users from the given array who actually been fished. It might not be finished going over all the array if there no gas left.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>total</td><td>The amount of total user that were "fished".</td></tr></tbody></table>

```
event TotalFished(uint256 total);
```

#### UBICalculated

Emits when daily UBI is calculated.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>day</td><td>The timestamp when this event was emitted.</td></tr><tr><td>dailyUbi</td><td>The amount of UBI per daily cycle.</td></tr><tr><td>blockNumber</td><td>The block number when this event was emitted.</td></tr></tbody></table>

```
event UBICalculated(uint256 day, uint256 dailyUbi, uint256 blockNumber);
```

#### UBICycleCalculated

Emits whenever a new multi day cycle starts.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>day</td><td>The amount of days from the start when the event was emitted.</td></tr><tr><td>pool</td><td>The balance of the UBI scheme in G$.</td></tr><tr><td>cycleLength</td><td>The duration that used to calculate a frequency of daily cycle pool distribution.</td></tr><tr><td>dailyUBIPool</td><td>The amount of the pool.</td></tr></tbody></table>

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

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>claimer</td><td>The claimer of the UBI user.</td></tr><tr><td>amount</td><td>The amount of the UBI the user gathered after claim reward call.</td></tr></tbody></table>

```
event UBIClaimed(address indexed claimer, uint256 amount);
```

#### CycleLengthSet

Emits when the Avatar sets the cycle length.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>newCycleLength</td><td>The duration of the collect UBI cycle..</td></tr></tbody></table>

```
event CycleLengthSet(uint256 newCycleLength);
```

#### CycleLengthSet

Emits when the Avatar sets the cycle length.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>newCycleLength</td><td>The duration of the collect UBI cycle..</td></tr></tbody></table>

```
event CycleLengthSet(uint256 newCycleLength);
```

#### DaySet

Emits when the Avatar sets the day.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>newDay</td><td>New days amount from the start of the UBI work.</td></tr></tbody></table>

```
event DaySet(uint256 newDay);
```

#### DaySet

Emits when the Avatar sets up he is not eligible for G$.

<table><thead><tr><th width="285.809320129277">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>ShouldWithdrawFromDAO</td><td>Accounts whether to also withdraw G$ from Avatar for UBI.</td></tr></tbody></table>

```
event ShouldWithdrawFromDAOSet(bool ShouldWithdrawFromDAO);
```

### checkEntitlement

Checks the amount which the `_member` address is eligible to claim for, regardless if they have been whitelisted or not. In case the user is active, then the current day must be equal to the actual day, i.e. claim or fish has already been executed today.

<table><thead><tr><th width="298.08152046943655">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_member</td><td>Potential claimers address.</td></tr></tbody></table>

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

<table><thead><tr><th width="298.08152046943655">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_account</td><td>The account to "fish".</td></tr></tbody></table>

Returns: a bool indicating if UBI was fished.

```
function fish(address _account) public returns (bool);
```

### fishMulti

Executes `fish` with multiple addresses.

<table><thead><tr><th width="298.08152046943655">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_accounts</td><td>The accounts to "fish".</td></tr></tbody></table>

Returns: a bool indicating if all the UBIs were fished.

```
function fishMulti(address[] memory _accounts) public returns (uint256);
```
