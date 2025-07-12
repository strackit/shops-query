// // products/src/modules/productByFilters/queries/get.js

// import { gql } from '../../../utils/client.js'; 
// import client from '../../../utils/client.js';

// const GET_PRODUCTS_BY_FILTERS = gql`
//   query Query($filter: filterKeys) {
//     productByFilters(filter: $filter) {
//       id
//       number
//       name
//       localName
//       hsnCode
//       tax
//       prize
//       dnp
//       noStock
//       minStock
//       description
//       specification
//       seoKeyword
//       howToUse
//       otherInformation
//       shopId
//       featureImage
//       mastercategory
//       category
//       categoryId
//       publish
//       viewPrice
//       discount
//       offerends
//       views
//       isOnline
//       productId
//       productCategoryId
//       barcode
//       lastUpdate
//       addedon
//     }
//   }
// `;

// export const fetchProductsByFilters = async (filters) => {
//   try {
//     const response = await client.query({
//       query: GET_PRODUCTS_BY_FILTERS,
//       variables: { filter: filters }, // ✅ FIXED
//     });

//     return response?.data?.productByFilters ?? [];
//   } catch (error) {
//     console.error('❌ Error fetching products by filters:', error.message || error);
//     throw error;
//   }
// };
