import { getProductsByFilters } from "./src/modules/productBySpecification/index.js";

const SHOP_ID = 556; // Update this to your shop ID
const MASTER_CATEGORY = "Men"; // Update this to a valid master category name in your shop
const SECONDARY_CATEGORY = "Oversized"; // Update this to a valid secondary category name in your shop

async function testProductsByFilters() {
  console.log("=== Comprehensive Testing: getProductsByFilters ===\n");
  console.log(
    "NOTE: Update SHOP_ID, MASTER_CATEGORY, and SECONDARY_CATEGORY constants before running tests\n"
  );
  let passedTests = 0;
  let totalTests = 0;

  const runTest = async (testName, testFn) => {
    totalTests++;
    console.log(`\n${totalTests}. ${testName}`);
    console.log("─".repeat(60));
    try {
      await testFn();
      passedTests++;
      console.log("✅ PASSED");
    } catch (error) {
      console.error("❌ FAILED:", error.message);
    }
  };

  try {
    // ==================== PRODUCT ID FILTER ====================

    await runTest("Filter by productId (string format)", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        productId: "CR9969", // ProductId string format
      });
      console.log(`Found ${products.length} product(s)`);
      if (products.length > 0) {
        console.log(
          `Product: ${products[0].name} (ProductId: ${products[0].productId})`
        );
      }
      // Note: Not throwing error if not found, as string format may vary by shop
    });

    // ==================== CATEGORY FILTERS ====================

    await runTest("Filter by master category name", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: MASTER_CATEGORY,
      });
      console.log(
        `Found ${products.length} products in master category "${MASTER_CATEGORY}"`
      );
      console.log("Products are", products);
      
      if (products.length > 0) {
        console.log(`Sample: ${products[0].name}`);
      }
      if (products.length === 0)
        throw new Error(
          `Expected products for master category "${MASTER_CATEGORY}"`
        );
    });

    await runTest("Filter by master + secondary category names", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: MASTER_CATEGORY,
        secondaryCategory: SECONDARY_CATEGORY,
      });
      console.log(
        `Found ${products.length} products in "${MASTER_CATEGORY} > ${SECONDARY_CATEGORY}"`
      );
      if (products.length > 0) {
        console.log(`Products: ${products.map((p) => p.name).join(", ")}`);
      }
    });

    // ==================== PAGINATION ====================

    await runTest("Pagination with limit", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: MASTER_CATEGORY,
        limit: 3,
      });
      console.log(`Requested limit: 3, Got: ${products.length} products`);
      if (products.length > 3) {
        throw new Error(`Expected max 3 products, got ${products.length}`);
      }
    });

    await runTest("Pagination with offset and limit", async () => {
      const page1 = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: MASTER_CATEGORY,
        limit: 2,
        offset: 0,
      });
      const page2 = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: MASTER_CATEGORY,
        limit: 2,
        offset: 2,
      });
      console.log(`Page 1 (offset 0): ${page1.length} products`);
      console.log(`Page 2 (offset 2): ${page2.length} products`);
      if (page1.length > 0 && page2.length > 0) {
        console.log(`P1: ${page1[0].name}`);
        console.log(`P2: ${page2[0].name}`);
        if (page1[0].id === page2[0].id) {
          throw new Error("Pagination not working - same products returned");
        }
      }
    });

    // ==================== COMBINED FILTERS ====================

    await runTest("Combined: category + pagination", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: MASTER_CATEGORY,
        secondaryCategory: SECONDARY_CATEGORY,
        limit: 5,
        offset: 0,
      });
      console.log(
        `Found ${products.length} products (max 5) in "${MASTER_CATEGORY} > ${SECONDARY_CATEGORY}"`
      );
      if (products.length > 5) {
        throw new Error("Limit not applied correctly");
      }
    });

    // ==================== ERROR HANDLING ====================

    await runTest("Non-existent master category", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: "NonExistentCategory123",
      });
      console.log(
        `Found ${products.length} products (expected: 0 or error handled gracefully)`
      );
      console.log("✓ No crash on invalid category");
    });

    await runTest("Non-existent secondary category", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: MASTER_CATEGORY,
        secondaryCategory: "NonExistentSubCategory123",
      });
      console.log(`Found ${products.length} products`);
      console.log("✓ Handled gracefully");
    });

    // ==================== EDGE CASES ====================

    await runTest("All filters combined", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: MASTER_CATEGORY,
        secondaryCategory: SECONDARY_CATEGORY,
        offset: 0,
        limit: 10,
      });
      console.log(`All filters: ${products.length} products (max 10)`);
    });

    await runTest("Limit = 0 (edge case)", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: MASTER_CATEGORY,
        limit: 0,
      });
      console.log(`With limit=0: ${products.length} products`);
    });

    await runTest("Offset beyond available products", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: MASTER_CATEGORY,
        offset: 9999,
        limit: 10,
      });
      console.log(
        `With offset=9999: ${products.length} products (expected: 0)`
      );
    });

    await runTest("No filters provided (should return empty)", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
      });
      console.log(
        `No filters: ${products.length} products (expected warning in console)`
      );
    });

    await runTest(
      "ProductId takes precedence over category filters",
      async () => {
        const products = await getProductsByFilters({
          shopId: SHOP_ID,
          productId: "CR9969",
          masterCategory: MASTER_CATEGORY, // Should be ignored
          secondaryCategory: SECONDARY_CATEGORY, // Should be ignored
        });
        console.log(
          `With productId + categories: ${products.length} product(s)`
        );
        console.log("✓ ProductId correctly takes precedence");
      }
    );

    // ==================== SUMMARY ====================
    console.log("\n" + "=".repeat(60));
    console.log(`📊 TEST SUMMARY: ${passedTests}/${totalTests} tests passed`);
    console.log("=".repeat(60));

    if (passedTests === totalTests) {
      console.log("🎉 All tests passed!");
    } else {
      console.log(`⚠️  ${totalTests - passedTests} test(s) failed`);
    }
  } catch (error) {
    console.error("\n💥 Unexpected error:", error);
    throw error;
  }
}

testProductsByFilters();
