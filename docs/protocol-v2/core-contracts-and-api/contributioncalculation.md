---
description: >-
  Helper contract for calculating the exit contribution (i.e. when selling G$
  back to the reserve).
---

# ContributionCalculation

### Events

#### SellContributionRatioUpdated

Emits when the contribution ratio is updated.

| Parameter name | Annotation                    |
| -------------- | ----------------------------- |
| caller         | The address of the Avatar.    |
| nom            | The nominator of the ratio.   |
| denom          | The denominator of the ratio. |

```
event SellContributionRatioUpdated(
    address indexed caller, 
    uint256 nom, 
    uint256 denom
);
```

### calculateContribution

Calculate the amount after contribution during the sell action. There is a `sellContributionRatio` percent contribution.

| Parameter name | Annotation                              |
| -------------- | --------------------------------------- |
| \_marketMaker  | The market maker address.               |
| \_reserve      | The reserve address.                    |
| \_contributer  | The contributer address.                |
| \_token        | The token to convert from.              |
| \_gdAmount     | The total G$ amount to contribute from. |

Returns: the contribution amount for sell.

```
function calculateContribution(
   GoodMarketMaker _marketMaker,
   GoodReserveCDai _reserve,
   address _contributer,
   ERC20 _token,
   uint256 _gdAmount
) external view returns (uint256);
```
