import { fetchAddonProducts } from '../modules/cart/queries/get.js';
import { addToCart } from '../modules/cart/mutations/add.js';
import { fetchCart } from '../modules/cart/queries/get.js';

// Replace with real IDs from your database
const SHOP_ID = 1;
const USER_ID = 1;
const PRODUCT_ID = 1;
const ADDON_PARENT_PRODUCT_ID = null; // set to a parent product id to test an add-on item

const results = [];

const run = async (name, fn) => {
  console.log(`\n--- ${name} ---`);
  try {
    const out = await fn();
    results.push({ name, ok: true });
    console.log('PASS');
    return out;
  } catch (error) {
    results.push({ name, ok: false });
    console.error('FAIL:', error.message);
    return null;
  }
};

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg);
};

(async () => {
  console.log('=== Testing cart: add-on products, mutation, get ===');

  await run('Get add-on products', async () => {
    const addons = await fetchAddonProducts({
      productIds: [PRODUCT_ID],
      userId: USER_ID,
      shopId: SHOP_ID
    });
    console.log(JSON.stringify(addons, null, 2));
    assert(Array.isArray(addons), 'Expected an array');
    if (addons.length) {
      ['id', 'addon_product_id', 'product_name', 'addon_price'].forEach((k) =>
        assert(k in addons[0], `Missing field ${k}`)
      );
    }
  });

  await run('Mutation: add to cart', async () => {
    const item = await addToCart({
      userId: USER_ID,
      shopId: SHOP_ID,
      productId: PRODUCT_ID,
      quantity: 1,
      addonParentProductId: ADDON_PARENT_PRODUCT_ID
    });
    console.log(JSON.stringify(item, null, 2));
    assert(item, 'No item returned');
    assert(Number(item.productId) === PRODUCT_ID, 'productId mismatch');
    assert('addonParentProductId' in item, 'addonParentProductId missing in response');
  });

  await run('Get cart', async () => {
    const cart = await fetchCart(SHOP_ID, USER_ID);
    console.log(JSON.stringify(cart, null, 2));
    assert(Array.isArray(cart), 'Expected an array');
    const found = cart.find(
      (i) =>
        Number(i.productId) === PRODUCT_ID &&
        Number(i.addonParentProductId || 0) === Number(ADDON_PARENT_PRODUCT_ID || 0)
    );
    assert(found, 'Added item not found in cart');
    assert('addonParentProductId' in found, 'addonParentProductId missing in cart item');
  });

  console.log('\n=== Summary ===');
  results.forEach((r) => console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}`));
  process.exitCode = results.every((r) => r.ok) ? 0 : 1;
})();
