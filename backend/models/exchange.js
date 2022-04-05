const { Schema, model } = require("mongoose");

const ExchangeSchema = Schema({
  original_amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  currency: {
    type: Number,
    required: true,
  },
});

module.exports = model("Exchange", ExchangeSchema);
/*"exchange": {
		"original_amount": 1.50 // decimal, auto calculated when exchange is true
		"currency": "clf", // string, auto created when exchange is true
		"exchange_rate": 30000.00 // decimal, auto created when exchange is true
	}*/
