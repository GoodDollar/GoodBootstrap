# Get latest G$ Price

The primary G$ price can be queried directly from the reserve smart contract or fetched from GoodDollar ethereum subgraph.

* subgraph endpoint [https://api.thegraph.com/subgraphs/name/gooddollar/goodsubgraphs](https://api.thegraph.com/subgraphs/name/gooddollar/goodsubgraphs)
* subgraph playground [https://thegraph.com/hosted-service/subgraph/gooddollar/goodsubgraphs](https://thegraph.com/hosted-service/subgraph/gooddollar/goodsubgraphs)

Use the following query to get the latest price:

```graphql
// graphql query
{
  reserveHistories(first: 1 orderBy:block orderDirection:desc) {
    blockTimestamp
    closePriceDAI
    openPriceDAI
  }
```

