//Products 
import client, { gql } from '../src/utils/client.js';
import graphqlModules from '../index.js'; 
const query = gql`
products {
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
`;

try {
  const data = await client.request(query1);
  console.log(' Products:', data);
} catch (err) {
  console.error(' Error:', err.message);
}

