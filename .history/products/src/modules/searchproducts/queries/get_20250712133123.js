import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const SEARCH_PRODUCTS = gql`
  query SearchProducts($filter: searchfilter) {
  searchProducts(filter: $filter) {
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

export const searchProducts = async (shopId , keyword , userId) => {
  try {
    const { data } = await client.query({
      query: SEARCH_PRODUCTS,
      variables:
        filter: {
          shopId,
          userId,
          keyword,
        },
    );
    return data.searchProducts;
  } catch (error) {
    console.error(' Error searching products:', error.message || error);
    throw error;
  }
};