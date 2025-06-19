describe("Reqres API - GET Requests", () => {
  it("LIST USERS", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
      expect(response.status).to.eq(200); //
      expect(response.body).to.have.property("data"); //
      expect(response.body.data).to.be.an("array"); //
      expect(response.body.data.length).to.be.greaterThan(0); //
    });
  });

  it("CREATE USER", () => {
    const apiKey = Cypress.env("apiKey"); // Mengambil API key dari konfigurasi
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
    const apiKey = Cypress.env("apiKey"); // Mengambil API key dari konfigurasi
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
      expect(response.status).to.eq(200); // Status 201 untuk resource created
      expect(response.body).to.have.property("name", "morpheus"); // Validasi respons
      expect(response.body).to.have.property("job", "zion resident");
    });
  });
});
