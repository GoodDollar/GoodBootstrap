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

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>delgate</td><td>The address of delegate account.</td></tr><tr><td>delegator</td><td>The address of delegator account.</td></tr><tr><td>previousBalance</td><td>The previous amount of vote power balance.</td></tr><tr><td>newBalance</td><td>The new amount of vote power balance.</td></tr></tbody></table>

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

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>blockchain</td><td>The blockchain name.</td></tr><tr><td>merkleRoot</td><td>The state hash.</td></tr><tr><td>totalSupply</td><td>The total supply of reputation on the specific blockchain.</td></tr></tbody></table>

```
event StateHash(string blockchain, bytes32 merkleRoot, uint256 totalSupply);
```

#### StateHashProof

Emitted when user balance in a specific blockchain state hash is proved.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>blockchain</td><td>The name of the blockchain.</td></tr><tr><td>user</td><td>The user whose balance if proved.</td></tr><tr><td>repBalance</td><td>The balance in reputation of the user that is being proved.</td></tr></tbody></table>

```
event StateHashProof(string blockchain, address user, uint256 repBalance);
```

### setBlockchainStateHash

Sets the state hash of a blockchain.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_id</td><td>The string name of the blockchain (will be hashed to produce byte32 id).</td></tr><tr><td>_hash</td><td>The state hash.</td></tr><tr><td>_totalSupply</td><td>Total supply of reputation on the specific blockchain.</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_user</td><td>The user to get active votes for.</td></tr><tr><td>_global</td><td>Flag whether to include reputation from other blockchains.</td></tr><tr><td>_blockNumber</td><td>Get votes state at specific block.</td></tr></tbody></table>

Returns: the number of votes.

```
function getVotesAt(
    address _user,
    bool _global,
    uint256 _blockNumber
) public view returns (uint256);
```

### totalSupplyLocal

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_blockNumber</td><td>Specific block.</td></tr></tbody></table>

Returns: total supply in current blockchain.

```
function totalSupplyLocal(uint256 _blockNumber) public view returns (uint256);
```

### totalSupplyAt

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_blockNumber</td><td>Specific block.</td></tr></tbody></table>

Returns: total supply in all blockchain aggregated.

```
function totalSupplyAt(uint256 _blockNumber) public view returns (uint256);
```

### getVotesAtBlockchain

The function that gets the number of active votes a user holds after delegation in specific blockchain.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_id</td><td>The keccak256 hash of the blockchain string ID.</td></tr><tr><td>_user</td><td>The user to get active votes for.</td></tr><tr><td>_blockNumber</td><td>Specific block.</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_id</td><td>The string ID of the blockchain we supply proof for.</td></tr><tr><td>_user</td><td>The user to prove his balance.</td></tr><tr><td>_balance</td><td>The balance we are proving.</td></tr><tr><td>_proof</td><td>Array of byte32 with proof data (currently merkle tree path).</td></tr><tr><td>_nodeIndex</td><td>Index of node in the tree (for unsorted merkle tree proof).</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>_delegate</td><td>The to whom to delegate address.</td></tr></tbody></table>

```
function delegateTo(address _delegate) public;
```

### undelegate

The function that cancels user delegation.

```
function undelegate() public;
```
