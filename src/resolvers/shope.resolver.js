const { combineResolvers } = require("graphql-resolvers");

const { checkMiddle } = require("./middleware");
const Shop = require("../database/models/shop.schema");
module.exports = {
  Query: {
    shops: combineResolvers(checkMiddle, async () => {
      return await Shop.find();
    }),
    shop: combineResolvers(checkMiddle, async (_, { id }) => {
      return await Shop.findById(id);
    }),
  },
  Mutation: {
    createShop: combineResolvers(checkMiddle, async (_, { input }) => {
        const newShop =  new Shop({...input});
        return await newShop.save();
    }),
  },
};
