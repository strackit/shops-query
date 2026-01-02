import { fetchProducts, fetchProductsByFilters } from "../../queries/get.js";

export const getProductsController = async (shopId, categoryId) => {
  return await fetchProducts({ shopId, categoryId });
};

export const getProductByIdController = async (productId) => {
  return await fetchProducts({ productId, byProductId: false });
};

export const getProductByproductIdController = async (productId) => {
  return await fetchProducts({ productId, byProductId: true });
};

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

export default {
  getProductsController,
  getProductByIdController,
  getProductByproductIdController,
  getProductsByFilters,
};
