import assert from 'node:assert/strict';
import { generatePhonePeOAuthToken } from '../modules/shop/controller/index.js';

const shopId = 462;

if (!shopId) {
  console.error('Provide a shop ID as an argument or set SHOP_ID.');
  process.exit(1);
}

try {
  const result = await generatePhonePeOAuthToken({ shopId });

  assert.equal(result?.success, true, result?.message || 'Token generation failed');
  assert.ok(result.accessToken, 'The GraphQL mutation did not return an access token');
  console.log('PhonePe OAuth token mutation succeeded.');
  console.log(`Token type: ${result.tokenType || 'not provided'}`);
  console.log(`Expires in: ${result.expiresIn ?? 'not provided'} seconds`);
} catch (error) {
  console.error('PhonePe OAuth token mutation test failed:', error.message || error.stack || String(error));
  process.exitCode = 1;
}
