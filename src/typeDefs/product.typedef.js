const { gql } = require("apollo-server-express");

module.exports = gql`
  type Product {
    id: ID!
    sku: String!
    title : String!
    description: String!
    mrp: String!
    createdAt: Date!
    updatedAt: Date!
  }

  extend type Query {
    products: [Product!]
    product(id: ID!): Product
  }

  input createProductInput {
    sku: String!
    title: String!
    description: String!
    mrp: String!
  }
  extend type Mutation {
    createProduct(input: createProductInput!): Product
  }
`;
