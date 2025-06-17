import client from '../../../utils/client.js';
import { gql } from '../../../utils/client.js';

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

// Then in the function:
export const fetchProducts = async (filter) => {
  const { data } = await client.query({
    query: GET_PRODUCTS,
    variables: { filter : userId , start , shopId , productId , masterCategoryId , end , cate},
  });
  return data.products;
};
