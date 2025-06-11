const { client, queries } = require('./index');

client.query({
  query: queries.products,
  variables: {
    filter: {
      categoryId: "",
    },
  },
}).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error("Error:", error.message);
});
