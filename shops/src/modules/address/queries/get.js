// src/modules/address/queries/get.js

import { gql, client } from '../../../utils/apolloClient.js';

export const GET_ADDRESS = gql`
  query GetAddress($filter: addressFilter) {
    address(filter: $filter) {
      id
      userId
      city
      state
      country
      pincode
    }
  }
`;

export const fetchAddress = async (filter) => {
  try {
    const { data } = await client.query({
      query: GET_ADDRESS,
      variables: { filter }
    });

    console.log("✅ DATA:", data);
    return data?.address;
  } catch (error) {
    console.error("❌ Error in GET_ADDRESS:", error);
    throw error;
  }
};
