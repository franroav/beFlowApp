import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import "./Inicio.css";

function Inicio(): JSX.Element {
  const history = useHistory();

  const viewIndicador = () => {
    history.push(`/indicadores`);
  };
  return (
    <Fragment>
      <div className="card text-center">
        <div className="card-header">
          <div className="card-title">
            <h1>Bienvenidos!</h1>
          </div>
        </div>
        <div className="card-body">
          porfavor haga click en el boton mas abajo, para navegar por la
          aplicación, muchas gracias!
          <div className="py-2">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => viewIndicador()}
            >
              Ver indicadores economicos
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Inicio;
