import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import buttonReducer from "./buttonReducer";
import paymentReducer from "./paymentsReducer";

export default combineReducers({
  messageReducer,
  buttonReducer,
  paymentReducer,
});
