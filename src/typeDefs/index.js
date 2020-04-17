const { gql } = require('apollo-server-express');
const productTypedef = require('./product.typedef');
const typeDefs = gql`
  scalar Date

  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
  type Subscription {
    _: String
  }
`;

module.exports = [typeDefs, productTypedef];
