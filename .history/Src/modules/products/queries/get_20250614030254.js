import client, { gql } from '../../../utils/client.js';

// GraphQL Query (unchanged)
export const GET_PRODUCTS = gql`
  query GetProducts($filter: productfilter) {
    products(filter: $filter) {
      wishList {
        like
      }
      views
      viewPrice
      tax
      specification
      shopId
      seoKeyword
      quantity {
        quantity
      }
      publish
      productImage {
        productId
        image
        id
      }
      productId
      productCategoryId
      prize
      otherInformation
      offerends
      number
      noStock
      name
      minStock
      mastercategory
      localName
      lastUpdate
      isOnline
      isAddedToCart {
        inCart
      }
      id
      hsnCode
      howToUse
      featureImage
      dnp
      discount
      description
      categoryId
      category
      barcode
      addedon
      Specifications {
        value
        specification
      }
    }
  }
`;

// Reusable fetch function with parameter destructuring
export const fetchProducts = async ({
  userId,
  start,
  shopId,
  productId,
  masterCategoryId,
  end,
  categoryId,
}) => {
  try {
    const filter = { userId, start, shopId, productId, masterCategoryId, end, categoryId };
    const { data } = await client.query({
      query: GET_PRODUCTS,
      variables: { filter },
    });

    return data?.products || [];
  } catch (error) {
    console.error('❌ Failed to fetch products:', error.message);
    return [];
  }
};
