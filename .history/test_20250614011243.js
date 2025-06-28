
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
  const data = await client.request(query);
  console.log('✅ Categories:', data);
} catch (err) {
  console.error('❌ Error:', err.message);
}
