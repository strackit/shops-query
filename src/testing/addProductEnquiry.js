import 'dotenv/config';
import assert from 'node:assert/strict';
import { addProductEnquiry } from '../modules/productEnquiry/mutations/add.js';

const readId = (name) => {
  const value = Number(process.env[name]);
  if (!process.env[name] || !Number.isInteger(value) || value <= 0) {
    throw new Error(`${name} must be set to a positive integer`);
  }
  return value;
};

async function testAddProductEnquiry() {
  const userId = 1;
  const productId = 18073;
  const shopId = 462;

  const enquiry = await addProductEnquiry({ userId, productId, shopId });

  assert.equal(enquiry.productId, productId);
  assert.equal(enquiry.shopId, shopId);
  assert.equal(typeof enquiry.id, 'number');
  assert.equal(typeof enquiry.userName, 'string');
  assert.equal(typeof enquiry.userMobile, 'string');
  assert.equal(typeof enquiry.customerId, 'number');

  console.log('addProductEnquiry mutation test passed:', enquiry);
}

testAddProductEnquiry().catch((error) => {
  console.error('addProductEnquiry mutation test failed:', error.message || error);
  process.exitCode = 1;
});
