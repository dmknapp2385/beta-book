const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
//TODO: MAKE AUTH AND SCHEMA
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const db = require("./config/connection");
//possibly delete this
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);
app.use(require("./routes"));

//will console log db requests for easy debug
mongoose.set("debug", true);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
