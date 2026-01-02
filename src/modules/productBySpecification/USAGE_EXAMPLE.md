# getProductsByFilters Usage Guide

## Overview

The `getProductsByFilters` function allows you to fetch products with flexible filtering options. All parameters are optional, allowing you to query products based on any combination of filters.

## Function Signature

```javascript
getProductsByFilters({
  productId, // Optional: Product ID
  masterCategory, // Optional: Master category name
  secondaryCategory, // Optional: Secondary category name
  offset, // Optional: Pagination offset
  limit, // Optional: Pagination limit
  shopId, // Optional: Shop ID
});
```

## Import

```javascript
import shopQuery from "shops-query";
// or
import { getProductsByFilters } from "shops-query/src/modules/productBySpecification/index.js";
```

## Usage Examples

### Example 1: Get all products from a shop with pagination

```javascript
const products = await shopQuery.productBySpecification.getProductsByFilters({
  shopId: 123,
  offset: 0,
  limit: 10,
});
```

### Example 2: Get products by master category

```javascript
const products = await shopQuery.productBySpecification.getProductsByFilters({
  shopId: 123,
  masterCategory: "Electronics",
});
```

### Example 3: Get products by both master and secondary category

```javascript
const products = await shopQuery.productBySpecification.getProductsByFilters({
  shopId: 123,
  masterCategory: "Electronics",
  secondaryCategory: "Smartphones",
});
```

### Example 4: Get a specific product by ID

```javascript
const products = await shopQuery.productBySpecification.getProductsByFilters({
  productId: 456,
  shopId: 123,
});
```

### Example 5: Get products with pagination from specific category

```javascript
const products = await shopQuery.productBySpecification.getProductsByFilters({
  shopId: 123,
  masterCategory: "Fashion",
  secondaryCategory: "Men's Wear",
  offset: 20,
  limit: 10,
});
```

### Example 6: Only some parameters (flexible usage)

```javascript
// Just master category
const products1 = await shopQuery.productBySpecification.getProductsByFilters({
  masterCategory: "Books",
});

// Just pagination
const products2 = await shopQuery.productBySpecification.getProductsByFilters({
  offset: 0,
  limit: 5,
});
```

## Response Format

Each product in the returned array contains:

```javascript
{
    id: Number,              // Product ID
    productId: Number,       // Product ID (alternative field)
    name: String,           // Product Name
    description: String,    // Product Description
    prize: Number,          // Product Price
    discount: Number,       // Product Discount
    featureImage: String,   // Main product image URL
    wishList: {
        like: Boolean       // Wishlist added or not
    },
    isAddedToCart: {
        inCart: Boolean     // Cart added or not
    },
    productImage: [         // Array of product images
        {
            id: Number,
            image: String,
            productId: Number
        }
    ]
}
```

## Notes

- All parameters are optional
- If no parameters are provided, the function will attempt to return all products (use with caution)
- The function returns an empty array `[]` if no products match the filters
- Pagination is recommended for large datasets to improve performance
- The function throws an error if the GraphQL query fails
