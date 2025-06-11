const { gql } = require('apollo-server');

client.query({
  query: queries.products,
  variables: {
    filter: {
      category: "T-Shirts",
    },
  },
}).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error("Error:", error.message);
});
