import client, { gql } from '../../../utils/apolloClient.js';

const TRACK_META_EVENT = gql`
  mutation TrackMetaEvent($shopId: ID!, $eventName: String!, $eventId: String!, $customData: GraphQLJSON, $userData: GraphQLJSON) {
    trackMetaEvent(shopId: $shopId, eventName: $eventName, eventId: $eventId, customData: $customData, userData: $userData) {
      success
      message
    }
  }
`;

export async function TRACK_SERVER_META_EVENT(shopId, eventName, eventId, customData = {}, userData = {}) {
  const { data } = await client.mutate({
    mutation: TRACK_META_EVENT,
    variables: { shopId, eventName, eventId, customData, userData },
  });

  return data.trackMetaEvent;
}

const GENERATE_PHONEPE_OAUTH_TOKEN = gql`
  mutation GeneratePhonePeOAuthToken($filter: ShopInput!) {
    generatePhonePeOAuthToken(filter: $filter) {
      success
      accessToken
      tokenType
      expiresIn
      expiresAt
      message
    }
  }
`;

export async function GENERATE_PHONEPE_TOKEN(filter) {
  const { data, errors } = await client.mutate({
    mutation: GENERATE_PHONEPE_OAUTH_TOKEN,
    variables: { filter },
  });

  if (errors?.length) {
    const messages = errors.map(error =>
      error.message || error.extensions?.stacktrace?.[0] || error.extensions?.code || 'Unknown GraphQL error'
    );
    throw new Error(messages.join('; '));
  }

  if (!data?.generatePhonePeOAuthToken) {
    throw new Error('GraphQL response did not include generatePhonePeOAuthToken data');
  }

  return data.generatePhonePeOAuthToken;
}
