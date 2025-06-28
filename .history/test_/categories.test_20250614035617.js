import client, { gql } from '../src/utils/client.js';

const query = gql`
  query {
    categories {
      category
    }
  }
`;

export const fetchCategoriesTest = async () => {
  try {
    const data = await client.request(query); // ✅ Fix here
    console.log('Categories:', data);
  } catch (err) {
    console.error('Fetch Categories Error:', err);
  }
};
