import client, { gql } from '../../../utils/apolloClient.js';

const PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($filter: CategoryWiseFilter) {
    productsByCategory(filter: $filter) {
      id
      number
      name
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
      wishList {
        like
      }
      isAddedToCart {
        inCart
      }
    }
  }
`;

export const fetchProductsByCategory = async (masterCategory, shopId, secondaryCategory = null, offset = null, limit = null) => {
  try {
    const filter = {
      master: masterCategory,
      shopId: Number(shopId)
    };

    if (secondaryCategory) {
      filter.secondary = secondaryCategory;
    }

    if (limit) {
      filter.limit = limit;
    }

    if (offset) {
      filter.offset = offset;
    }

    const { data } = await client.query({
      query: PRODUCTS_BY_CATEGORY,
      variables: { filter }
    });

    return data?.productsByCategory || [];
  } catch (error) {
    console.error('Error fetching products by category:', error.message);
    throw error;
  }
};