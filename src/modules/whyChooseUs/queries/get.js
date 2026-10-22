import { gql } from 'graphql-tag';
import client from '../../../utils/apolloClient.js';

export const GET_WHYCHOOSEUS = gql`
  query GetWhyChooseUs($filter: WhyChooseUsFilterInput!) {
    getWhyChooseUs(filter: $filter) {
      id
      shopId
      position
      title
      description
      filePath
      fileSize
      updateOn
    }
  }
`;



export const GET_WHYCHOOSEUS_DATA = async (filter) => {
  try {
    const { data } = await client.query({
      query: GET_WHYCHOOSEUS,
      variables: { filter }
    });
    return data?.getWhyChooseUs;
  } catch (error) {
    console.error("Error in GET_WHYCHOOSEUS:", error);
    throw error;
  }
};
