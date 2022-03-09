---
description: >-
  Helper contract for calculating the exit contribution (ie when selling G$ back
  to the reserve).
---

# ContributionCalculation

```
/**
* @dev Calculate the amount after contribution during the sell action. There is a
* `sellContributionRatio` percent contribution
* @param _marketMaker The market maker address
* @param _reserve The reserve address
* @param _contributer The contributer address
* @param _token The token to convert from
* @param _gdAmount The total GD amount to contribute from
* @return (contributionAmount) The contribution amount for sell
*/
function calculateContribution(
   GoodMarketMaker _marketMaker,
   GoodReserveCDai _reserve,
   address _contributer,
   ERC20 _token,
   uint256 _gdAmount
) external view returns (uint256);
```
