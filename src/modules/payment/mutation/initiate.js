import client, { gql } from '../../../utils/apolloClient.js';

const INITIATE_PAYMENT_MUTATION = gql`
  mutation InitiatePayment(
    $amount: Int!
    $name: String!
    $number: String!
    $domain: String!
    $version: String
    $phonePeId: String
    $phonePeKey: String
    $clientId: String
    $clientSecret: String
    $clientVersion: Int
  ) {
    initiatePayment(
      amount: $amount
      name: $name
      number: $number
      domain: $domain
      version: $version
      phonePeId: $phonePeId
      phonePeKey: $phonePeKey
      clientId: $clientId
      clientSecret: $clientSecret
      clientVersion: $clientVersion
    ) {
      success
      redirectUrl
      message
    }
  }
`;

export async function INITIATE_PAYMENT(vars) {
  const isV2 = vars.version === 'v2' || (vars.clientId && vars.clientSecret && !vars.phonePeKey);
  const variables = {
    amount: Number(vars.amount),
    name: vars.name,
    number: vars.number,
    domain: vars.domain,
    version: vars.version || (isV2 ? 'v2' : 'v1'),
    phonePeId: vars.phonePeId || vars.merchantId || null,
    phonePeKey: vars.phonePeKey || vars.saltKey || null,
    clientId: vars.clientId || null,
    clientSecret: vars.clientSecret || null,
    clientVersion: vars.clientVersion ? Number(vars.clientVersion) : null,
  };

  const { data } = await client.mutate({
    mutation: INITIATE_PAYMENT_MUTATION,
    variables,
  });
  return data.initiatePayment;
}
