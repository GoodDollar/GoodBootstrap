---
description: What is GoodDollar’s sybil-resistance mechanism and how does it work?
---

# Sybil-Resistance

GoodDollar’s mission is to enable anyone in the world with access to a smartphone to easily verify their unique identity and gain access to GoodDollar UBI while still maintaining the principles of one person, one UBI. The goal behind the design of GoodDollar’s Sybil-resistance solution is to enable non-financial and non-technical people to easily and quickly get onboard and start receiving UBI, while preventing fraud and abuse.

The sybil-resisitance solution is based upon each member verifying themselves and their associated EVM-wallet as an address associated with a unique, live member. This a crucial component that ensures the fair distribution of G$ while preventing individuals from registering multiple times.

When signing up for GoodDollar in GoodWallet or in a 3rd party wallet, a new member will be asked to verify that they are a unique and live person. This approaches utilizes best in class facial verification technology. Once an individual proves they are a live and unique human being, a hash is generated and associated with the wallet address that they have created (GoodWallet) or are attempting to verify (existing EVM-address, 3rd party wallet). At that point their GoodID has been generated, which means this wallet address is able to access and receive G$ tokens from the UBI pool. EVM-addresses that are identified as having a GoodID are authorized to claim G$ every day from the UBI smart contract pools.

GoodDollar utilizes face verification and liveness testing through Facetec’s Zoom 3D technology. FaceTec is the first and only \*\*face authenticator certified to Level 1 & 2 in the the i Beta/NIST. Presentation Attack Detection test based on the ISO 30107-3 standard. With an FAR setting of 1 / 4.2M @ <1% FRR, and patented 3D depth detection and human liveness detection that isn’t fooled by 2D photos, videos, or even 3D masks or dolls, FaceTec is able to ensure uniqueness up to 4.2 million faces per database. FaceTec is used by HSBC, TrustID, Department of homeland security, among many other companies. (More:[https://www.facetec.com](https://www.facetec.com))

GoodDollar maintains an anonymized dataset of facemaps for all registrants, continuously striving to confirm the uniqueness of each newly submitted face against this repository. All this data is stored anonymously, without any linkage to the GoodDollar user profile, blockchain address, or internal records.

This approach establishes a robust safeguard, ensuring that even in the event of a database breach, potential attackers would be unable to link faces to any personally identifiable information. Neither the GoodDollar team nor any other entity possesses the capability to correlate this data.

Within this system, each user exclusively retains ownership of their facial record identifier, and when they opt to delete their GoodDollar account, the corresponding record is promptly removed from the facemap database.

More about it: [https://docs.gooddollar.org/products-and-sdks/identity-sybil-resistance](https://docs.gooddollar.org/products-and-sdks/identity-sybil-resistance)

[https://medium.com/gooddollar/gooddollar-identity-pillar-balancing-identity-and-privacy-part-i-face-matching-d6864bcebf54](https://medium.com/gooddollar/gooddollar-identity-pillar-balancing-identity-and-privacy-part-i-face-matching-d6864bcebf54)

[https://www.facetec.com](https://www.facetec.com)
