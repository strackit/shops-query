import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

const PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($filter: CategoryWiseFilter) {
  productsByCategory(filter: $filter) {
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

export const fetchProductsByCategory = async (productcategoryId, shopId) => {
  try {
    const { data } = await client.query({
      query: PRODUCTS_BY_CATEGORY,
      variables: {
        filter: {
          categoryId: Number(categoryId),
          shopId: Number(shopId),
        },
      },
    });

    return data.productsByCategory;
  } catch (error) {
    console.error('❌ Error fetching products by category:', error.message || error);
    throw error;
  }
};
