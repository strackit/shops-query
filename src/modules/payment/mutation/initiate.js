import client , { gql } from '../../../utils/apolloClient.js';

const INITIATE_PAYMENT_MUTATION = gql`
  mutation InitiatePayment(
    $amount: Int!
    $name: String!
    $number: String!
    $phonePeId: String!
    $phonePeKey: String!
    $domain: String!
    $merchantOrderId: String!
  ) {
    initiatePayment(
      amount: $amount
      name: $name
      number: $number
      phonePeId: $phonePeId
      phonePeKey: $phonePeKey
      domain: $domain
      merchantOrderId: $merchantOrderId
    ) {
      success
      redirectUrl
      message
    }
  }
`;

export async function INITIATE_PAYMENT(vars) {
  const { data } = await client.mutate({
    mutation: INITIATE_PAYMENT_MUTATION,
    variables: vars, 
  });
  return data.initiatePayment;
}

const INITIATE_PHONEPE_OAUTH_PAYMENT_MUTATION = gql`
  mutation InitiatePhonePeOAuthPayment($amount: Int!, $accessToken: String!, $domain: String!, $merchantOrderId: String!) {
    initiatePhonePeOAuthPayment(amount: $amount, accessToken: $accessToken, domain: $domain, merchantOrderId: $merchantOrderId) {
      success
      redirectUrl
      message
    }
  }
`;

export async function INITIATE_PHONEPE_OAUTH_PAYMENT(vars) {
  const { data } = await client.mutate({
    mutation: INITIATE_PHONEPE_OAUTH_PAYMENT_MUTATION,
    variables: vars,
  });
  return data.initiatePhonePeOAuthPayment;
}
