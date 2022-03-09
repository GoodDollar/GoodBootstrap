---
description: >-
  Helper contract for the GoodReserveCDai. It serves as a dynamic reserve ratio
  market maker.
---

# GoodMarketMaker

```
/**
 * @dev Calculates how much to decrease the reserve ratio for _token by
 * the `reserveRatioDailyExpansion`
 * @param _token The reserve token to calculate the reserve ratio for
 * @return The new reserve ratio
 */
function calculateNewReserveRatio(ERC20 _token) public view returns (uint32);

/**
 * @dev Calculates the buy return in GD according to the given _tokenAmount
 * @param _token The reserve token buying with
 * @param _tokenAmount The amount of reserve token buying with
 * @return Number of GD that should be given in exchange as calculated by the bonding curve
 */
function buyReturn(ERC20 _token, uint256 _tokenAmount);

/**
 * @dev Calculates the sell return in _token according to the given _gdAmount
 * @param _token The desired reserve token to have
 * @param _gdAmount The amount of GD that are sold
 * @return Number of tokens that should be given in exchange as calculated by the bonding curve
 */
function sellReturn(ERC20 _token, uint256 _gdAmount);

/**
 * @dev Updates the _token bonding curve params. Emits `BalancesUpdated` with the
 * new reserve token information.
 * @param _token The reserve token buying with
 * @param _tokenAmount The amount of reserve token buying with
 * @return (gdReturn) Number of GD that will be given in exchange as calculated by the bonding curve
 */
function buy(ERC20 _token, uint256 _tokenAmount);

/**
 * @dev Calculates the sell return with contribution in _token and update the bonding curve params.
 * Emits `BalancesUpdated` with the new reserve token information.
 * @param _token The desired reserve token to have
 * @param _gdAmount The amount of GD that are sold
 * @param _contributionGdAmount The number of GD tokens that will not be traded for the reserve token
 * @return Number of tokens that will be given in exchange as calculated by the bonding curve
 */
function sellWithContribution(
	ERC20 _token,
	uint256 _gdAmount,
	uint256 _contributionGdAmount
) public returns (uint256);
```
