const axios = require("axios");

module.exports = class apiMiIndicadorServiceClass {
  async searchAll() {
    try {
      return axios({
        method: "get",
        url: "https://mindicador.cl/api/uf",
      }).then(
        (result) => {
          return {
            httpResponseCode: 200,
            apiMessage: "ok",
            payload: result.data,
          };
        },
        (error) => {
          return { httpResponseCode: 500, message: error.message };
        }
      );
    } catch (err) {
      return { httpResponseCode: 500, message: err.message };
    }
  }

  async searchAllByCurrency(currency) {
    try {
      return axios({
        method: "get",
        url: `https://mindicador.cl/api/${currency}`,
      }).then(
        (result) => {
          return {
            httpResponseCode: 200,
            apiMessage: "ok",
            payload: result.data,
          };
        },
        (error) => {
          return { httpResponseCode: 500, message: error.message };
        }
      );
    } catch (err) {
      return { httpResponseCode: 500, message: err.message };
    }
  }

  async searchByCurrencyAndDate(currency, billed_at) {
    try {
      return axios({
        method: "get",
        url: `https://mindicador.cl/api/${currency}/${billed_at}`,
      }).then(
        (result) => {
          return {
            httpResponseCode: 200,
            apiMessage: "ok",
            payload: result.data,
          };
        },
        (error) => {
          return { httpResponseCode: 500, message: error.message };
        }
      );
    } catch (err) {
      return { httpResponseCode: 500, message: err.message };
    }
  }
};
