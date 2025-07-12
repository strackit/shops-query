// src/modules/products/queries/getByPrice.js

import { gql } from '../../../utils/client.js';
import client from '../../../utils/client.js';

const GET_PRODUCTS_BY_PRICE = gql`
  query ProductByPrice($filter: pricefilter) {
  productByPrice(filter: $filter) {
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

export const fetchProductsByPrice = async ({shopId , price}) => {
  try {
    const response = await client.query({
      query: GET_PRODUCTS_BY_PRICE,
      variables: {
        filter :{
        "shopId": shopId,
        "price" : pro,
      },
    });

    return response?.data?.productByPrice ?? [];
  } catch (error) {
    console.error('❌ Error fetching products by price:', error.message || error);
    throw error;
  }
};