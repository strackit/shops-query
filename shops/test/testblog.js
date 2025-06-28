import blog from '../src/modules/blog/index.js';

async function run() {
  try {
    const filter = {
      shopId: 12 // ✅ REQUIRED FIELD
    };

    const data = await blog.fetchBlog(filter);
    console.log("✅ Blogs fetched:\n", data);
  } catch (err) {
    console.error("❌ Error fetching blogs:", JSON.stringify(err, null, 2));
  }
}

run();
