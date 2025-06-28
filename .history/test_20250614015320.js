import client, { gql } from './src/utils/client.js';
import graphqlModules from './index.js'; 

// Categories 
const query = gql`
  query {
    categories {
      category 
    }
  }
`;

try {
  const data = await client.request(query);
  console.log(' Categories:', data);
} catch (err) {
  console.error(' Error:', err.message);
}

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


//