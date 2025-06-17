describe("Fitur login HRM", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  it("TC_LOGIN_002-Login Negative Case - Wrong USN", () => {
    cy.get("div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type("Admins");
    cy.get("div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").should("have.value", "Admins"); //assertion memiliki value Admin
    cy.get("div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type("admin123");
    cy.get("div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").should("not.be.null"); // assertion harus berisi dengan password
    cy.get(".oxd-button").click("");
    cy.get(".oxd-alert-content-text").should("be.visible").and("contain.text", "Invalid credentials");
  });

  it("TC_LOGIN_002-Login Negative Case - Wrong PASS", () => {
    cy.get("div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type("Admin");
    cy.get("div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").should("have.value", "Admin"); //assertion memiliki value Admin
    cy.get("div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type("admin12");
    cy.get("div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").should("not.be.null"); // assertion harus berisi dengan password
    cy.get(".oxd-button").click("");
    cy.get(".oxd-alert-content-text").should("be.visible").and("contain.text", "Invalid credentials");
  });
});
