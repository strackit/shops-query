import { fetchProductsBySpecification } from "../queries/index.js";

export async function getProductsBySpecification(filter) {
  return await fetchProductsBySpecification(filter);
}