import { gql } from 'graphql-tag';
import client from '../../../utils/apolloClient.js';

const GET_BLOGS_QUERY = gql`
  query GetCMS($shopId: Int!) {
    getCMS(shopId: $shopId) {
      cancellationPolicy
      paymentSecurity
      privacyPolicy
      returnsPolicy
      shopId
      termsAndConditions
      termsOfUse
    }
  }
`;

export async function GET_CMS(shopId) {
  try {
    const { data } = await client.query({
      query: GET_BLOGS_QUERY,
      variables: {
        shopId
      }
    });
    return data?.getCMS;

  } catch (err) {
    console.error("Full GraphQL Error:", JSON.stringify(err, null, 2));
    throw err;
  }
}
