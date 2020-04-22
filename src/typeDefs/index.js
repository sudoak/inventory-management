const { gql } = require("apollo-server-express");
const productTypedef = require("./product.typedef");
const shopTypedef = require("./shop.typedef");
const userTypedef = require("./user.typedef");

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

module.exports = [typeDefs, productTypedef, shopTypedef, userTypedef];
