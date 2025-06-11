GraphQL Query Package Creation
Project Overview
This project is a modular GraphQL query package designed to streamline data fetching from a GraphQL API. It includes pre-defined queries and mutations grouped by key schema domains such as Shop, Orders, CMS, Payments, and more. The package is structured for reusability and easy integration into frontend or backend applications.

 
 Objective
To build a reusable JavaScript package containing optimized GraphQL operations that can be imported into various projects for efficient data retrieval.
🛠 Technologies Used
- JavaScript (ES Modules)
- GraphQL
- Apollo Client (usage)
- Node.js (for local testing)

 
 Folder Structure

graphql-package/
 client.js
 index.js
 test.js

 graphql-package/queries/ 
 address.js
 banner.js
 blog.js
 cart.js
 categories.js
 cms.js
 customerSupport.js
 ipaddress.js
 masterCategories.js
 nestedCategory.js
 offerProducts.js
 orders.js
 payment.js
 productByCategory.js
 productByFilters.js
 productByPrice.js
 productReviews.js
 products.js
 promotion.js
 ratings.js
 searchProducts.js
 secondaryCategories.js
 shop.js
 topProducts.js
 wishList.js

graphql-package/
package-lock.json
package.json


Each file corresponds to a GraphQL schema group and contains related queries/mutations.
 How to Use
1. Import Queries:

   Example:
   import { GET_ORDERS } from './queries';

2. Use with Apollo Client:

   const { data } = useQuery(GET_ORDERS);

3. Run Test File (Optional):

   Create a test file like test.js:
   import { GET_ORDERS } from './index.js';
   console.log(GET_ORDERS);

   Then run:
   node test.js

Scope and Modules
The project covers:

- Shop & CMS
- Orders & Ratings
- Address & Support
- Payments
- Promotions & Blogs

Each module includes:
- Query types
- Input types
- Relevant mutations

Team Collaboration
This package was developed collaboratively, with each team member assigned to different schema categories. The final integration merges all contributions into a single functional package.
