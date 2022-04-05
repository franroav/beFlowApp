const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paymentPath = process.env.PAYMENT_PATH;
    this.userPath = process.env.USER_PATH;
    this.shopPath = process.env.SHOP_PATH;
    this.uploadPath = process.env.UPLOAD_PATH;

    // Connection to DB
    const db = this.connectionDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  routes() {
    this.app.use(this.paymentPath, require("../routes/payment"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // parse application/json
    this.app.use(express.urlencoded({ extended: false }));
    // parses incoming requests with JSON payloads and is based on body-parser
    this.app.use(express.json());
    //Public
    this.app.use(express.static("public"));
  }

  async connectionDB() {
    await dbConnection();
  }
}

module.exports = Server;
