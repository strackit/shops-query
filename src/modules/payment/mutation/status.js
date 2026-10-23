import client, { gql } from '../../../utils/apolloClient.js';

const CHECK_PAYMENT_STATUS_MUTATION = gql`
  mutation CheckPaymentStatus(
    $transactionId: String!
    $version: String
    $phonePeId: String
    $phonePeKey: String
    $clientId: String
    $clientSecret: String
    $clientVersion: Int
  ) {
    checkPaymentStatus(
      transactionId: $transactionId
      version: $version
      phonePeId: $phonePeId
      phonePeKey: $phonePeKey
      clientId: $clientId
      clientSecret: $clientSecret
      clientVersion: $clientVersion
    ) {
      success
      message
      status
    }
  }
`;

export async function CHECK_PAYMENT_STATUS(params) {
  let variables;
  if (typeof params === 'object' && params !== null) {
    const isV2 = params.version === 'v2' || (params.clientId && params.clientSecret && !params.phonePeKey);
    variables = {
      transactionId: params.transactionId,
      version: params.version || (isV2 ? 'v2' : 'v1'),
      phonePeId: params.phonePeId || params.merchantId || null,
      phonePeKey: params.phonePeKey || params.saltKey || null,
      clientId: params.clientId || null,
      clientSecret: params.clientSecret || null,
      clientVersion: params.clientVersion ? Number(params.clientVersion) : null,
    };
  } else {
    variables = {
      transactionId: params,
      version: 'v1',
      phonePeId: null,
      phonePeKey: null,
      clientId: null,
      clientSecret: null,
      clientVersion: null,
    };
  }

  const { data } = await client.mutate({
    mutation: CHECK_PAYMENT_STATUS_MUTATION,
    variables,
  });
  return data.checkPaymentStatus;
}
