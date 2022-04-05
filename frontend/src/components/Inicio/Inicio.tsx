import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "@material-ui/core";
import axios from "axios";
import "./Inicio.css";
import { connect } from "react-redux";
const baseUrl = `https://mindicador.cl/api`;

function Inicio(): JSX.Element {
  const [data, setData] = useState({});
  let indicador: any;
  const [bitcoin, setBitcoin] = useState({});
  const [dolar, setDolar] = useState({});
  const [dolarIntercambio, setDolarIntercambio] = useState({});
  const [euro, setEuro] = useState({});
  const [imacec, setImacec] = useState({});
  const [libraCobre, setlibraCobre] = useState({});
  const [tasaDesempleo, setTasaDesempleo] = useState({});
  const [tpm, setTpm] = useState({});
  const [uf, setUf] = useState({});
  const [utm, setUtm] = useState({});
  const [ivp, setIvp] = useState({});

  const history = useHistory();

  const viewIndicador = (indicador: string) => {
    history.push(`/payments/${indicador}`);
  };

  const getHeroes = async () => {
    await axios
      .get(baseUrl)
      .then((response: any) => {
        indicador = response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <Fragment>
      <div className="row card">
        <div className="card-header bg-dark text-white text-center">
          <h1>Indicador List</h1>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                onClick={(e) => viewIndicador("bitcoin")}
              >
                Bitcoin
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => viewIndicador("dolar")}
              >
                Dolar
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => viewIndicador("dolar_intercambio")}
              >
                Dolar Intercambio
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => viewIndicador("euro")}
              >
                Euro
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => viewIndicador("imacec")}
              >
                Imacec
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => viewIndicador("libra_cobre")}
              >
                Libra Cobre
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => viewIndicador("tasa_desempleo")}
              >
                Tasa Desempleo
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => viewIndicador("tpm")}
              >
                Tpm
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => viewIndicador("uf")}
              >
                Uf
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => viewIndicador("utm")}
              >
                Utm
              </button>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => viewIndicador("ivp")}
              >
                Ivp
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Inicio;
