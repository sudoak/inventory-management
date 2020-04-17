const { GraphQLDateTime } = require("graphql-iso-date");
const productResolver = require("./product.resolver");

const customDateScalarResolver = {
  Date: GraphQLDateTime,
};

module.exports = [customDateScalarResolver, productResolver];
