import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateOnePayment } from "../../../actions/paymentsActions";
import { useHistory } from "react-router-dom";
import { update, getById } from "../../../services/payments.service";
const Form = () => {
  const [billed_hours, setBilledHours] = useState(0);
  const [billed_at, setBilledAt] = useState("");
  const [billing_currency, setBillingCurrency] = useState("");
  const [billed_amount, setBilledAmount] = useState(0);
  const [needs_exchange, setNeedsExchange] = useState(false);
  const [exchange_currency, setExchangeCurrency] = useState("");
  const [description, setDescription] = useState("");
  let payment: any;
  const history = useHistory();
  const { id } = useParams();

  const handleChange = () => {
    const valid = needs_exchange === true ? false : true;
    setNeedsExchange(valid);
  };

  const sendForm = async (e: any) => {
    e.preventDefault();
    const template = {
      _id: id,
      billed_hours,
      billed_at,
      billing_currency,
      billed_amount,
      needs_exchange,
      exchange_currency,
      description,
    };
    const updatePayment: any = await update(id, template);
    if (updatePayment.error) {
      alert(
        "Error al intentar insertar registro de pago" +
          JSON.stringify(updatePayment.error)
      );
      history.push(`/payments`);
    } else if (updatePayment.data.message) {
      alert(
        "Mensaje insertado correctamente el pago" +
          JSON.stringify(updatePayment)
      );
      history.push(`/payments`);
    }
  };

  const peticionGet = async () => {
    payment = await getById(id);
    setBilledHours(payment.billed_hours);
    setBilledAt(payment.billed_at);
    setBillingCurrency(payment.billing_currency);
    setBilledAmount(payment.billed_amount);
    setNeedsExchange(payment.needs_exchange);
    setExchangeCurrency(payment.exchange_currency);
    setDescription(payment.description);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <form>
      <div className="row">
        <div className="form-group col-md-6">
          <label>Billed Hours:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            value={billed_hours}
            onChange={(e: any) => setBilledHours(e.target.value)}
            placeholder="Billed Hours"
          />
          <small id="billed_hours" className="form-text text-muted">
            Billed Hours.
          </small>
        </div>
        <div className="form-group col-md-6">
          <label>Billed At:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            value={billed_at}
            onChange={(e: any) => setBilledAt(e.target.value)}
            placeholder="Billed At"
          />
          <small id="billed_at" className="form-text text-muted">
            Billed At.
          </small>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-6">
          <label>Billing Currency:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            value={billing_currency}
            onChange={(e: any) => setBillingCurrency(e.target.value)}
            placeholder="Billing Currency"
          />
          <small id="billing_currency" className="form-text text-muted">
            Billing Currency.
          </small>
        </div>
        <div className="form-group col-md-6">
          <label>Billed Amount:</label>
          <input
            type="number"
            className="form-control form-control-sm"
            value={billed_amount}
            onChange={(e: any) => setBilledAmount(e.target.value)}
            placeholder="Billed Amount"
          />
          <small id="billed_amount" className="form-text text-muted">
            Billed Amount.
          </small>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-4 offset-md-1">
          <label>Needs Exchange:</label>
          <br />
          <input
            type="checkbox"
            className="form-check-input "
            onChange={handleChange}
            placeholder="Needs Exchange"
          />
          <small id="needs_exchange" className="form-text text-muted">
            Needs Exchange.
          </small>
        </div>
        <div className="form-group col-md-6">
          <label>Exchange Currency:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            value={exchange_currency}
            onChange={(e: any) => setExchangeCurrency(e.target.value)}
            placeholder="Exchange Currency"
          />
          <small id="exchange_currency" className="form-text text-muted">
            Exchange Currency.
          </small>
        </div>
      </div>

      <div className="form-group">
        <label>Descriptión:</label>

        <textarea
          className="form-control"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          placeholder="Description"
        ></textarea>
        <small id="description" className="form-text text-muted">
          Description.
        </small>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => sendForm(e)}
      >
        Submit
      </button>
    </form>
  );
};

function PaymentEdit(): JSX.Element {
  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Edit Payment</div>
          </div>
          <div className="card-body">
            <Form />
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <em>Payments Transactions.</em>
            </small>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PaymentEdit;
