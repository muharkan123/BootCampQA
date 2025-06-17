class loginPage {
  visit() {
    cy.visit("/auth/login");
  }

  inputUsername(usrnm) {
    cy.xpath('//input[@placeholder="Username"]').should("be.visible");
    cy.xpath('//input[@placeholder="Username"]').clear().type(usrnm).should("have.value", usrnm);
  }

  inputPassword(passwrd) {
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').should("be.visible");
    cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').clear().type(passwrd).should("have.value", passwrd);
  }

  buttonPress() {
    cy.xpath("/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button").click();
  }

  verifyLoginSuccess() {
    cy.url().should("include", "dashboard");
  }

  verifyNegativeLoginCase () {
    cy.get(".oxd-alert-content-text").should("be.visible").and("contain.text", "Invalid credentials");
  }
}

export default new loginPage();
