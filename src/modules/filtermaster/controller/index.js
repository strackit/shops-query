import { fetchFilterMasterByShop } from '../queries/index.js';

export async function getFilterMasterByShop(filter) {
    return await fetchFilterMasterByShop(filter);
}
