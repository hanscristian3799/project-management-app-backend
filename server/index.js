const express = require("express");
const colors = require("colors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = require("./graphql/schema/schema");
const connectDB = require("./config/db");

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Listening on port: ${port}`));
