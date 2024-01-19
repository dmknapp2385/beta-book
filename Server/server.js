const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
//TODO: MAKE AUTH AND SCHEMA
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const cors = require("cors");
const db = require("./config/connection");
//possibly delete this
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async () => {
  //create new Apollo serer and pass schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  // Start server
  await server.start();

  // integrate Apollo server with Express application as middleare
  server.applyMiddleware({ app });

  //log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:4200"],
//   })
// );

// //console log db requests for easy debug
// mongoose.set("debug", true);

//if in production, server client/build as static assets
//TODO: UPDATE THE PATH NAME ONCE CLIENT SIDE HAS BEEN BUILT
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

//start db
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
