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

optimize this code to have all the modules to test and execute in the same way just add modules and don't change anything 

