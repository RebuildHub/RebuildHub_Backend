const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wasteSchema = new Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
    enum : ["PAPERS" , "METALS" , "PLASTIC"  ,  "E-WASTE"]
  },
  rate: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  company: {
    type: String,
  },
  image: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("waste", wasteSchema);
