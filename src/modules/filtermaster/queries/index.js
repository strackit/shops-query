import client, { gql } from '../../../utils/apolloClient.js';

export const GET_FILTER_MASTER_BY_SHOP = gql`
  query GetFilterMasterByShop($filter: speficiationFilter) {
    getFilterMasterByShop(filter: $filter) {
      specificationMaster
      specificationValue
    }
  }
`;

export const fetchFilterMasterByShop = async (filter) => {
    try {
        const { data } = await client.query({
            query: GET_FILTER_MASTER_BY_SHOP,
            variables: {
                filter: {
                    shopId: Number(filter.shopId),
                    categoryName: filter.categoryName || null,
                    masterCategoryName: filter.masterCategoryName || null
                }
            }
        });

        return data?.getFilterMasterByShop || [];
    } catch (error) {
        console.error('Error fetching filter master:', error.message);
        throw error;
    }
};
