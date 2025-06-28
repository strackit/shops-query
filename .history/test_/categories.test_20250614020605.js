import client, { gql } from '../src/utils/client.js';

const query = gql`
  query {
    categories {
      category
    }
  }
`;

try {
  const data = await client.query({ query });
  console.log('✅ Categories:', data.data);
} catch (err) {
  console.error('❌ Error:', err.message);
}