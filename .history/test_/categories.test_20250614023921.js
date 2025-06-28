import client, { gql } from '../src/utils/client.js';

const GET_CATEGORIES = gql`
  query {
    categories {
      category
    }
  }
`;

export const fetchCategoriesTest = async () => {
  try {
    const response = await client.query({ query: GET_CATEGORIES });

    if (response && response.data && response.data.categories) {
      console.log('Fetched Categories:', JSON.stringify(response.data.categories, null, 2));
    } else {
      console.warn('No categories returned.');
    }

    return response.data.categories;
  } catch (err) {
    console.error('Fetch Categories Error:', err);
    return null;
  }
};

// fetchCategoriesTest(); // Uncomment to run directly
