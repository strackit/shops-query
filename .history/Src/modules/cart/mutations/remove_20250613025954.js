import client from '../../../utils/client.js';
import { gql } from '@apollo/client/core';

const REMOVE_FROM_CART = gql`
mutation Mutation($delete: Boolean, $productId: Int, $userId: Int, $shopId: Int) {
    Cart(Delete: $delete, productId: $productId, userId: $userId, shopId: $shopId) {
      productId
      userId
      shopId
    }
  }`
  ;

export const removeFromCart = (product) => {
        let quantity = Number(product.quantity) - 1;
        if (quantity > 0) {
            updateProduct({
                variables: {
                    "productId": Number(product.productId),
                    "shopId": context.shopId,
                    "userId": userId(),
                    "update": true,
                    "quantity": quantity,
                },
            });
          };
