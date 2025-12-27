import client, { gql } from '../../../utils/apolloClient.js';

export const CREATE_PAYMENT_LINK = gql`
  query CreatePaymentLink($filter: createPaymentLinkInput) {
    createPaymentLink(filter: $filter) {
      data
    }
  }
`;

export const fetchPaymentLink = async (filter) => {
    try {
        const { data } = await client.query({
            query: CREATE_PAYMENT_LINK,
            variables: {
                filter: {
                    shopId: Number(filter.shopId),
                    plainId: String(filter.plainId)
                }
            }
        });

        return data?.createPaymentLink || null;
    } catch (error) {
        console.error('Error creating payment link:', error.message);
        throw error;
    }
};
