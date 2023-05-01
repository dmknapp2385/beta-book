const mongoose = require("mongoose");

//options are to work around deprecation in MongoDB node.js driver
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/betabook");

module.exports = mongoose.connection;

// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   }
