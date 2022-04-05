import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePayment } from "../../../actions/paymentsActions";
import { getById } from "../../../services/payments.service";
import { useHistory } from "react-router-dom";

const Form = () => {
  const handleChange = () => {
    /*const valid = needs_exchange === true ? false : true;
    setNeedsExchange(valid);*/
  };

  const sendForm = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row animated fadeIn">
        <div className="card col-md-12 animated fadeIn cardFriendDetails">
          <div className="card-header">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 text-center">
                  <img
                    src=""
                    width="240px"
                    className="img-responsive img-thumbnail my-5"
                  ></img>
                </div>
                <div className="col-md-8">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">
                      <strong></strong>
                    </span>
                    <span className="badge badge-secondary badge-pill">
                      ID:
                    </span>
                  </h4>
                  <div className="row">
                    <div className="col-md-6">
                      {" "}
                      <h6 className="my-0">
                        <strong>Nombre Real:</strong>{" "}
                      </h6>
                    </div>
                    <div className="col-md-6">
                      <h6 className="my-0 pr-1">Puede Volar:</h6>
                    </div>
                  </div>
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <div className="card ">
                        <div className="card-body"></div>
                      </div>
                      <button className="btn btn-dark" onClick={(e: any) => e}>
                        <em>
                          Volver.
                          <i className="fa fa-eye text-white pl-1"></i>
                        </em>
                      </button>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <small className="text-muted">
                      <em>Hero Data.</em>
                    </small>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function PaymentDetail(): JSX.Element {
  const [data, setData] = useState([{}]);
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

  const peticionGet = async () => {
    payment = await getById(id);
    if (payment.error) {
      alert("Hubo un problema o no se encuentra el registro");
      history.push(`/payments`);
    }
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
    <Fragment>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Payment details </div>
          </div>
          <div className="card-body">
            <ul className="list-group mb-3">
              <li>Billed At: {billed_at}</li>
              <li>Billed Hours: {billed_hours}</li>
              <li>Billing Currency: {billing_currency}</li>
              <li>Needs Exchange: {needs_exchange}</li>
              <li>Exchange Currency: {exchange_currency}</li>
              <li>Descriptión: {description}</li>
            </ul>
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

export default PaymentDetail;
