import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import graphqlModules from './index.js';
import client, { gql } from './src/utils/client.js';

const rl = readline.createInterface({ input, output });

const tests = [
  {
    name: 'Categories Query',
    execute: async () => {
      const query = gql`query { categories { category } }`;
      const data = await client.query({ query });
      console.log('✅ Categories:', data.data);
    }
  },
  {
    name: 'Get Products',
    execute: async () => {
      const data = await graphqlModules.products.getProductsController();
      console.log('✅ Products:', data);
    }
  },
  {
    name: 'Update Product',
    execute: async () => {
      const data = await graphqlModules.products.updateProductController(1, { name: 'Updated Product' });
      console.log('✅ Updated Product:', data);
    }
  },
  {
    name: 'Fetch Cart',
    execute: async () => {
      const data = await graphqlModules.cart.fetchCart(1);
      console.log('✅ Cart:', data);
    }
  },
  {
    name: 'Add to Cart',
    execute: async () => {
      const data = await graphqlModules.cart.addToCart({
        product: { productId: 1, quantity: 1 },
        shopId: 1,
        userId: 1,
      });
      console.log('✅ Added to Cart:', data);
    }
  },
  {
    name: 'Fetch Wishlist',
    execute: async () => {
      const data = await graphqlModules.wishlist.fetchWishlist(1);
      console.log('✅ Wishlist:', data);
    }
  },
  {
    name: 'Get Product Reviews',
    execute: async () => {
      const data = await graphqlModules.productReviews.getProductReviewsController(1);
      console.log('✅ Product Reviews:', data);
    }
  },
  {
    name: 'Listen to Order Updates',
    execute: async () => {
      graphqlModules.orderUpdates.listenToOrderUpdatesController();
      console.log('✅ Listening to order updates...');
    }
  }
];

(async () => {
  console.log('\n🔍 Available Tests:');
  tests.forEach((test, i) => console.log(`  [${i + 1}] ${test.name}`));

  const answer = await rl.question('\n👉 Choose test number to run (or `all`): ');
  rl.close();

  if (answer.toLowerCase() === 'all') {
    for (const test of tests) {
      console.log(`\n🧪 Running: ${test.name}`);
      await test.execute();
    }
  } else {
    const index = parseInt(answer) - 1;
    if (tests[index]) {
      console.log(`\n🧪 Running: ${tests[index].name}`);
      await tests[index].execute();
    } else {
      console.error('❌ Invalid selection.');
    }
  }
})();
