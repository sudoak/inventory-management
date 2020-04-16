require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const { connection } = require("./database/utils");
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const app = express();

connection();

app.use(cors());
app.use(express.json());

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.applyMiddleware({ app, path: "/graphql" });

const PORT = process.env.PORT || 3000;

app.use("/", (req, res, next) => {
  res.send({ message: "Hello" });
});

const httpServer = app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
  console.log(`Graphql Endpoint: ${apolloServer.graphqlPath}`);
});
