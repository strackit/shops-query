import masterCategories from '../index.js';

export const testMasterCategory = async () => {
  try {
    const result = await getMasterCategories();
    console.log('Master Categories:', result);
  } catch (err) {
    console.error('Master Category Error:', err.message || err);
  }
};

// To auto-run during test
await testMasterCategory();
