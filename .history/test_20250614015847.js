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


//