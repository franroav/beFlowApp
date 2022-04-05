import { createReducer, Types as ReduxSauceTypes } from "reduxsauce";
import {
  GET_ALL_PAYMENTS,
  GET_ONE_PAYMENT,
  DELETE_ONE_PAYMENT,
  UPDATE_ONE_PAYMENT,
  CREATE_ONE_PAYMENT,
  PAYMENT_LOADING,
  PAYMENT_LOADING_OFF,
  RESET_PAYMENT_DATA,
} from "../actions/types";

// Initial STATE (en el initial state es el estado mutable que cambnia con los reducers )

const INITIAL_STATE = {
  payments: {},
  loading: false,
};
// el action es el que contendra la data del reducer

const getAllPayments = (state, action) => {
  return {
    ...state,
    payments: action.payments,
  };
};

const getOnePayment = (state, action) => {
  return {
    ...state,
    payments: action.payments,
  };
};

const createPayment = (state, action) => {
  return {
    ...state,
    payments: action.payments,
  };
};
const updatePayment = (state, action) => {
  return {
    ...state,
    payments: action.payments,
  };
};
const deletePayment = (state, action) => {
  return {
    ...state,
    payments: action.payments,
  };
};
// retorna un objeto vacío en el reset
const resetData = (state = INITIAL_STATE) => ({
  ...state,
  payments: {},
});

const loadingIni = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const loadingOff = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
});
// EL ACTION VA ENTRE LAS []
const HANDLERS = {
  [GET_ALL_PAYMENTS]: getAllPayments,
  [GET_ONE_PAYMENT]: getOnePayment,
  [CREATE_ONE_PAYMENT]: createPayment,
  [UPDATE_ONE_PAYMENT]: updatePayment,
  [DELETE_ONE_PAYMENT]: deletePayment,
  [PAYMENT_LOADING]: loadingIni,
  [PAYMENT_LOADING_OFF]: loadingOff,
  [RESET_PAYMENT_DATA]: resetData,

  [ReduxSauceTypes.DEFAULT]: (state) => state,
};

// ReduxSauceTypes-> default (retorna el state);

export default createReducer(INITIAL_STATE, HANDLERS);
