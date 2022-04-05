const { Schema, model } = require("mongoose");

const PaymentSchema = Schema({
  object: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  billed_hours: {
    type: Number,
    required: true,
  },
  billed_at: {
    type: String,
    required: true,
  },
  billing_currency: {
    type: String,
    required: true,
  },
  billed_amount: {
    type: Number,
    required: true,
  },
  needs_exchange: {
    type: Boolean,
    required: true,
  },
  exchange_currency: {
    type: String,
    required: true,
  },
  exchange: {
    type: Schema.Types.ObjectId,
    ref: "Exchange",
    required: false,
  },
  created_at: {
    type: String,
    required: false,
  },
  updated_at: {
    type: String,
    required: false,
  },
});

module.exports = model("Payment", PaymentSchema);
