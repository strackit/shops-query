import client, { gql } from "../../../utils/apolloClient.js";

const GET_TOP_PRODUCTS = gql`
  query Query($filter: top) {
    topProducts(filter: $filter) {
      id
      number
      name    
      wishList {
        like
      }
      isAddedToCart {
        inCart
      }
      addedon
      description
      dnp
      discount
      featureImage
      isOnline
      noStock
      minStock
      offerends
      prize
      productId
      tax
      views 
    }
  }
`;

const GET_BASIC_DETAILS_OF_TOP_PRODUCTS = gql`
  query Query($filter: top) {
    topProducts(filter: $filter) {
      id
      isAddedToCart {
        inCart
      }
      name
      prize
      discount
      publish
      tax
      wishList {
        like
      }
      productImage {
        id
        image
        productId
      }
      featureImage
      description
      isOnline
      noStock
    }
  }
`;

export const fetchBasicDetailTopProducts = async (shopId, userId) => {
  try {
    const { data } = await client.query({
      query: GET_BASIC_DETAILS_OF_TOP_PRODUCTS,
      variables: { filter: { shopId: Number(shopId), userId } },
    });
    return data.topProducts;
  } catch (error) {
    console.error('Error fetching top products:', error.message || error);
    throw error;
  }
}

export const fetchTopProducts = async (shopId) => {
  try {
    const { data } = await client.query({
      query: GET_TOP_PRODUCTS,
      variables: { filter: { shopId: Number(shopId) } },
    });
    return data.topProducts;
  } catch (error) {
    console.error('Error fetching top products:', error.message || error);
    throw error;
  }
};
