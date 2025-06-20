describe("Reqres API - GET Requests", () => {
  it("LIST USERS", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
      expect(response.status).to.eq(200); //
      expect(response.body).to.have.property("data"); //
      expect(response.body.data).to.be.an("array"); //
      expect(response.body.data.length).to.be.greaterThan(0); //
    });
  });

  it("SINGLE USER", () => {
    const apiKey = Cypress.env("apiKey");
    const newUser = {
      name: "morpheus",
      job: "leader",
    };

    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
      headers: { "x-api-key": apiKey },
    }).then((response) => {
      expect(response.status).to.eq(200); // Status 200 untuk resource created
      expect(response.body).to.have.property("data"); // Validasi respons
      expect(response.body.data).to.have.property("first_name", "Janet"); // Validasi respons
    });
  });

  it("SINGLE USER NOT FOUND", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/23",
      failOnStatusCode: false, // Selain 2xx bisa diterima
    }).then((response) => {
      expect(response.status).to.eq(401); // Validasi status 404
    });
  });

  it("LIST <RESOURCES>", () => {
    const apiKey = Cypress.env("apiKey");

    cy.request({
      method: "GET",
      url: "https://reqres.in/api/unknown",
      headers: { "x-api-key": apiKey },
    }).then((response) => {
      expect(response.status).to.eq(200); // Status 200 untuk resource created
      expect(response.body).to.have.property("data"); // Validasi respons
      expect(response.body.data[0]).to.have.property("pantone_value", "15-4020"); // Validasi respons
    });
  });

  it("SINGLE <RESOURCES>", () => {
    const apiKey = Cypress.env("apiKey");

    cy.request({
      method: "GET",
      url: "https://reqres.in/api/unknown/2",
      headers: { "x-api-key": apiKey },
    }).then((response) => {
      expect(response.status).to.eq(200); // Status 200 untuk resource created
      expect(response.body).to.have.property("data"); // Validasi respons
      expect(response.body.data).to.have.property("pantone_value", "17-2031"); // Validasi respons
    });
  });

  it("CREATE USER", () => {
    const apiKey = Cypress.env("apiKey");
    const newUser = {
      name: "morpheus",
      job: "leader",
    };

    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: { "x-api-key": apiKey },
      body: newUser, // Mengirim data payload
    }).then((response) => {
      expect(response.status).to.eq(201); // Status 201 untuk resource created
      expect(response.body).to.have.property("name", "morpheus"); // Validasi respons
      expect(response.body).to.have.property("job", "leader");
    });
  });

  it("UPDATE USERS", () => {
    const apiKey = Cypress.env("apiKey");
    const newUser = {
      name: "morpheus",
      job: "zion resident",
    };

    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      headers: { "x-api-key": apiKey },
      body: newUser, // Mengirim data payload
    }).then((response) => {
      expect(response.status).to.eq(200); // Status 200 untuk resource created
      expect(response.body).to.have.property("name", "morpheus"); // Validasi respons
      expect(response.body).to.have.property("job", "zion resident");
    });
  });

  it("DELETE USERS", () => {
    const apiKey = Cypress.env("apiKey");

    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
      headers: { "x-api-key": apiKey },
    }).then((response) => {
      expect(response.status).to.eq(204); // Status 201 untuk resource created
    });
  });

  it("REGISTER USERS", () => {
    const apiKey = Cypress.env("apiKey");
    const newUser = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };

    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      headers: { "x-api-key": apiKey },
      body: newUser, // Mengirim data payload
    }).then((response) => {
      expect(response.status).to.eq(200); // Status 200 untuk resource created
      expect(response.body).to.have.property("id", 4); // Validasi
    });
  });

  it("LOGIN USERS", () => {
    const apiKey = Cypress.env("apiKey");
    const newUser = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    cy.request({
      method: "POST",
      url: "https://reqres.in/api/login",
      headers: { "x-api-key": apiKey },
      body: newUser, // Mengirim data payload
    }).then((response) => {
      expect(response.status).to.eq(200); // Status 200 untuk resource
      expect(response.body).to.have.property("token", "QpwL5tke4Pnpja7X4"); // Validasi
    });
  });
});
