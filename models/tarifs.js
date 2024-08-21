const mongoose = require("mongoose");

const { Schema } = mongoose;

const tarifSchema = new Schema({
  content: { type: String, required: true },
});

const Tarif =
  mongoose.models.Tarif || mongoose.model("Tarif", tarifSchema, "tarifs");

module.exports = Tarif;
