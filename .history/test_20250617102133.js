import client, { gql } from '../utils/client.js';

const TEST_QUERY = gql`
  query {
    categories(filter: { shopId: 12, status: true }) {
      category
    }
  }
`;

try {
  const res = await client.request(TEST_QUERY);
  console.log('✅ Success:', res);
} catch (err) {
  console.error('❌ Error:', err.message || err);
}
