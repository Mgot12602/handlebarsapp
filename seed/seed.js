const DomainChange = require("../models/DomainChange.model");
const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/HandlebarsApp";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );

    return DomainChange.create({
      newScan: {
        DomainName: "www.cookies.com",
        Status: 1, // 0 not taken, 1 taken
      },
      oldScan: {
        DomainName: "www.cookies.com",
        Status: 0, // 0 not taken, 1 taken
      },
    })
      .then((createdReceipt) => {
        console.log(createdReceipt);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
