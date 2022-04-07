import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Inicio from "../Inicio/Inicio";
import Payments from "../Payments/Payments";
import PaymentDetail from "../Payments/payment-details/paymentDetails";
import PaymentEdit from "../Payments/payment-edit/paymentEdit";
import PaymentCreate from "../Payments/payments-create/createPayment";

import "./Nav.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    offset: theme.mixins.toolbar,
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

function Nav(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Router>
        <div className={classes.root}>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Mi Indicador
              </Typography>
              <div className="btn-group">
                <Link to="/" className="btn btn-dark">
                  Inicio
                </Link>
              </div>
              <div className="btn-group">
                <Link to="/indicadores" className="btn btn-dark">
                  Indicadores
                </Link>
              </div>
            </Toolbar>
          </AppBar>
          <hr />
          <Switch>
            <Route path="/" exact>
              <Inicio />
            </Route>
            <Route path="/indicadores" exact>
              <Payments />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Nav;
/**
 *             <Route path="/payments/create" exact>
              <PaymentCreate />
            </Route>
            <Route path="/payments/edit/:id" exact>
              <PaymentEdit />
            </Route>
 */
