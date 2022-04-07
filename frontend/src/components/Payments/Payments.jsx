import { getAllPayments } from "../../actions/paymentsActions";

import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";

let Indicators;
let Bitcoin;
let Dolar;
let dolarIntercambio;
let Euro;
let Imacec;
let Ipc;
let Ivp;
let tasaDesempleo;
let Tpm;
let Uf;
let Utm;
let BitcoinCode;
let BitcoinName;
let BitcoinUnidadMedida;
let BitcoinValor;
let DolarCode;
let DolarName;
let DolarUnidadMedida;
let DolarValor;
let DolarIntermcambioCode;
let DolarIntermcambioName;
let DolarIntermcambioUnidadMedida;
let DolarIntermcambioValor;
let EuroCode;
let EuroName;
let EuroUnidadMedida;
let EuroValor;
let ImacecCode;
let ImacecName;
let ImacecUnidadMedida;
let ImacecValor;
let IpcCode;
let IpcName;
let IpcUnidadMedida;
let IpcValor;
let IvpCode;
let IvpName;
let IvpUnidadMedida;
let IvpValor;
let tasaDesempleoCode;
let tasaDesempleoName;
let tasaDesempleoUnidadMedida;
let tasaDesempleoValor;
let TpmCode;
let TpmName;
let TpmUnidadMedida;
let TpmValor;
let UfCode;
let UfName;
let UfUnidadMedida;
let UfValor;
let UtmCode;
let UtmName;
let UtmUnidadMedida;
let UtmValor;

const Payments = ({ getAllPayments, paymentReducer }) => {
  const [searchInReducer, setSearchInReducer] = useState(false);
  const { payments } = paymentReducer;
  if (
    payments !== undefined &&
    payments.hasOwnProperty("version") &&
    searchInReducer
  ) {
    const {
      bitcoin,
      dolar,
      dolar_intercambio,
      euro,
      imacec,
      ipc,
      ivp,
      tasa_desempleo,
      tpm,
      uf,
      utm,
    } = payments;
    Indicators = payments;
    Bitcoin = bitcoin;
    BitcoinCode = bitcoin.valor;
    BitcoinName = bitcoin.nombre;
    BitcoinUnidadMedida = bitcoin.unidad_medida;
    BitcoinValor = bitcoin.valor;
    Dolar = dolar;
    DolarCode = dolar.valor;
    DolarName = dolar.nombre;
    DolarUnidadMedida = dolar.unidad_medida;
    DolarValor = dolar.valor;
    dolarIntercambio = dolar_intercambio;
    DolarIntermcambioCode = dolar_intercambio.valor;
    DolarIntermcambioName = dolar_intercambio.nombre;
    DolarIntermcambioUnidadMedida = dolar_intercambio.unidad_medida;
    DolarIntermcambioValor = dolar_intercambio.valor;
    Euro = euro;
    EuroCode = euro.valor;
    EuroName = euro.nombre;
    EuroUnidadMedida = euro.unidad_medida;
    EuroValor = euro.valor;
    Imacec = imacec;
    ImacecCode = imacec.valor;
    ImacecName = imacec.nombre;
    ImacecUnidadMedida = imacec.unidad_medida;
    ImacecValor = imacec.valor;
    Ipc = ipc;
    IpcCode = ipc.valor;
    IpcName = ipc.nombre;
    IpcUnidadMedida = ipc.unidad_medida;
    IpcValor = ipc.valor;
    Ivp = ivp;
    IvpCode = ivp.valor;
    IvpName = ivp.nombre;
    IvpUnidadMedida = ivp.unidad_medida;
    IvpValor = ivp.valor;
    tasaDesempleo = tasa_desempleo;
    tasaDesempleoCode = tasa_desempleo.valor;
    tasaDesempleoName = tasa_desempleo.nombre;
    tasaDesempleoUnidadMedida = tasa_desempleo.unidad_medida;
    tasaDesempleoValor = tasa_desempleo.valor;
    Tpm = tpm;
    TpmCode = tpm.valor;
    TpmName = tpm.nombre;
    TpmUnidadMedida = tpm.unidad_medida;
    TpmValor = tpm.valor;
    Uf = uf;
    UfCode = uf.valor;
    UfName = uf.nombre;
    UfUnidadMedida = uf.unidad_medida;
    UfValor = uf.valor;
    Utm = utm;
    UtmCode = utm.valor;
    UtmName = utm.nombre;
    UtmUnidadMedida = utm.unidad_medida;
    UtmValor = utm.valor;
  }

  useEffect(() => {
    const loadPayments = async () => {
      const data = await getAllPayments();
      setSearchInReducer(true);
    };

    loadPayments();
  }, []);

  return (
    <Fragment>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center">
            <div className="jumbotron ">
              <h1 className="display-4">Indicadores económicos diarios</h1>
              <p className="lead">
                Este es un frontend que nos entrega los principales indicadores
                económicos para Chile.
              </p>
              <hr className="my-4" />
              <p>
                La aplicación mapea constantemente el sitio del Banco Central de
                Chile.
              </p>
              <p className="lead">
                <a
                  className="btn btn-primary btn-lg"
                  href="https://mindicador.cl/"
                  role="button"
                >
                  quiero saber mas...
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card  text-center border-primary mb-3">
            <div className="card-header">
              <h1>{BitcoinName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {"$ " + BitcoinValor + " " + BitcoinUnidadMedida}
              </p>
            </div>
            <div className="card-footer text-muted">{BitcoinName} Card</div>
          </div>
        </div>
      </div>
      <div className=" row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center border-secondary mb-3">
            <div className="card-header">
              <h1>{DolarName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {"$ " + DolarValor + " " + DolarUnidadMedida}
              </p>
            </div>
            <div className="card-footer text-muted">{DolarName} Card</div>
          </div>
        </div>
      </div>
      <div className=" row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center border-warning mb-3">
            <div className="card-header">
              <h1>{DolarIntermcambioName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {"$ " +
                  DolarIntermcambioValor +
                  " " +
                  DolarIntermcambioUnidadMedida}
              </p>
            </div>
            <div className="card-footer text-muted">
              {DolarIntermcambioName} Card
            </div>
          </div>
        </div>
      </div>
      <div className=" row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center border-seondary mb-3">
            <div className="card-header">
              <h1>{EuroName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {"$ " + EuroValor + " " + EuroUnidadMedida}
              </p>
            </div>
            <div className="card-footer text-muted">{EuroName} Card</div>
          </div>
        </div>
      </div>
      <div className=" row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center border-success mb-3">
            <div className="card-header">
              <h1>{ImacecName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {"$ " + ImacecValor + " " + ImacecUnidadMedida}
              </p>
            </div>
            <div className="card-footer text-muted">{ImacecName} Card</div>
          </div>
        </div>
      </div>
      <div className=" row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center border-secondary mb-3">
            <div className="card-header">
              <h1>{IpcName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {IpcValor + " % (" + IpcUnidadMedida + " " + IpcName + ")"}
              </p>
            </div>
            <div className="card-footer text-muted">{IpcName} Card</div>
          </div>
        </div>
      </div>
      <div className=" row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center border-danger mb-3">
            <div className="card-header">
              <h1>{IvpName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {"$ " + IvpValor + " " + IvpUnidadMedida}
              </p>
            </div>
            <div className="card-footer text-muted">{IvpName} Card</div>
          </div>
        </div>
      </div>
      <div className=" row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center border-secondary mb-3">
            <div className="card-header">
              <h1>{tasaDesempleoName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {tasaDesempleoValor +
                  " % (" +
                  tasaDesempleoUnidadMedida +
                  " " +
                  tasaDesempleoName +
                  ")"}
              </p>
            </div>
            <div className="card-footer text-muted">
              {tasaDesempleoName} Card
            </div>
          </div>
        </div>
      </div>
      <div className=" row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center border-info mb-3">
            <div className="card-header">
              <h1>{TpmName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {TpmValor + " % (" + TpmUnidadMedida + " " + TpmName + ")"}
              </p>
            </div>
            <div className="card-footer text-muted">{TpmName} Card</div>
          </div>
        </div>
      </div>
      <div className=" row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center border-secondary mb-3">
            <div className="card-header">
              <h1>{UfName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {"$ " + UfValor + " " + UfUnidadMedida}
              </p>
            </div>
            <div className="card-footer text-muted">{UfName} Card</div>
          </div>
        </div>
      </div>
      <div className=" row py-2">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center border-dark mb-3">
            <div className="card-header">
              <h1>{UtmName}</h1>
            </div>
            <div className="card-body">
              <p className="card-text">
                {"$ " + UtmValor + " " + UtmUnidadMedida}
              </p>
            </div>
            <div className="card-footer text-muted">{UtmName} Card</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateProps = ({ paymentReducer, buttonReducer }) => ({
  paymentReducer,
  buttonReducer,
});

export default connect(mapStateProps, {
  getAllPayments,
})(Payments);
