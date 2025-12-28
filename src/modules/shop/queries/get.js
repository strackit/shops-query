import  client , { gql } from '../../../utils/apolloClient.js';

const GET_SHOPS = gql`
  query GetShops($filter: ShopInput) {
    shop(filter: $filter) {
    id
    name
    category
    address
    area
    city
    state
    deliveryCharge
    deliveryMaximumAmount
    country
    pincode
    gstin
    icon
    featureImage
    description
    views
    productCount
    isOnline
    customDomain
    cartCount
    phone
    siteConfigurations {
      shopId
      googleAnalytics
      razorpayKey
      razorpaySecretKey
      phonePeKey
      phonePeId
    }
    CMS {
      shopId
      termsAndConditions
      cancellationPolicy
      returnsPolicy
      termsOfUse
      paymentSecurity
      privacyPolicy
    }
    }
  }
`;

export async function GET_SHOP_LIST(filter) {
  const { data } = await client.query({
    query: GET_SHOPS,
    variables: { filter },
    fetchPolicy: 'no-cache',
  });

  return data.shop;
}
