import { getProductsByFilters } from "./src/modules/productBySpecification/index.js";

const SHOP_ID = 556; // Update this to your shop ID

async function testProductsByFilters() {
  console.log("=== Comprehensive Testing: getProductsByFilters ===\n");
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
    // ==================== BASIC FILTERS ====================

    await runTest("Filter by shopId only (all products)", async () => {
      const products = await getProductsByFilters({ shopId: SHOP_ID });
      console.log(`Found ${products.length} total products`);
      if (products.length === 0)
        throw new Error("Expected products but got none");
    });

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

    await runTest("Filter by master category (name)", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: "Men",
      });
      console.log(`Found ${products.length} products in "Men" category`);
      console.log(products);
      if (products.length > 0) {
        console.log(`Sample: ${products[0].name}`);
      }
      if (products.length === 0)
        throw new Error("Expected Men category products");
    });

    await runTest("Filter by master + secondary category (names)", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: "Men",
        secondaryCategory: "Oversized",
      });
      console.log(`Found ${products.length} products in "Men > Oversized"`);
      if (products.length > 0) {
        console.log(`Products: ${products.map((p) => p.name).join(", ")}`);
      }
    });

    await runTest("Case-insensitive category matching", async () => {
      const products1 = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: "Men",
      });
      const products2 = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: "men", // lowercase
      });
      console.log(`"Men": ${products1.length} products`);
      console.log(`"men": ${products2.length} products`);
      if (products1.length !== products2.length) {
        throw new Error("Case-insensitive matching failed");
      }
    });

    // ==================== PAGINATION ====================

    await runTest("Pagination with limit", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: "Men",
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
        masterCategory: "Men",
        limit: 2,
        offset: 0,
      });
      const page2 = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: "Men",
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
        masterCategory: "Men",
        secondaryCategory: "Crew Neck",
        limit: 5,
        offset: 0,
      });
      console.log(
        `Found ${products.length} products (max 5) in "Men > Crew Neck"`
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
        `Found ${products.length} products (expected: all or none based on fallback)`
      );
      console.log("✓ No crash on invalid category");
    });

    await runTest("Non-existent secondary category", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: "Men",
        secondaryCategory: "NonExistentSubCategory123",
      });
      console.log(`Found ${products.length} products`);
      console.log("✓ Handled gracefully");
    });

    // ==================== EDGE CASES ====================

    await runTest("All filters combined", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: "Men",
        secondaryCategory: "Crew Neck",
        offset: 0,
        limit: 10,
      });
      console.log(`All filters: ${products.length} products (max 10)`);
    });

    await runTest("Limit = 0 (edge case)", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        limit: 0,
      });
      console.log(`With limit=0: ${products.length} products`);
    });

    await runTest("Offset beyond available products", async () => {
      const products = await getProductsByFilters({
        shopId: SHOP_ID,
        masterCategory: "Men",
        offset: 9999,
        limit: 10,
      });
      console.log(
        `With offset=9999: ${products.length} products (expected: 0)`
      );
    });

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
