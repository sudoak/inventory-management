const { GraphQLDateTime } = require("graphql-iso-date");
const productResolver = require("./product.resolver");
const shopResolver = require("./shope.resolver");

const customDateScalarResolver = {
  Date: GraphQLDateTime,
};

module.exports = [customDateScalarResolver, productResolver, shopResolver];
