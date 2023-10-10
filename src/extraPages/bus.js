const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  specs: {
    engine: String,
    stoelen: String,
    adres: String,
    gearType: String,
    aantalDeuren: String,
    aircoBool: String,
    extras: [String],
    laadcapiciteit: String,
    trekhaak: String,
    provincie: String,
  },
  LinkjesFoto: String,
  MapsImgs: String,
  MapsLinks: String,
  AffiliateLink: String,
  Partner: String

}, { collection: 'busjes' });

const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;
