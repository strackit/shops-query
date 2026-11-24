import { fetchAddonProducts } from '../modules/cart/queries/get.js';

const productIds = process.argv.slice(2).map(Number);
const filter = {
    productIds: productIds.length ? productIds : [12871],
};

const main = async () => {
    console.log('Calling fetchAddonProducts with:', filter);

    try {
        const addons = await fetchAddonProducts(filter);

        if (!Array.isArray(addons)) {
            throw new TypeError('Expected fetchAddonProducts to return an array.');
        }

        console.log(`Received ${addons.length} add-on product(s):`);
        console.log(JSON.stringify(addons, null, 2));
    } catch (error) {
        console.error('Failed to fetch add-on products:', error.message || error);
        process.exitCode = 1;
    }
};

main();
