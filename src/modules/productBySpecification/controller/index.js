import { fetchProductsBySpecification } from "../queries/index.js";
import { fetchProductsByFilters } from "../queries/get.js";

export async function getProductsBySpecification(filter) {
  return await fetchProductsBySpecification(filter);
}

export async function getProductsByFilters({
  productId = null,
  masterCategory = null,
  secondaryCategory = null,
  offset = null,
  limit = null,
  shopId = null,
}) {
  return await fetchProductsByFilters({
    productId,
    masterCategory,
    secondaryCategory,
    offset,
    limit,
    shopId,
  });
}
