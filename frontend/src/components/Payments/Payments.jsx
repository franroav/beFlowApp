import {
  getAllPayments,
  getOnePayment,
  createOnePayment,
  updateOnePayment,
  deleteOnePayment,
} from "../../actions/paymentsActions";
import { decreaseButton, increaseButton } from "../../actions/buttonsActions";
import React, { Fragment, useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
//import { useParams } from "react-router-dom";
import MaterialTable from "material-table";
import { Card } from "@material-ui/core";

const Payments = ({
  getAllPayments,
  getOnePayment,
  createOnePayment,
  updateOnePayment,
  deleteOnePayment,
  paymentReducer,
  buttonReducer,
  increaseButton,
  decreaseButton,
}) => {
  const [searchInReducer, setSearchInReducer] = useState(false);
  const [firstPayment, setPayment] = useState("");
  const [count, setCounter] = useState(0);
  const [paymentList, paymentBucket] = useState([]);
  const listOfPayments = [];
  // const { indicador } = useParams();

  const columns = [
    { title: "ID", field: "i" },
    { title: "Billed Hours", field: "billed_hours" },
    { title: "Billed At", field: "billed_at" },
    {
      title: "Currency",
      field: "currency",
      customFilterAndSearch: (term, rowData) => term == rowData.currency.length,
    },
    {
      title: "Exchange",
      field: "exchange",
    },
    {
      title: "Exch.Rate",
      field: "rate",
    },
    { title: "Billed Hours", field: "created_at" },
    { title: "Billed Hours", field: "updated_at" },
    { title: "Descripcion", field: "description" },
  ];

  if (searchInReducer) {
    const { payments } = paymentReducer;
    const paymentsCollection = payments;
    if (paymentsCollection !== undefined && paymentsCollection.length) {
      for (const [index, payment] of payments.entries()) {
        listOfPayments.push({
          ...payment,
          i: index,
          exchange: `$ ${payment.exchange.original_amount} ${payment.exchange.currency}`,
          rate: payment.exchange_rate,
        });
      }
    }
  } else {
    console.log("aun no hay data");
  }
  const history = useHistory();

  const paymentDetails = (row, caso) => {
    history.push(`/payments/details/${row._id}`);
  };

  const paymentCreate = (e) => {
    history.push(`/payments/create`);
  };
  const paymentEdit = (row, caso) => {
    history.push(`/payments/edit/${row._id}`);
  };
  const paymentDelete = (row, caso) => {
    history.push(`/payments`);
  };
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
        <div className="offset-md-2 col-md-2 card py-1 px-1">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => paymentCreate(e)}
          >
            Create Payment
          </button>
        </div>
      </div>
      <div className=" row">
        <div className="col-md-8 offset-md-2 card">
          <Card>
            <MaterialTable
              columns={columns}
              data={listOfPayments}
              title="Payments"
              actions={[
                {
                  //icon: "remove_red_eye",
                  icon: "remove_red_eye",
                  tooltip: "View Payment",
                  onClick: (event, rowData) => paymentDetails(rowData, "view"),
                },
                {
                  //icon: "remove_red_eye",
                  icon: "edit",
                  tooltip: "Edit Payment",
                  onClick: (event, rowData) => paymentEdit(rowData, "Edit"),
                },
                {
                  //icon: "remove_red_eye",
                  icon: "delete",
                  tooltip: "Delete Payment",
                  onClick: (event, rowData) => paymentDelete(rowData, "Delete"),
                },
              ]}
              options={{
                actionsColumnIndex: -1,
                filtering: true,
                sorting: true,
              }}
              localization={{
                header: {
                  actions: "Acciones",
                },
              }}
            />
          </Card>
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
  getOnePayment,
  createOnePayment,
  updateOnePayment,
  deleteOnePayment,
  increaseButton,
  decreaseButton,
})(Payments);
