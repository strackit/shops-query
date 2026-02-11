import { fetchCart } from '../modules/cart/index.js';

/**
 * Cart Module Data Fetch Testing
 * Tests the fetchCart functionality and validates the data structure
 */

(async () => {
    try {
        console.log('╔════════════════════════════════════════╗');
        console.log('║      CART DATA FETCH TESTING          ║');
        console.log('╚════════════════════════════════════════╝\n');

        // Configuration
        const TEST_SHOP_ID = 591;
        const TEST_USER_ID = 2964;

        console.log(`📋 Parameters: shopId=${TEST_SHOP_ID}, userId=${TEST_USER_ID}`);
        console.log('⏳ Fetching cart data...\n');

        const cartItems = await fetchCart(TEST_SHOP_ID, TEST_USER_ID);

        if (!cartItems || cartItems.length === 0) {
            console.log('⚠️  No items found in the cart for this user.');
        } else {
            console.log(`✅ Success! Found ${cartItems.length} item(s) in cart.\n`);

            // Display detailed info for each item
            cartItems.forEach((item, index) => {
                console.log(`┌── Item #${index + 1} ─────────────────────────────┐`);
                console.log(`│ Name:     ${item.name || 'N/A'}`);
                console.log(`│ ProductID: ${item.productId}`);
                console.log(`│ Quantity:  ${item.quantity}`);
                console.log(`│ Price:     ${item.prize}`);
                console.log(`│ Discount:  ${item.Discount || 0}%`);
                console.log(`│ Category:  ${item.category || 'N/A'}`);

                if (item.specifications && item.specifications.length > 0) {
                    console.log('│ Specifications:');
                    item.specifications.forEach(spec => {
                        console.log(`│   - ${spec.specification}: ${spec.value}`);
                    });
                }
                console.log(`└────────────────────────────────────────────┘\n`);
            });

            // Validate structure of the first item
            const firstItem = cartItems[0];
            const requiredFields = [
                'id', 'productId', 'userId', 'shopId', 'quantity',
                'prize', 'Discount', 'name', 'featureImage', 'tax'
            ];

            console.log('🔍 Structure Validation:');
            let allFieldsPresent = true;
            requiredFields.forEach(field => {
                if (firstItem.hasOwnProperty(field)) {
                    console.log(`   ✓ ${field}: ${typeof firstItem[field]}`);
                } else {
                    console.log(`   ✗ ${field}: MISSING`);
                    allFieldsPresent = false;
                }
            });

            if (allFieldsPresent) {
                console.log('\n✨ All expected fields are present in the response.');
            } else {
                console.log('\n❌ Some expected fields are missing from the response.');
            }
        }

        console.log('\n╔════════════════════════════════════════╗');
        console.log('║        TEST COMPLETED SUCCESSFULLY     ║');
        console.log('╚════════════════════════════════════════╝\n');

    } catch (error) {
        console.error('\n❌ TEST FAILED');
        console.error('Error Message:', error.message);
        console.error('Stack Trace:', error.stack);
        process.exit(1);
    }
})();
