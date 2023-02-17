---
description: >-
  The contract provides callbacks that can be used by UBIScheme contract to
  update when a citizen has claimed. It will distribute GOOD tokens each month
  pro rata based on number of claims.
---

# ClaimersDistribution

### Events

#### ReputationEarned

Emitted when user claims the reputation rewards.

| Parameter name | Annotation                                                                    |
| -------------- | ----------------------------------------------------------------------------- |
| claimer        | The user who claimed the rewards.                                             |
| month          | The number of months for which the `claimer` has acquired reputation rewards. |
| claims         | The amount of claimers claims.                                                |
| reputation     | The size of the reputation reward in wei.                                     |

```
event ReputationEarned(
    address claimer,
    uint256 month,
    uint256 claims,
    uint256 reputation
);
```

#### MonthlyDistributionSet

Emitted when the Avatar updates the monthly reputation distribution.

| Parameter name   | Annotation                      |
| ---------------- | ------------------------------- |
| reputationAmount | The new value of the parameter. |

```
event MonthlyDistributionSet(uint256 reputationAmount);
```

### updateClaim

The function increases user count of claims if he claimed today. (This function is called automatically by latest version of the UBIScheme contract).

| Parameter name | Annotation                  |
| -------------- | --------------------------- |
| \_claimer      | The user address to update. |

```
function updateClaim(address _claimer) external;
```

### claimReputation

The function mints reputation to the user according to his share in last month claims.

| Parameter name | Annotation                            |
| -------------- | ------------------------------------- |
| \_claimer      | The user to distribute reputation to. |

```
function claimReputation(address _claimer) public;
```
