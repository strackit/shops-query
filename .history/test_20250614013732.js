import client, { gql } from './src/utils/client.js';
import graphqlModules from './index.js'; 

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
  console.error('❌ Error:', err.message);
}



try {
  const data = await graphqlModules.products.getProductsController();
  console.log('✅ Products:', data);
} catch (err) {
  console.error('❌ Error:', err.message);
}