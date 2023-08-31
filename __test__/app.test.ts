import request from "supertest";

describe("GET /, it should return 200 OK", () => {
  it("should return 200 OK", () => {
    return request("http://localhost:3005")
      .get("/")
      .expect(200)
      .expect("Welcome to Technical Test by Iqbal Ikhlasul Amal 🔥");
  });
});

// test /api/v1/account/555001
describe("GET /api/v1/account/555001, it should return 200 OK", () => {
  it("should return 200 OK", () => {
    return request("http://localhost:3005")
      .get("/api/v1/account/555001")
      .expect(200);
  });
});

// test /api/v1/account/555001/transfer
describe("POST /api/v1/account/555001/transfer, it should return 201 OK", () => {
  it("should return 201 OK", () => {
    return request("http://localhost:3005")
      .post("/api/v1/account/555001/transfer")
      .send({
        to_account_number: "555002",
        amount: 100,
      })
      .expect(201);
  });
});
