import {
  GET_ALL_PAYMENTS,
  GET_ONE_PAYMENT,
  DELETE_ONE_PAYMENT,
  UPDATE_ONE_PAYMENT,
  CREATE_ONE_PAYMENT,
  PAYMENT_LOADING,
  PAYMENT_LOADING_OFF,
  RESET_PAYMENT_DATA,
} from "./types";
import {
  getAll,
  getById,
  create,
  update,
  deleteById,
} from "../services/payments.service";

import { getAllIndicators } from "../services/indicator.service.js";

export const getAllPayments = (payments, element) => (dispatch) => {
  getAllIndicators()
    .then((response) => {
      dispatch(fetchPaymentsReducer(response));
    })
    .catch(() => {});
};

export const getOnePayment = (payments, element) => (dispatch) => {
  getById()
    .then((response) => {
      dispatch(getOnePaymentReducer(response.payload));
    })
    .catch(() => {});
};

export const createOnePayment = (payments, element) => (dispatch) => {
  create()
    .then((response) => {
      dispatch(createPaymentReducer(response.data));
    })
    .catch(() => {});
};

export const updateOnePayment = (payments, element) => (dispatch) => {
  update()
    .then((response) => {
      dispatch(updatePaymentReducer(response.data));
    })
    .catch(() => {});
};

export const deleteOnePayment = (payments, element) => (dispatch) => {
  deleteById()
    .then((response) => {
      dispatch(deleteOnePaymentReducer(response.data));
    })
    .catch(() => {});
};

const loadingIni = () => ({
  type: PAYMENT_LOADING,
});

const loadingOff = () => ({
  type: PAYMENT_LOADING_OFF,
});

const fetchPaymentsReducer = (payments) => ({
  type: GET_ALL_PAYMENTS,
  payments,
});

const createPaymentReducer = (payments) => ({
  type: CREATE_ONE_PAYMENT,
  payments,
});

const updatePaymentReducer = (payments) => ({
  type: UPDATE_ONE_PAYMENT,
  payments,
});

const getOnePaymentReducer = (payments) => ({
  type: GET_ONE_PAYMENT,
  payments,
});

const deleteOnePaymentReducer = (payments) => ({
  type: DELETE_ONE_PAYMENT,
  payments,
});
const resetData = () => ({
  type: RESET_PAYMENT_DATA,
});
