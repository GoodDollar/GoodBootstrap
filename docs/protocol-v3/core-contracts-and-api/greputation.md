---
description: >-
  The contract extends Reputation contract with delegation and cross blockchain
  merkle states.
---

# GReputation

To be noticed: the contract breaks DAOStack nativeReputation usage, since it is not possiible to upgrade the original nativeReputation token. it means you can no longer rely on `avatar.nativeReputation()` or `controller.nativeReputation()` to return the current reputation token.

The DAO avatar will be the owner of this reputation token and not the Controller. Minting by the DAO will be done using `controller.genericCall` and not via `controller.mintReputation`.

### Events

#### DelegateVotesChanged

Emitted when a delegate account's vote balance changes.

| Parameter name  | Annotation                                 |
| --------------- | ------------------------------------------ |
| delgate         | The address of delegate account.           |
| delegator       | The address of delegator account.          |
| previousBalance | The previous amount of vote power balance. |
| newBalance      | The new amount of vote power balance.      |

```
event DelegateVotesChanged(
    address indexed delegate,
    address indexed delegator,
    uint256 previousBalance,
    uint256 newBalance
);
```

#### StateHash

Emitted when a state hash of a blockhain is set.

| Parameter name | Annotation                                                 |
| -------------- | ---------------------------------------------------------- |
| blockchain     | The blockchain name.                                       |
| merkleRoot     | The state hash.                                            |
| totalSupply    | The total supply of reputation on the specific blockchain. |

```
event StateHash(string blockchain, bytes32 merkleRoot, uint256 totalSupply);
```

#### StateHashProof

Emitted when user balance in a specific blockchain state hash is proved.

| Parameter name | Annotation                                                  |
| -------------- | ----------------------------------------------------------- |
| blockchain     | The name of the blockchain.                                 |
| user           | The user whose balance if proved.                           |
| repBalance     | The balance in reputation of the user that is being proved. |

```
event StateHashProof(string blockchain, address user, uint256 repBalance);
```

### setBlockchainStateHash

Sets the state hash of a blockchain.

| Parameter name | Annotation                                                               |
| -------------- | ------------------------------------------------------------------------ |
| \_id           | The string name of the blockchain (will be hashed to produce byte32 id). |
| \_hash         | The state hash.                                                          |
| \_totalSupply  | Total supply of reputation on the specific blockchain.                   |

Can only be called by the admin.

```
function setBlockchainStateHash(
    string memory _id,
    bytes32 _hash,
    uint256 _totalSupply
) public;
```

### getVotesAt

Get the number of active votes a user holds after delegation (vs the basic balance of reputation he holds).

| Parameter name | Annotation                                                 |
| -------------- | ---------------------------------------------------------- |
| \_user         | The user to get active votes for.                          |
| \_global       | Flag whether to include reputation from other blockchains. |
| \_blockNumber  | Get votes state at specific block.                         |

Returns: the number of votes.

```
function getVotesAt(
    address _user,
    bool _global,
    uint256 _blockNumber
) public view returns (uint256);
```

### totalSupplyLocal

| Parameter name | Annotation      |
| -------------- | --------------- |
| \_blockNumber  | Specific block. |

Returns: total supply in current blockchain.

```
function totalSupplyLocal(uint256 _blockNumber) public view returns (uint256);
```

### totalSupplyAt

| Parameter name | Annotation      |
| -------------- | --------------- |
| \_blockNumber  | Specific block. |

Returns: total supply in all blockchain aggregated.

```
function totalSupplyAt(uint256 _blockNumber) public view returns (uint256);
```

### getVotesAtBlockchain

The function that gets the number of active votes a user holds after delegation in specific blockchain.

| Parameter name | Annotation                                      |
| -------------- | ----------------------------------------------- |
| \_id           | The keccak256 hash of the blockchain string ID. |
| \_user         | The user to get active votes for.               |
| \_blockNumber  | Specific block.                                 |

Returns: the number of votes.

```
function getVotesAtBlockchain(
    bytes32 _id,
    address _user,
    uint256 _blockNumber
) public view returns (uint256);
```

### proveBalanceOfAtBlockchain

The function that proves user balance in a specific blockchain state hash

| Parameter name | Annotation                                                    |
| -------------- | ------------------------------------------------------------- |
| \_id           | The string ID of the blockchain we supply proof for.          |
| \_user         | The user to prove his balance.                                |
| \_balance      | The balance we are proving.                                   |
| \_proof        | Array of byte32 with proof data (currently merkle tree path). |
| \_nodeIndex    | Index of node in the tree (for unsorted merkle tree proof).   |

Returns: `true` if proof is valid.

```
function proveBalanceOfAtBlockchain(
    string memory _id,
    address _user,
    uint256 _balance,
    bytes32[] memory _proof,
    uint256 _nodeIndex
) public returns (bool)
```

### delegateTo

The function that delegate votes to another user.

| Parameter name | Annotation                       |
| -------------- | -------------------------------- |
| \_delegate     | The to whom to delegate address. |

```
function delegateTo(address _delegate) public;
```

### undelegate

The function that cancels user delegation.

```
function undelegate() public;
```
