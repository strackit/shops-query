import { gql } from 'graphql-tag';
import client from '../../../utils/apolloClient.js';

export const GET_FAQS_QUERY = gql`
  query GetFaqs($filter: FaqFilterInput) {
    getFaqs(filter: $filter) {
      id
      shopId
      productId
      question
      answer
      position
      isActive
      createdAt
    }
  }
`;

export async function GET_FAQS({ filter }) {
  try {
    const { data } = await client.query({
      query: GET_FAQS_QUERY,
      variables: { filter },
      fetchPolicy: 'no-cache',
    });
    return data.getFaqs;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
}
