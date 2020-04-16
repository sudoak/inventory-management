const { GraphQLDateTime } = require('graphql-iso-date');

const customDateScalarResolver = {
  Date: GraphQLDateTime
}

module.exports = [
  customDateScalarResolver
];