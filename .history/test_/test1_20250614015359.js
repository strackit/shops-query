//Products 

const query1 = gql`
query {
    products {
      CategoryId
      masterCategoryId
      productId
      shopId
      userId
    }
  }
`;

try {
  const data = await client.request(query1);
  console.log(' Products:', data);
} catch (err) {
  console.error(' Error:', err.message);
}

