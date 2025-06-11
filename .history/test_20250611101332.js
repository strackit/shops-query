// test.js
const { client, queries, mutations } = require('./index');

async function run() {
  try {
    const products = await queries.fetchTopProducts();
    console.log("✅ Top Products:", products);

    const reviews = await queries.fetchProductReviews(123); // Replace with real productId
    console.log("✅ Product Reviews:", reviews);

    const addedReview = await mutations.addProductReview({
      productId: 123,
      userId: 1,
      rating: 5,
      comment: "Awesome!",
    });
    console.log("Review Added:", addedReview);
  } catch (err) {
    console.error(" Error:", err.message);
  }
}

run();
