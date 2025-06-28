import { gql } from 'graphql-tag';

export const ORDER_UPDATES_SUBSCRIPTION = gql`
  subscription {
    orderUpdates {
      id
      status
      updatedAt
    }
  }
`;
