const { GraphQLSchema } = require("graphql");
const RootQuery = require("../query/rootQuery");
const RootMutation = require("../mutation/rootMutation");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
