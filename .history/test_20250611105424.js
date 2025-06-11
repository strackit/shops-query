const { queries, mutations } = require('./index');

// Example usage
queries.fetchTopProducts().then(console.log);
mutations.placeOrder({ ...input }).then(console.log);
