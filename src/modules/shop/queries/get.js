import client, { gql } from '../../../utils/apolloClient.js';

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
    email
    templateName
    twitter
    instagram
    facebook
    siteConfigurations {
      shopId
      googleAnalytics
      paymentGateways
      razorpayKey
      razorpaySecretKey
      metaPixelId
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

  const shop = data?.shop;
  
  if (Array.isArray(shop)) {
    shop.forEach(s => {
      if (s.siteConfigurations) {
        const siteConfig = s.siteConfigurations;
        
        // Parse the paymentGateways JSON string into a usable object if the server returns it as a string
        if (typeof siteConfig.paymentGateways === 'string') {
          try {
            siteConfig.paymentGateways = JSON.parse(siteConfig.paymentGateways);
          } catch (e) {
            siteConfig.paymentGateways = null;
          }
        }

        // If a shop hasn't been migrated yet (paymentGateways is null/empty in DB),
        // we instantly fake the new JSON structure on the fly using the old Razorpay keys.
        // This prevents the frontend templates from breaking!
        if (!siteConfig.paymentGateways) {
          siteConfig.paymentGateways = {
            defaultGateway: 'razorpay',
            razorpay: {
              key: siteConfig.razorpayKey || '',
              secret: siteConfig.razorpaySecretKey || ''
            }
          };
        }
      }
    });
  } else if (shop && shop.siteConfigurations) {
    const siteConfig = shop.siteConfigurations;
    
    // Parse the paymentGateways JSON string into a usable object if the server returns it as a string
    if (typeof siteConfig.paymentGateways === 'string') {
      try {
        siteConfig.paymentGateways = JSON.parse(siteConfig.paymentGateways);
      } catch (e) {
        siteConfig.paymentGateways = null;
      }
    }

    // If a shop hasn't been migrated yet (paymentGateways is null/empty in DB),
    // we instantly fake the new JSON structure on the fly using the old Razorpay keys.
    // This prevents the frontend templates from breaking!
    if (!siteConfig.paymentGateways) {
      siteConfig.paymentGateways = {
        defaultGateway: 'razorpay',
        razorpay: {
          key: siteConfig.razorpayKey || '',
          secret: siteConfig.razorpaySecretKey || ''
        }
      };
    }
  }

  return shop;
}
