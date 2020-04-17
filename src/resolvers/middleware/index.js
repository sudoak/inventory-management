const { skip } = require('graphql-resolvers');

module.exports.checkMiddle = () => {
    console.log("called");
    return skip;
  }