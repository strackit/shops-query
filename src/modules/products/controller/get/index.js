import { fetchProducts } from "../../queries/get.js";

export const getProductsController = async (arg) => {
  if (typeof arg === "number") {
    return await fetchProducts({ shopId: arg });
  }

  if (typeof arg === "object" && arg !== null) {
    return await fetchProducts(arg);
  }

  console.error("Invalid argument passed to getProductsController:", arg);
  return [];
};

export const getProductByIdController = async (productId) => {
  return await fetchProducts({ productId });
};

export default {
  getProductsController,
  getProductByIdController,
};