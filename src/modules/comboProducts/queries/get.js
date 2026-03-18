
import { gql } from 'graphql-tag';
import client from '../../../utils/apolloClient.js';

const GET_COMBO_PRODUCTS = gql`
  query ComboProducts($filter: comboProductFilter) {
    comboProducts(filter: $filter) {
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
      wishList { like }
      isAddedToCart { inCart }
      specification
      productImage { id image productId }
      variantOf
      isCombo
      stockStatus { totalQty hasVariants }
    }
  }
`;

export async function GET_COMBO_PRODUCTS_DATA(filter) {
  try {
    const { data } = await client.query({
      query: GET_COMBO_PRODUCTS,
      variables: { filter }
    });
    return data?.comboProducts;
  } catch (err) {
    console.error("Full GraphQL Error:", JSON.stringify(err, null, 2));
    throw err;
  }
}
