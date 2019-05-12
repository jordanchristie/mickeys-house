const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./graphql/types");
const { resolvers } = require("./graphql/resolvers");
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
});

server.listen(PORT).then(() => console.log(`GraphQL initiated at ${PORT}🚀`));
