class logoutPage {
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

  logoutProfileDropdown() { 
    cy.xpath("/html/body/div[1]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p").click(); 
    cy.xpath("/html/body/div[1]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a").contains("Logout").click();
  }

  verifyPositiveLogoutCase () {
    cy.xpath("/html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[2]/div/div/p[1]").should("be.visible").and("contain.text", "Username : Admin");
  }
}

export default new logoutPage();
