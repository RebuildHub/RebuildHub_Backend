const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isCompany: {
    type: Boolean,
    default :false
  },
});

module.exports = mongoose.model("user", userSchema);
