describe("Fitur login HRM", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("input[name='username']").type("Admin"); 
    cy.get("input[name='password']").type("admin123"); 
    cy.get(".oxd-button").click();
    cy.url().should("include", "/dashboard");
  });

  it("TC_LOGOUT_001-Logout Case", () => {
    cy.get(".oxd-userdropdown-name").click(); 
    cy.get(".oxd-dropdown-menu li").contains("Logout").click();
    cy.get(".oxd-sheet > p:nth-child(1)").should("be.visible").and("contain.text", "Username : Admin");
  });
});
