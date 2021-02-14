const { Schema, model } = require("mongoose");

const DomainChangeSchema = new Schema({
  newScan: {
    DomainName: String,
    Status: Boolean, // 0 not taken, 1 taken
  },
  oldScan: {
    DomainName: String,
    Status: Boolean, // 0 not taken, 1 taken
  },
});

const DomainChange = model("DomainChange", DomainChangeSchema);

module.exports = DomainChange;
