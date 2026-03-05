import client, { gql } from '../../../utils/apolloClient.js';

const GET_TEMPLATE_SETTINGS = gql`
  query GetTemplateSettings($shopId: String!, $type: String) {
    getTemplateSettings(shopId: $shopId, type: $type) {
      id
      shopId
      type
      value
    }
  }
`;

export async function GET_TEMPLATE_SETTINGS_LIST(shopId, type) {
  try {
    const { data } = await client.query({
      query: GET_TEMPLATE_SETTINGS,
      variables: {
        shopId,
        type
      },
      fetchPolicy: 'no-cache'
    });

    return data?.getTemplateSettings ?? [];
  } catch (error) {
    console.error('Error fetching template settings:', error?.message || error);
    throw error;
  }
}
