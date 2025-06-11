const { client, queries } = require('./index');

async function fetchProductByFilters() {
  try {
    const response = await client.query({
      query:{ 
        RODUCT_BY_FILTERS_QUERY, variables: { filters } });
  return data.productByFilters;
};
      },
    });

    console.log("Products fetched:", response.data.products);
  } catch (error) {
    console.error(" Error fetching products:", error.message);
  }
}

fetchProducts();
