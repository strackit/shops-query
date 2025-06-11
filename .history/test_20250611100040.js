const { client, queries } = require('./index');

async function fetchProducts() {
  try {
    const response = await client.query({
      query:{ 
        products: {
          ...queries.products,
  
      id,
         name,
        },
      },
    });

    console.log("Products fetched:", response.data.products);
  } catch (error) {
    console.error(" Error fetching products:", error.message);
  }
}

fetchProducts();
