// src/modules/nestedCategory/queries/get.js
import client from ''../../../utils/client";
import {gql} from '../../../utils/client.js';

const GET_NESTED_CATEGORY = gql`
  query GetNestedCategory {
    nestedCategory {
      Categoryname
      SecondaryCategory {
        id
        shopId
        category
      }
      id
    }
  }
`;

export const getNestedCategory = async () => {
  const { data } = await client.query({ query: GET_NESTED_CATEGORY });
  return data.nestedCategory;
};