import { gql } from 'graphql-tag';
import client from '../../../utils/apolloClient.js';

export const GET_WHY_CHOOSE_US_QUERY = gql`
  query GetWhyChooseUs($filter: whyChooseUsFilterInput) {
    whyChooseUs(filter: $filter) {
      id
      shop_id
      position
      title
      description
      file_path
      file_size
      update_on
    }
  }
`;

export async function GET_WHY_CHOOSE_US({ filter }) {
  try {
    const { data } = await client.query({
      query: GET_WHY_CHOOSE_US_QUERY,
      variables: { filter },
      fetchPolicy: 'no-cache',
    });
    return data.whyChooseUs;
  } catch (error) {
    console.error('Error fetching WhyChooseUs:', error);
    throw error;
  }
}
