
const runAllQueriesAndMutations = async () => {
  try {
    console.log('\n🚀 Running GraphQL Tests...\n');
    console.log('⌛ Waiting for live updates...\n(Press Ctrl+C to exit)');
  } catch (err) {
    console.error('❌ Error in running tests:', err);
  }
};

runAllQueriesAndMutations();
