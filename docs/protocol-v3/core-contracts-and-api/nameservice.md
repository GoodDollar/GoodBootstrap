---
description: Helper contract, basically simple name to address resolver.
---

# NameService

### Events

#### AddressChanged

Emitted when address under the name was changed.

<table><thead><tr><th width="389.63805195347794">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>name</td><td>Name of the address.</td></tr><tr><td>addr</td><td>The address itself.</td></tr></tbody></table>

```
event AddressChanged(string name, address addr);
```

### setAddress

The function that sets the new address under the name.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>name</td><td>The name of an address.</td></tr><tr><td>addr</td><td>The new address itself.</td></tr></tbody></table>

Can only be called by the Avatar.

```
function setAddress(string memory name, address addr) external;
```

### setAddresses

The function that sets the new group of addresses under the names.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>hash</td><td>The array of keccak256's of names.</td></tr><tr><td>addrs</td><td>The new addresses themselfs.</td></tr></tbody></table>

Can only be called by the Avatar.

```
function setAddresses(bytes32[] calldata hash, address[] calldata addrs) external;
```

### getAddress

The function that gets the address under the name.

<table><thead><tr><th width="301.8711599216471">Parameter name</th><th>Annotation</th></tr></thead><tbody><tr><td>name</td><td>The name of an address.</td></tr></tbody></table>

Returns: the address under the given name.

```
function getAddress(string memory name) external view returns (address);
```
