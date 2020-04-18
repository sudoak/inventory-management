const { gql } = require("apollo-server-express");

module.exports = gql`
    type Shop {
        id: ID!
        name: String!
        gstin: String!
        product: [Product!]
    }
    extend type Query {
        shops: [Shop]
        shop(id: ID!): Shop
    }
    extend type Mutation {
        createShop(input: createShopInput!):Shop
        updateShop(input: updateShopInput!): Shop
    }
    
    input updateShopInput {
        name: String
        gstin: String
    }
    input createShopInput {
        name: String!
        gstin: String!
    }
`;