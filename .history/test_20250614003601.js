import client, { gql } from './src/utils/client.js';
import graphqlModules from './index.js';
const query = gql`
  query {
    categories {
      id
      name
    }
  }
`;

try {
  const result = await client.query({ query });
  console.log('✅ Categories:', result.data);
} catch (err) {
  console.error('❌ Error:', err);
}
