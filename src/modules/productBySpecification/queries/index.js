import client, { gql } from '../../../utils/apolloClient.js';

export const PRODUCT_BY_SPECIFICATION = gql`
  query ProductBySpecification($filter: specificationFilter) {
    productBySpecification(filter: $filter) {
      id
      number
      name
      localName
      hsnCode
      tax
      prize
      dnp
      noStock
      minStock
      description
      seoKeyword
      howToUse
      otherInformation
      shopId
      featureImage
      mastercategory
      category
      categoryId
      publish
      viewPrice
      discount
      offerends
      views
      isOnline
      productId
      productCategoryId
      barcode
      lastUpdate
      addedon
      wishList {
        like
      }
      isAddedToCart {
        inCart
      }
      specification
      variantOf
    }
  }
`;

export const fetchProductsBySpecification = async (filter) => {
  try {
    const variablesFilter = {
      shopId: Number(filter.shopId)
    };

    if (filter.specifications !== undefined) {
      variablesFilter.specifications = filter.specifications;
    } else {
      variablesFilter.specifications = [];
    }

    if (filter.searchKey != null) variablesFilter.searchKey = filter.searchKey;
    if (filter.minPrice != null) variablesFilter.minPrice = Number(filter.minPrice);
    if (filter.maxPrice != null) variablesFilter.maxPrice = Number(filter.maxPrice);
    if (filter.limit != null) variablesFilter.limit = Number(filter.limit);
    if (filter.offset != null) variablesFilter.offset = Number(filter.offset);
    if (filter.userId != null) variablesFilter.userId = Number(filter.userId);

    const { data } = await client.query({
      query: PRODUCT_BY_SPECIFICATION,
      variables: {
        filter: variablesFilter
      }
    });

    return data?.productBySpecification || [];
  } catch (error) {
    console.error('Error fetching products by specification:', error.message);
    throw error;
  }
};
