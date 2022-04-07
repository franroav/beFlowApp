const { response, request } = require("express");
const Exchange = require("../models/exchange");
const Payment = require("../models/payment");
const miIndicadorApiService = require("../service/payment");
const moment = require("moment"); // require
/**
 * GET / GETALL
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getAll = async (req, res = response) => {
  try {
    const payments = await Payment.find();
    const paymentTemplate = await serviceTemplate(payments);
    return res.status(200).json({
      payments: paymentTemplate,
    });
  } catch (err) {
    console.log(err);
    throw res.status(500).json({
      msg: ` Error, aplicatión error!`,
    });
  }
};
/**
 * POST / CREATE
 * @param {*} req
 * @param {*} res
 * @returns
 */
const create = async (req, res = response) => {
  try {
    let { needs_exchange, billing_currency, exchange_currency, billed_at } =
      req.body;
    if (
      billing_currency === undefined ||
      billing_currency === null ||
      billed_at === null ||
      billed_at === undefined
    ) {
      throw res.status(400).json({
        message: ` Error, Bad request`,
      });
    }
    const api = new miIndicadorApiService();
    const collection = await api.searchAllByCurrency(billing_currency);
    if (collection === undefined || collection === null) {
      throw res.status(404).json({
        message: ` Error, Not Found`,
      });
    }
    if (collection.httpResponseCode === 500) {
      throw res.status(404).json({
        msg: `Not record fount with ${billing_currency}`,
      });
    }
    const register = collection.payload.serie.filter((uf) =>
      uf.fecha.includes(billed_at)
    );
    const template = {
      ...req.body,
      billed_amount: register[0].valor,
      created_at: moment(new Date()).format(),
      updated_at: moment(new Date()).format(),
    };

    let payment = new Payment(template);
    const { _id } = payment;
    const paymentTemplate = await serviceTemplate([template]);
    await payment.save();
    paymentTemplate[0]._id = _id;
    paymentTemplate[0].object = null;
    return res.status(200).json(paymentTemplate[0]);
  } catch (err) {
    console.log(err);
    throw res.status(500).json({
      msg: ` Error, aplicatión error!`,
    });
  }
};
/**
 * GET / GETONE
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getOne = async (req, res = response) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findOne({
      _id: id,
    });
    if (payment === undefined || payment === null) {
      throw res.status(404).json({
        message: ` Error, Not Found`,
      });
    }

    const paymentTemplate = await serviceTemplate([payment]);
    return res.status(200).json(paymentTemplate[0]);
  } catch (err) {
    console.log(err);
    throw res.status(500).json({
      msg: ` Error, aplicatión error!`,
    });
  }
};
/**
 * PUT / UPDATEONE
 * @param {*} req
 * @param {*} res
 * @returns
 */
const update = async (req, res = response) => {
  try {
    let payment;
    const id = req.params.id;
    const {
      description,
      billed_hours,
      billed_at,
      billing_currency,
      billed_amount,
      needs_exchange,
      exchange_currency,
    } = req.body;
    payment = await Payment.findOne({
      _id: id,
    });
    payment.description = description;
    payment.billed_hours = billed_hours;
    payment.billed_at = billed_at;
    payment.billing_currency = billing_currency;
    payment.billed_amount = billed_amount;
    payment.needs_exchange = needs_exchange;
    payment.exchange_currency = exchange_currency;

    const paymentUpdate = await Payment.updateOne(
      {
        _id: id,
      },
      payment
    );

    if (id === undefined || id === null) {
      throw res.status(400).json({
        message: ` Error, Bad Request`,
      });
    }
    if (paymentUpdate.ok === 1 && paymentUpdate.n === 1) {
      return res.status(200).json({
        message: `payment sucessfully updated`,
      });
    } else {
      throw res.status(404).json({
        message: ` Error, Not Found`,
      });
    }
  } catch (err) {
    console.log(err);
    throw res.status(500).json({
      msg: ` Error, aplicatión error!`,
    });
  }
};
const deleteOne = async (req, res = response) => {
  try {
    const id = req.params.id;
    if (id === undefined || id === null) {
      throw res.status(400).json({
        message: ` Error, Bad Request`,
      });
    }
    const payment = await Payment.deleteOne({
      _id: id,
    });

    if (payment.ok === 1 && payment.n === 1 && payment.deletedCount === 1) {
      return res.status(200).json({
        message: `payment sucessfully deleted`,
      });
    } else {
      throw res.status(404).json({
        message: ` Error, Not Found`,
      });
    }
  } catch (err) {
    console.log(err);
    throw res.status(500).json({
      msg: ` Error, aplicatión error!`,
    });
  }
};

async function serviceTemplate(payments) {
  const templatePayments = [];

  if (payments.length) {
    for (const payment of payments) {
      const template = {
        _id: payment._id,
        object: payment.object,
        description: payment.description,
        billed_hours: payment.billed_hours,
        billed_at: payment.billed_at,
        amount: payment.billed_amount,
        currency: payment.exchange_currency,
        exchange: {
          original_amount: payment.billed_amount,
          currency: payment.exchange_currency,
          exchange_rate: payment.billed_hours * payment.billed_amount,
        },
        created_at: payment.created_at,
        updated_at: payment.created_at,
      };
      templatePayments.push(template);
    }
  }
  return templatePayments;
}

module.exports = {
  getAll,
  update,
  getOne,
  create,
  deleteOne,
};
