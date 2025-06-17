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
    cy.get("span.oxd-userdropdown-tab").should("be.visible").click();
    
    // // Pilih opsi logout
    cy.wait(2000);
    cy.contains("Logout").click();
    cy.wait(2000);
        // // Verifikasi user diarahkan kembali ke halaman login
    cy.url().should("include", "/auth/login");
    cy.get('input[placeholder="Username"]').should("be.visible");
  }

  // verifyPositiveLogoutCase () {
  //   cy.xpath("/html/body/div[1]/div[1]/div/div[1]/div/div[2]/div[2]/div/div/p[1]").should('have.text', 'Username')
  // }
}

export default new logoutPage();
