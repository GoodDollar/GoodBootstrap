---
description: Helper contract, basically simple name to address resolver.
---

# NameService

### Events

#### AddressChanged

Emitted when address under the name was changed.

| Parameter name | Annotation           |
| -------------- | -------------------- |
| name           | Name of the address. |
| addr           | The address itself.  |

```
event AddressChanged(string name, address addr);
```

### setAddress

The function that sets the new address under the name.

| Parameter name | Annotation              |
| -------------- | ----------------------- |
| name           | The name of an address. |
| addr           | The new address itself. |

Can only be called by the Avatar.

```
function setAddress(string memory name, address addr) external;
```

### setAddresses

The function that sets the new group of addresses under the names.

| Parameter name | Annotation                         |
| -------------- | ---------------------------------- |
| hash           | The array of keccak256's of names. |
| addrs          | The new addresses themselfs.       |

Can only be called by the Avatar.

```
function setAddresses(bytes32[] calldata hash, address[] calldata addrs) external;
```

### getAddress

The function that gets the address under the name.

| Parameter name | Annotation              |
| -------------- | ----------------------- |
| name           | The name of an address. |

Returns: the address under the given name.

```
function getAddress(string memory name) external view returns (address);
```
