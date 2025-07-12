// 📁 src/modules/banner/queries/get.js
import { gql } from 'graphql-tag';
import { client } from '../../../utils/apolloClient.js';

export const GET_BANNERS = gql`
  query GetBanners($filter: bannerFilterInput) {
    banners(filter: $filter) {
      id
      title
      image
      priority
      addedon
      link
    }
  }
`;

export const GET_BANNER_DATA = async (filter) => {
  try {
    console.log('📦 Sending filter:', filter);
    const { data } = await client.query({
      query: GET_BANNERS,
      variables: { filter }
    });
    console.log("✅ Banner Data:", data);
    return data?.banners;
  } catch (error) {
    console.error("❌ Error in GET_BANNERS:", error);
    throw error;
  }
};
