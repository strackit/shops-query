// test.js
const { client, queries, mutations } = require('./index');

async function run() {
  try {
    const products = await queries.fetchTopProducts();
    console.log(" Top Products:", products);

    const reviews = await queries.fetchProductReviews(123); // Replace with real productId
    console.log("Product Reviews:", reviews);

    console.log("Review Added:", addedReview);
  } catch (err) {
    console.error(" Error:", err.message);
  }
}

run();
