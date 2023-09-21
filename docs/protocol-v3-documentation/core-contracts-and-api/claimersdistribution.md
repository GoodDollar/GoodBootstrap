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

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>claimer</td><td>The user who claimed the rewards.</td></tr><tr><td>month</td><td>The number of months for which the <code>claimer</code> has acquired reputation rewards.</td></tr><tr><td>claims</td><td>The amount of claimers claims.</td></tr><tr><td>reputation</td><td>The size of the reputation reward in wei.</td></tr></tbody></table>

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

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>reputationAmount</td><td>The new value of the parameter.</td></tr></tbody></table>

```
event MonthlyDistributionSet(uint256 reputationAmount);
```

### updateClaim

The function increases user count of claims if he claimed today. (This function is called automatically by latest version of the UBIScheme contract).

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_claimer</td><td>The user address to update.</td></tr></tbody></table>

```
function updateClaim(address _claimer) external;
```

### claimReputation

The function mints reputation to the user according to his share in last month claims.

<table><thead><tr><th width="150">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_claimer</td><td>The user to distribute reputation to.</td></tr></tbody></table>

```
function claimReputation(address _claimer) public;
```
