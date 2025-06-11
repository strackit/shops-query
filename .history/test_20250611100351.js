// test.js
const { client, queries } = require('./index');

async function testProductQuery() {
  try {
    const response = await client.query({
      query: queries.PRODUCT_BY_FILTERS_QUERY,
      variables: {
        filters: {
          categoryId: 1,
          minPrice: 100,
          maxPrice: 1000,
        },
      },
    });

    console.log(" Product by filters:", response.data.productByFilters);
  } catch (error) {
    console.error("❌ Error executing query:", error.message);
  }
}

testProductQuery();
