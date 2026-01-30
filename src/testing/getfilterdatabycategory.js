import { getProductsBySpecification } from '../modules/productBySpecification/index.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from project root
dotenv.config({ path: path.join(__dirname, '../../.env') });

async function testFilter() {
    console.log('--- Testing Product By Specification Filter ---');

    const filter = {
        shopId: 481, // Example shop ID, adjust as needed
        masterCategoryName: "plan", // Test masterCategoryName
        secondaryCategoryName: "non-vastu",
        specifications: [],
        searchKey: "22",
        minPrice: null,
        maxPrice: null,
        offset: 0,
        limit: 100,
        userId: 2511
    };

    try {
        console.log('Sending filter:', JSON.stringify(filter, null, 2));
        const products = await getProductsBySpecification(filter);
        console.log('Success! Received products:', products.length);

        if (products.length > 0) {
            console.log('--- All Products ---');
            products.forEach((product, index) => {
                console.log(`${index + 1}.`, {
                    id: product.id,
                    name: product.name,
                    mastercategory: product.mastercategory,
                    category: product.category,
                    prize: product.prize
                });
            });
        } else {
            console.log('No products found matching the criteria.');
        }
    } catch (error) {
        console.error('Test Failed!');
        console.error('Error details:', error.message);
    }
}

testFilter();
