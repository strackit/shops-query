import client from './src/utils/client.js';
import graphqlModules from './index.js';

const runAllModuleQueries = async () => {
  for (const [key, fn] of Object.entries(graphqlModules)) {
    try {
      if (typeof fn === 'function') {
        const result = await fn();
        console.log(`✅ ${key}:`, result);
      } else {
        console.warn(`⚠️ ${key} is not a function`);
      }
    } catch (err) {
      console.error(`❌ Error in ${key}:`, err.response?.errors || err.message);
    }
  }
};

runAllModuleQueries();
