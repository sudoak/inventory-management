const { combineResolvers } = require("graphql-resolvers");

const { checkMiddle } = require("./middleware");
const Product = require("../database/models/product.schema");
module.exports = {
  Query: {
    products: combineResolvers(checkMiddle, async () => {
      try {
        return await Product.find();
      } catch (error) {
        console.log(error);
        throw error;
      }
    }),
    product: combineResolvers(checkMiddle, async (_, { id }) => {
      try {
        return await Product.findById(id);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }),
  },
  Mutation: {
    createProduct: combineResolvers(checkMiddle, async (_, { input }) => {
      try {
          console.log(input);
          
          const _ = new Product({...input});
          return await _.save();
      } catch (error) {
        console.log(error);
        throw error;
      }
    }),
  },
};
