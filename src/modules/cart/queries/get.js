import client, { gql } from '../../../utils/apolloClient.js';

export const GET_CART = gql`
  query GetCart($filter: CartFilter1) {
    cart(filter: $filter) {
      id
      productId
      userId
      shopId
      quantity
      addon_parent_product_id
      prize
      Discount
      name
      featureImage
      tax
      noStock
      minStock
      mastercategory
      hsnCode
      shippingCost
      description
      category
      customSpecification
      Specifications {
        specification
        value
      }
    }
  }
`;

export const GET_ADDON_PRODUCTS = gql`
  query GetAddonProducts($filter: AddonProductsFilterInput) {
    getAddonProducts(filter: $filter) {
      id
      addon_product_id
      product_name
      feature_image
      actual_price
      discount_rs
      addon_price
    }
  }
`;

export const fetchCart = async (shopId, userId) => {
  try {
    const { data, errors } = await client.query({
      query: GET_CART,
      variables: {
        filter: {
          shopId: Number(shopId),
          userId: Number(userId),
        },
      },
      fetchPolicy: "network-only",
    });

    if (errors) {
      throw new Error(errors.map(e => e.message).join(', '));
    }

    return data?.cart || [];
  } catch (error) {
    console.error('Error fetching cart:', error.message);
    throw error;
  }
};

export const fetchAddonProducts = async (filter = {}) => {
  try {
    const { data, errors } = await client.query({
      query: GET_ADDON_PRODUCTS,
      variables: { filter },
      fetchPolicy: "no-cache",
    });

    if (errors) {
      throw new Error(errors.map((error) => error.message).join(', '));
    }

    return data?.getAddonProducts || [];
  } catch (error) {
    console.error('Error fetching add-on products:', error.message);
    throw error;
  }
};