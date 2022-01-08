const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const app = express();
const path = require("path");
const cors = require("cors");

var compression = require("compression");
app.use(compression());

const cookieParser = require("cookie-parser");

const config = require("./config/key");

const port = process.env.PORT || 5000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(cors());

app.use(express.urlencoded({ extended: false }));
//to get json data
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", require("./routes/users"));

//use this to show the images in node js server to client (react js)
app.use("/uploads", express.static("uploads"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  // All the javascript and css files will be read and served from this folder
  app.use(express.static(path.join(__dirname, "..client/build")));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
