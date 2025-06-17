import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const UPDATE_PRODUCT = gql`
mutation Mutation($productId: Int, $shopId: Int, $userId: Int, $update: Boolean, $quantity: Int) {
  Cart(productId: $productId, shopId: $shopId, userId: $userId, Update: $update, quantity: $quantity) {
    productId
    userId
    shopId
    quantity
    id
  }
}`;

export const handleIncrease = (product) => {
        let quantity = Number(product.quantity) + 1;
        updateProduct({
            variables: {
                "productId": Number(product.productId),
                "shopId": context.shopId,
                "userId": userId(),
                "update": true,
                "quantity": quantity,
            },
        })

  return data.addToCart;
};
