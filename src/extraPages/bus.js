const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  specs: {
    engine: String,
    stoelen: String,
    location: String,
    gearType: String,
    aantalDeuren: String,
    aircoBool: String,
    extras: [String],
    laadcapiciteit: String,
    color: String,
    trekhaak: String,
    verzekering: String,
  },
  image: String,
});

const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;
