const { gql } = require ('graphql-tag');

// 🟡 QUERY

 const GET_BLOGS = gql`
  query GetBlogs($filter: blogFilter) {
    Blog(filter: $filter) {
      id
      title
      content
      tags
      publishedAt
    }
  }
`;

module