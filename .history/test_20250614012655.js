import client, { gql } from './src/utils/client.js';
import graphqlModules from './index.js'; // This should export all controllers grouped under module names

const tests = [
  //  Categories
  {
    name: 'Categories Query',
    execute: async () => {
      const query = gql`
        query {
          categories {
            category
          }
        }
      `;
      const data = await client.query({ query });
      console.log(' Categories:', data.data);
    },
  },

  //  Products
  {
    name: 'Get Products',
    execute: async () => {
      if (graphqlModules.products?.getProductsController) {
        const data = await graphqlModules.products.getProductsController();
        console.log(' Products:', data);
      } else {
        console.warn(' getProductsController not found');
      }
    },
  },
  {
    name: 'Update Product',
    execute: async () => {
      if (graphqlModules.products?.updateProductController) {
        const result = await graphqlModules.products.updateProductController(1, { name: 'Updated Product' });
        console.log(' Product Updated:', result);
      } else {
        console.warn(' updateProductController not found');
      }
    },
  },

  //  Cart
  {
    name: 'Fetch Cart',
    execute: async () => {
      if (graphqlModules.cart?.fetchCart) {
        const data = await graphqlModules.cart.fetchCart(1); // User ID
        console.log(' Cart:', data);
      } else {
        console.warn(' fetchCart not found');
      }
    },
  },
  {
    name: 'Add to Cart',
    execute: async () => {
      if (graphqlModules.cart?.addToCart) {
        const data = await graphqlModules.cart.addToCart({
          product: { productId: 1, quantity: 1 },
          shopId: 1,
          userId: 1,
        });
        console.log(' Added to Cart:', data);
      } else {
        console.warn(' addToCart not found');
      }
    },
  },
  {
    name: 'Remove from Cart',
    execute: async () => {
      if (graphqlModules.cart?.removeFromCart) {
        const data = await graphqlModules.cart.removeFromCart({
          product: { productId: 1, quantity: 1 },
          shopId: 1,
          userId: 1,
        });
        console.log(' Removed from Cart:', data);
      } else {
        console.warn(' removeFromCart not found');
      }
    },
  },

  //  Wishlist
  {
    name: 'Fetch Wishlist',
    execute: async () => {
      if (graphqlModules.wishlist?.fetchWishlist) {
        const data = await graphqlModules.wishlist.fetchWishlist(1); // User ID
        console.log('✅ Wishlist:', data);
      } else {
        console.warn('⚠️ fetchWishlist not found');
      }
    },
  },
  {
    name: 'Add to Wishlist',
    execute: async () => {
      if (graphqlModules.wishlist?.addToWishlist) {
        const data = await graphqlModules.wishlist.addToWishlist({
          productId: 1,
          userId: 1,
          shopId: 1,
        });
        console.log('✅ Added to Wishlist:', data);
      } else {
        console.warn('⚠️ addToWishlist not found');
      }
    },
  },
  {
    name: 'Remove from Wishlist',
    execute: async () => {
      if (graphqlModules.wishlist?.removeFromWishlist) {
        const data = await graphqlModules.wishlist.removeFromWishlist({
          productId: 1,
          userId: 1,
          shopId: 1,
        });
        console.log('✅ Removed from Wishlist:', data);
      } else {
        console.warn('⚠️ removeFromWishlist not found');
      }
    },
  },

  // ✅ Product Reviews
  {
    name: 'Get Product Reviews',
    execute: async () => {
      if (graphqlModules.productReviews?.getProductReviewsController) {
        const data = await graphqlModules.productReviews.getProductReviewsController(1); // productId
        console.log('✅ Product Reviews:', data);
      } else {
        console.warn('⚠️ getProductReviewsController not found');
      }
    },
  },
  {
    name: 'Add Product Review',
    execute: async () => {
      if (graphqlModules.productReviews?.addReviewController) {
        const data = await graphqlModules.productReviews.addReviewController({
          userId: 1,
          productId: 1,
          review: 'Great product!',
        });
        console.log('✅ Added Review:', data);
      } else {
        console.warn('⚠️ addReviewController not found');
      }
    },
  },
  {
    name: 'Edit Product Review',
    execute: async () => {
      if (graphqlModules.productReviews?.editReviewController) {
        const data = await graphqlModules.productReviews.editReviewController({
          userId: 1,
          productId: 1,
          review: 'Updated review',
        });
        console.log('✅ Edited Review:', data);
      } else {
        console.warn('⚠️ editReviewController not found');
      }
    },
  },

  // ✅ Order Updates Listener
  {
    name: 'Order Updates Listener',
    execute: async () => {
      if (graphqlModules.orderUpdates?.listenToOrderUpdatesController) {
        graphqlModules.orderUpdates.listenToOrderUpdatesController();
        console.log('✅ Order update listener started');
      } else {
        console.warn('⚠️ listenToOrderUpdatesController not found');
      }
    },
  },
];

// 🔁 Execute all tests
(async () => {
  for (const test of tests) {
    try {
      console.log(`\n🧪 Running: ${test.name}`);
      await test.execute();
    } catch (err) {
      console.error(`❌ Error in "${test.name}":`, err.message || err);
    }
  }
})();
