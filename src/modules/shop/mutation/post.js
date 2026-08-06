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
