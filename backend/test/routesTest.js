const chai = require("chai");
const chaiHttp = require("chai-http");
require("dotenv").config();

chai.should();
chai.use(chaiHttp);

const Server = process.env.SERVER;
const Port = process.env.PORT;
const testPath = Server + ":" + Port;

describe("POST /api/payments", () => {
  it("It should POST Add one payment", (done) => {
    const payment = {
      description: "Pago",
      billed_hours: 1.5,
      billed_at: "2022-03-31",
      billing_currency: "uf",
      billed_amount: 1.5,
      needs_exchange: true,
      exchange_currency: "clp",
    };
    chai
      .request(testPath)
      .post("/api/payments")
      .send(payment)
      .end((err, response) => {
        if (err) {
          done(err);
        }
        response.body.should.be.a("object");
        response.should.have.status(200);
        response.body.should.have.property("description");

        done();
      });
  });

  it("It should POST And receive 400, because of property billing_currency equals to null", (done) => {
    const payment = {
      description: "Pago",
      billed_hours: 1.5,
      billed_at: "2022-03-31",
      billing_currency: null,
      billed_amount: 1.5,
      needs_exchange: true,
      exchange_currency: "clp",
    };
    chai
      .request(testPath)
      .post("/api/payments")
      .send(payment)
      .end((err, response) => {
        if (err) {
          done(err);
        }
        response.body.should.be.a("object");
        response.should.have.status(400);
        response.body.should.have.property("message");

        done();
      });
  });

  it("It should POST And receive 400, because of property billed_at equals to udefined", (done) => {
    const payment = {
      description: "Pago",
      billed_hours: 1.5,
      billed_at: undefined,
      billing_currency: "uf",
      billed_amount: 1.5,
      needs_exchange: true,
      exchange_currency: "clp",
    };
    chai
      .request(testPath)
      .post("/api/payments")
      .send(payment)
      .end((err, response) => {
        if (err) {
          done(err);
        }
        response.body.should.be.a("object");
        response.should.have.status(400);
        response.body.should.have.property("message");

        done();
      });
  });

  it("It should POST And receive 400 with empty request object {}", (done) => {
    const payment = {};
    chai
      .request(testPath)
      .post("/api/payments")
      .send(payment)
      .end((err, response) => {
        if (err) {
          done(err);
        }
        response.body.should.be.a("object");
        response.should.have.status(400);
        response.body.should.have.property("message");

        done();
      });
  });
});

describe("GET /api/payments", () => {
  it("It should GET all the payments", (done) => {
    chai
      .request(testPath)
      .get("/api/payments")
      .end((err, response) => {
        if (err) {
          done(err);
        }

        response.should.have.status(200);
        response.body.should.be.a("object");
        response.body.should.have.property("payments").that.be.a("array");
        response.body.should.have.property("payments");
        /* response.body.should.have
          .property("payments")
          .that.includes.all.keys([
            "_id",
            "description",
            "billed_hours",
            "billed_at",
            "amount",
            "currency",
            "exchange",
            "created_at",
            "updated_at",
          ]);*/
        done();
      });
  });
});
describe("PUT /api/payments/:id", () => {
  it("It should PUT Update one payment record", (done) => {
    const _id = "624a30697d29bf1734f05037";
    const payment = {
      _id: "624a30697d29bf1734f05037",
      description: "Pago",
      billed_hours: 1.5,
      billed_at: "2022-03-31",
      billing_currency: "uf",
      billed_amount: 1.5,
      needs_exchange: true,
      exchange_currency: "clp",
    };
    chai
      .request(testPath)
      .put("/api/payments/" + _id)
      .send(payment)
      .end((err, response) => {
        if (err) {
          done(err);
        }
        payment.body.should.have.property("id").that.be.a("string");
        payment.body.should.have.property("description");
        payment.body.should.have.property("billed_hours");
        payment.body.should.have.property("billed_at");
        //payment.body.should.have.property("billed_hours");
        payment.body.should.have.property("billing_currency");
        payment.body.should.have.property("billed_amount");
        payment.body.should.have.property("needs_exchange");
        payment.body.should.have.property("exchange_currency");

        response.should.have.status(200);
        response.body.should.be.a("object");
        //response.body.should.have.property("_id").that.be.a("string");
        response.body.should.have.property("message");
        done();
      });
  });
});

describe("GET /api/payment/:id", () => {
  it("It should not GET one payment record", (done) => {
    const _id = "624a30697d29bf1734f0503756";
    chai
      .request(testPath)
      .get("/api/payments/" + _id)
      .end((err, response) => {
        if (err) {
          done(err);
        }

        response.should.have.status(404);
        response.body.should.be.a("object");
        //.that.includes.all.keys(["userId", "email", "credit"]);
        done();
      });
  });

  it("It should GET one payment record", (done) => {
    const _id = "624a30697d29bf1734f05037";
    chai
      .request(testPath)
      .get("/api/payments/" + _id)
      .end((err, response) => {
        if (err) {
          done(err);
        }

        response.should.have.status(200);
        response.body.should.be.a("object");
        response.body.should.have.property("_id").that.be.a("string");
        response.body.should.have.property("description");
        done();
      });
  });
});
