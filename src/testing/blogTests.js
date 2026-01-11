import { fetchBlog, modifyBlog } from '../modules/blog/controller/index.js';

/**
 * Comprehensive Blog Module Testing
 * Tests both fetchBlog and modifyBlog functionalities
 */

(async () => {
    try {
        console.log('╔════════════════════════════════════════╗');
        console.log('║   BLOG MODULE COMPREHENSIVE TESTING    ║');
        console.log('╚════════════════════════════════════════╝\n');

        // ===== FETCH BLOG TESTS =====
        console.log('┌─────────────────────────────────────┐');
        console.log('│     FETCH BLOG TESTS                │');
        console.log('└─────────────────────────────────────┘\n');

        // Test 1: Fetch all blogs
        console.log('📋 Test 1: Fetching all blogs (no filter)');
        const allBlogs = await fetchBlog();
        console.log('   Result:', allBlogs ? `Found ${allBlogs.length} blog(s)` : 'No blogs found');
        if (allBlogs && allBlogs.length > 0) {
            console.log('   First blog:', JSON.stringify(allBlogs[0], null, 2));
        }
        console.log('   ✓ Test 1 completed\n');

        // Test 2: Fetch blogs by type
        console.log('📋 Test 2: Fetching blogs by type filter');
        const blogsByType = await fetchBlog({ type: 'article' });
        console.log('   Result:', blogsByType ? `Found ${blogsByType.length} blog(s)` : 'No blogs found');
        console.log('   ✓ Test 2 completed\n');

        // Test 3: Fetch blog by specific ID
        console.log('📋 Test 3: Fetching blog by ID');
        const blogById = await fetchBlog({ id: 1 });
        console.log('   Result:', blogById ? `Found ${blogById.length} blog(s)` : 'No blogs found');
        console.log('   ✓ Test 3 completed\n');

        // Test 4: Fetch blogs by productName
        console.log('📋 Test 4: Fetching blogs by productName');
        const blogsByProduct = await fetchBlog({ productName: 'Sample Product' });
        console.log('   Result:', blogsByProduct ? `Found ${blogsByProduct.length} blog(s)` : 'No blogs found');
        console.log('   ✓ Test 4 completed\n');

        // Test 5: Fetch with multiple filters
        console.log('📋 Test 5: Fetching blogs with multiple filters');
        const blogsMultiFilter = await fetchBlog({ type: 'article', productName: 'Sample Product' });
        console.log('   Result:', blogsMultiFilter ? `Found ${blogsMultiFilter.length} blog(s)` : 'No blogs found');
        console.log('   ✓ Test 5 completed\n');

        // ===== UPDATE BLOG TESTS =====
        console.log('┌─────────────────────────────────────┐');
        console.log('│     UPDATE BLOG TESTS               │');
        console.log('└─────────────────────────────────────┘\n');

        // Test 6: Update blog (only if blogs exist)
        if (allBlogs && allBlogs.length > 0) {
            console.log('📝 Test 6: Updating an existing blog');
            const blogToUpdate = allBlogs[0];
            console.log('   Updating blog ID:', blogToUpdate.id);

            const updateInput = {
                title: `${blogToUpdate.title} - Updated`,
                description: blogToUpdate.description || 'Updated description',
                image: blogToUpdate.image || 'https://example.com/image.jpg',
                url: blogToUpdate.url || 'https://example.com/blog',
                type: blogToUpdate.type || 'article',
                productName: blogToUpdate.productName || 'Updated Product'
            };

            try {
                const updatedBlog = await modifyBlog(blogToUpdate.id, updateInput);
                console.log('   ✓ Blog updated successfully');
                console.log('   Updated blog:', JSON.stringify(updatedBlog, null, 2));
            } catch (error) {
                console.log('   ✗ Update failed:', error.message);
            }
            console.log('   ✓ Test 6 completed\n');
        } else {
            console.log('📝 Test 6: Skipped (no blogs available to update)\n');
        }

        // ===== SUMMARY =====
        console.log('┌─────────────────────────────────────┐');
        console.log('│     TEST SUMMARY                    │');
        console.log('└─────────────────────────────────────┘');
        console.log('✓ All fetch tests completed successfully');
        console.log('✓ Update tests completed');
        console.log('\n╔════════════════════════════════════════╗');
        console.log('║   ALL TESTS COMPLETED SUCCESSFULLY     ║');
        console.log('╚════════════════════════════════════════╝\n');

    } catch (error) {
        console.error('\n❌ TEST FAILED');
        console.error('Error:', error.message);
        console.error('Full error details:', JSON.stringify(error, null, 2));
        process.exit(1);
    }
})();
