---
description: CompoundVotingMachine based on Compound's governance with a few differences.
---

# CompoundVotingMachine

The differences between CompoundVotingMachine and Compound's governance:&#x20;

* no timelock, once vote has passed it stays open for 'queuePeriod' (2 days by default), if vote decision has changed, execution will be delayed so at least 24 hours are left to vote;
* execution modified to support DAOStack Avatar/Controller.

The contract based on [GovernorAlpha](https://github.com/compound-finance/compound-protocol/blob/b9b14038612d846b83f8a009a82c38974ff2dcfe/contracts/Governance/GovernorAlpha.sol).

### Events

#### ProposalCreated

An event emitted when a new proposal is created.

| Parameter name | Annotation                                                       |
| -------------- | ---------------------------------------------------------------- |
| id             | The ID of the proposal.                                          |
| proposer       | The address of the proposer.                                     |
| targets        | The targets list of contracts to be executed on.                 |
| values         | The list of native token value to be used in each contract call. |
| signatures     | The list of functions signatures to execute on `targets`.        |
| calldatas      | The list of parameters to pass to each function in `signatures`. |
| startBlock     | Starting block number of voting.                                 |
| endBlock       | Ending block number of voting.                                   |
| description    | Short description of the proposal.                               |

```
event ProposalCreated(
    uint256 id,
    address proposer,
    address[] targets,
    uint256[] values,
    string[] signatures,
    bytes[] calldatas,
    uint256 startBlock,
    uint256 endBlock,
    string description
);
```

#### ProposalSucceeded

An event emitted when using blockchain proposal bridge.

| Parameter name | Annotation                                                       |
| -------------- | ---------------------------------------------------------------- |
| id             | The ID of the proposal.                                          |
| proposer       | The address of the proposer.                                     |
| targets        | The targets list of contracts to be executed on.                 |
| values         | The list of native token value to be used in each contract call. |
| signatures     | The list of functions signatures to execute on `targets`.        |
| calldatas      | The list of parameters to pass to each function in `signatures`. |
| startBlock     | Starting block number of voting.                                 |
| endBlock       | Ending block number of voting.                                   |
| forBlockchain  | The chain ID.                                                    |
| eta            | An exact time of the proposal bridging.                          |
| forVotes       | An amount of vote power "FOR".                                   |
| againstVotes   | An amount of vote power "AGAINST".                               |

```
event ProposalSucceeded(
    uint256 id,
    address proposer,
    address[] targets,
    uint256[] values,
    string[] signatures,
    bytes[] calldatas,
    uint256 startBlock,
    uint256 endBlock,
    uint256 forBlockchain,
    uint256 eta,
    uint256 forVotes,
    uint256 againstVotes
);
```

#### ProposalBridge

Emitted when proposal made for a different blockchain.

| Parameter name | Annotation                                        |
| -------------- | ------------------------------------------------- |
| id             | The ID of the proposal.                           |
| forBlockchain  | The chain ID of the blockchain proposal made for. |

```
event ProposalBridge(uint256 id, uint256 indexed forBlockchain);
```

#### VoteCast

An event emitted when a vote has been cast on a proposal.

| Parameter name | Annotation                                          |
| -------------- | --------------------------------------------------- |
| voter          | The voter address.                                  |
| proposalId     | The proposal ID for which the vote was cast.        |
| support        | Check whether the vote cast was "FOR" or "AGAINST". |
| votes          | The amount of voting power for the vote cast.       |

```
event VoteCast(
    address voter,
    uint256 proposalId,
    bool support,
    uint256 votes
);
```

#### ProposalCanceled

An event emitted when a proposal has been canceled.

| Parameter name | Annotation              |
| -------------- | ----------------------- |
| id             | The ID of the proposal. |

```
event ProposalCanceled(uint256 id);
```

#### ProposalQueued

An event emitted when a proposal has been queued.

| Parameter name | Annotation                     |
| -------------- | ------------------------------ |
| id             | The ID of the proposal.        |
| eta            | The timestamp of the queueing. |

```
event ProposalQueued(uint256 id, uint256 eta);
```

#### ProposalExecuted

An event emitted when a proposal has been executed.

| Parameter name | Annotation              |
| -------------- | ----------------------- |
| id             | The ID of the proposal. |

```
event ProposalExecuted(uint256 id);
```

#### ProposalExecutionResult

An event emitted when a proposal call has been executed.

| Parameter name | Annotation                                      |
| -------------- | ----------------------------------------------- |
| id             | The ID of the proposal.                         |
| index          | The index of the target contract from proposal. |
| ok             | The status of the proposal call.                |
| result         | The result of the proposal call.                |

```
event ProposalExecutionResult(
    uint256 id,
    uint256 index,
    bool ok,
    bytes result
);
```

#### GuardianSet

An event emitted when a new guardian set.

| Parameter name | Annotation                |
| -------------- | ------------------------- |
| newGuardian    | The new guardian address. |

```
event GuardianSet(address newGuardian);
```

#### ParametersSet

An event emitted when a new voting parameters set.

| Parameter name | Annotation             |
| -------------- | ---------------------- |
| params         | The voting parameters. |

Here's the per index description of each parameter.

| Index | Annotation                                                                                                                                                |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | The default voting period.                                                                                                                                |
| 1     | The default quorum percentage.                                                                                                                            |
| 2     | The proposal percentage.                                                                                                                                  |
| 3     | The proposal max operations.                                                                                                                              |
| 4     | The delay in blocks before the newly created proposal would work.                                                                                         |
| 5     | The duration of time (in seconds) after proposal passed thershold before it can be executed.                                                              |
| 6     | The duration of time (in seconds) after proposal passed with absolute majority before it can be executed.                                                 |
| 7     | During the queue period if vote decision has changed, the queue period time duration is extended so that at least this amount of time in seconds is left. |
| 8     | The duration of time (in seconds) a succeeded proposal has to be executed on the blockchain.                                                              |

```
event ParametersSet(uint256[9] params);
```

### propose

The function creates a proposal to be voted on.

| Parameter name | Annotation                                                                                                |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| targets        | The address of the contracts on which proposal actions should be executed.                                |
| values         | The amounts of native tokens that should be sent to the `targets` addresses.                              |
| signatures     | The function selectors (signatures) that should be called as proposals actions should a proposal succeed. |
| calldatas      | The call arguments for the `signatures`.                                                                  |
| description    | The short description of a proposal.                                                                      |

Returns: the ID of a newly created proposal.

```
function propose(
    address[] memory targets,
    uint256[] memory values,
    string[] memory signatures,
    bytes[] memory calldatas,
    string memory description
) public returns (uint256);
```

Also here's an overloaded variant of the function with additional parameter `forBlockchain` . The parameter is used to create a proposal in a specific sidechain.

```
function propose(
    address[] memory targets,
    uint256[] memory values,
    string[] memory signatures,
    bytes[] memory calldatas,
    string memory description,
    uint256 forBlockchain
) public returns (uint256);
```

### execute

The function is to execute the proposal list of transactions.

| Parameter name | Annotation                                      |
| -------------- | ----------------------------------------------- |
| proposalId     | The ID of the proposal that should be executed. |

Anyone can call this once it's ETA has arrived.

```
function execute(uint256 proposalId) public payable;
```

### cancel

The function is to cancel a proposal. In case if a proposer are no longer hold the votes that were required to propose.

| Parameter name | Annotation                                      |
| -------------- | ----------------------------------------------- |
| proposalId     | The ID of the proposal that should be canceled. |

```
function cancel(uint256 proposalId) public;
```

### state

The function is to get the current status of a proposal.

| Parameter name | Annotation                                      |
| -------------- | ----------------------------------------------- |
| proposalId     | The ID of the proposal that should be canceled. |

```
function state(uint256 proposalId) public view returns (ProposalState);
```

The `ProposalState` enum is:

| Field name     | Annotation                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------ |
| Pending        | The proposal is pending.                                                                         |
| Active         | The proposal is pending and voters can vote now.                                                 |
| ActiveTimelock | The proposal is pending and passed quorum, time lock of 2 days activated, still open for voting. |
| Canceled       | The proposal is canceled.                                                                        |
| Defeated       | The voters voted against.                                                                        |
| Succeded       | The voters voted for.                                                                            |
| Expired        | The proposal time has passed. And it's no longer votable for.                                    |
| Executed       | The proposal transactions has been executed.                                                     |

### castVote

The function is to cast the users vote on a proposal.

| Parameter name | Annotation                      |
| -------------- | ------------------------------- |
| proposalId     | The ID of the proposal.         |
| support        | Is the vote "FOR" or "AGAINST". |

```
function castVote(uint256 proposalId, bool support) public;
```

### getChainId

The function is to return the chain ID on which the contract was deployed.

```
function getChainId() public view returns (uint256);
```

### emitSucceeded

The function allows anyone to emit details about proposal that passed. Can be used for cross-chain proposals using blockheader proofs.

| Parameter name | Annotation              |
| -------------- | ----------------------- |
| proposalId     | The ID of the proposal. |

```
function emitSucceeded(uint256 _proposalId) public;
```
