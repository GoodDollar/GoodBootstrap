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

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>id</td><td>The ID of the proposal.</td></tr><tr><td>proposer</td><td>The address of the proposer.</td></tr><tr><td>targets</td><td>The targets list of contracts to be executed on.</td></tr><tr><td>values</td><td>The list of native token value to be used in each contract call.</td></tr><tr><td>signatures</td><td>The list of functions signatures to execute on <code>targets</code>.</td></tr><tr><td>calldatas</td><td>The list of parameters to pass to each function in <code>signatures</code>.</td></tr><tr><td>startBlock</td><td>Starting block number of voting.</td></tr><tr><td>endBlock</td><td>Ending block number of voting.</td></tr><tr><td>description</td><td>Short description of the proposal.</td></tr></tbody></table>

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

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>id</td><td>The ID of the proposal.</td></tr><tr><td>proposer</td><td>The address of the proposer.</td></tr><tr><td>targets</td><td>The targets list of contracts to be executed on.</td></tr><tr><td>values</td><td>The list of native token value to be used in each contract call.</td></tr><tr><td>signatures</td><td>The list of functions signatures to execute on <code>targets</code>.</td></tr><tr><td>calldatas</td><td>The list of parameters to pass to each function in <code>signatures</code>.</td></tr><tr><td>startBlock</td><td>Starting block number of voting.</td></tr><tr><td>endBlock</td><td>Ending block number of voting.</td></tr><tr><td>forBlockchain</td><td>The chain ID.</td></tr><tr><td>eta</td><td>An exact time of the proposal bridging.</td></tr><tr><td>forVotes</td><td>An amount of vote power "FOR".</td></tr><tr><td>againstVotes</td><td>An amount of vote power "AGAINST".</td></tr></tbody></table>

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

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>id</td><td>The ID of the proposal.</td></tr><tr><td>forBlockchain</td><td>The chain ID of the blockchain proposal made for.</td></tr></tbody></table>

```
event ProposalBridge(uint256 id, uint256 indexed forBlockchain);
```

#### VoteCast

An event emitted when a vote has been cast on a proposal.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>voter</td><td>The voter address.</td></tr><tr><td>proposalId</td><td>The proposal ID for which the vote was cast.</td></tr><tr><td>support</td><td>Check whether the vote cast was "FOR" or "AGAINST".</td></tr><tr><td>votes</td><td>The amount of voting power for the vote cast.</td></tr></tbody></table>

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

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>id</td><td>The ID of the proposal.</td></tr></tbody></table>

```
event ProposalCanceled(uint256 id);
```

#### ProposalQueued

An event emitted when a proposal has been queued.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>id</td><td>The ID of the proposal.</td></tr><tr><td>eta</td><td>The timestamp of the queueing.</td></tr></tbody></table>

```
event ProposalQueued(uint256 id, uint256 eta);
```

#### ProposalExecuted

An event emitted when a proposal has been executed.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>id</td><td>The ID of the proposal.</td></tr></tbody></table>

```
event ProposalExecuted(uint256 id);
```

#### ProposalExecutionResult

An event emitted when a proposal call has been executed.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>id</td><td>The ID of the proposal.</td></tr><tr><td>index</td><td>The index of the target contract from proposal.</td></tr><tr><td>ok</td><td>The status of the proposal call.</td></tr><tr><td>result</td><td>The result of the proposal call.</td></tr></tbody></table>

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

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>newGuardian</td><td>The new guardian address.</td></tr></tbody></table>

```
event GuardianSet(address newGuardian);
```

#### ParametersSet

An event emitted when a new voting parameters set.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>params</td><td>The voting parameters.</td></tr></tbody></table>

Here's the per index description of each parameter.

<table><thead><tr><th width="150">Index</th><th>Annotation</th></tr></thead><tbody><tr><td>0</td><td>The default voting period.</td></tr><tr><td>1</td><td>The default quorum percentage.</td></tr><tr><td>2</td><td>The proposal percentage.</td></tr><tr><td>3</td><td>The proposal max operations.</td></tr><tr><td>4</td><td>The delay in blocks before the newly created proposal would work.</td></tr><tr><td>5</td><td>The duration of time (in seconds) after proposal passed thershold before it can be executed.</td></tr><tr><td>6</td><td>The duration of time (in seconds) after proposal passed with absolute majority before it can be executed.</td></tr><tr><td>7</td><td>During the queue period if vote decision has changed, the queue period time duration is extended so that at least this amount of time in seconds is left.</td></tr><tr><td>8</td><td>The duration of time (in seconds) a succeeded proposal has to be executed on the blockchain.</td></tr></tbody></table>

```
event ParametersSet(uint256[9] params);
```

### propose

The function creates a proposal to be voted on.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>targets</td><td>The address of the contracts on which proposal actions should be executed.</td></tr><tr><td>values</td><td>The amounts of native tokens that should be sent to the <code>targets</code> addresses.</td></tr><tr><td>signatures</td><td>The function selectors (signatures) that should be called as proposals actions should a proposal succeed.</td></tr><tr><td>calldatas</td><td>The call arguments for the <code>signatures</code>.</td></tr><tr><td>description</td><td>The short description of a proposal.</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>proposalId</td><td>The ID of the proposal that should be executed.</td></tr></tbody></table>

Anyone can call this once it's ETA has arrived.

```
function execute(uint256 proposalId) public payable;
```

### cancel

The function is to cancel a proposal. In case if a proposer are no longer hold the votes that were required to propose.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>proposalId</td><td>The ID of the proposal that should be canceled.</td></tr></tbody></table>

```
function cancel(uint256 proposalId) public;
```

### state

The function is to get the current status of a proposal.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>proposalId</td><td>The ID of the proposal that should be canceled.</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>proposalId</td><td>The ID of the proposal.</td></tr><tr><td>support</td><td>Is the vote "FOR" or "AGAINST".</td></tr></tbody></table>

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

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>proposalId</td><td>The ID of the proposal.</td></tr></tbody></table>

```
function emitSucceeded(uint256 _proposalId) public;
```
