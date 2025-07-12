import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const PRODUCTS_BY_CATEGORY = gql`
query ProductsByCategory($filter: CategoryWiseFilter) {
  productsByCategory(filter: $filter) {
    id
    number
    name
    localName
    hsnCode
    tax
    prize
    dnp
    noStock
    minStock
    description
    specification
    seoKeyword
    howToUse
    otherInformation
    shopId
    featureImage
    mastercategory
    category
    categoryId
    publish
    viewPrice
    discount
    offerends
    views
    isOnline
    productId
    productCategoryId
    barcode
    lastUpdate
    addedon
  }
}
`;

export const fetchProductsByCategory = async (secondary) => {
  try {
    const { data } = await client.query({
      query: PRODUCTS_BY_CATEGORY,
      variables: {
        filter: {
          , 
        },
      },
    });

    return data.productsByCategory;
  } catch (error) {
    console.error('❌ Error fetching products by category:', error.message || error);
    throw error;
  }
};          