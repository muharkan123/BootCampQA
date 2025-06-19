describe("Login and Logout Tests with Interception", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });
  it("Login CASE 1", () => {
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    cy.xpath('//input[@placeholder="Username"]').should("have.value", "Admin");
    cy.xpath("//input[@placeholder='Password']").type("admin123");
    cy.xpath("//input[@placeholder='Password']").should("have.value", "admin123");
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages").as("get304"); //INTERCEPT
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit").as("employessSubunit"); //INTERCEPT
    cy.xpath("//button[@type='submit']").click();
    cy.wait("@get304");
    cy.wait("@employessSubunit");
  });

  it(" Login and Logout CASE 1 ", () => {
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    cy.xpath('//input[@placeholder="Username"]').should("have.value", "Admin");
    cy.xpath("//input[@placeholder='Password']").type("admin123");
    cy.xpath("//input[@placeholder='Password']").should("have.value", "admin123");
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages").as("get304"); //INTERCEPT
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit").as("employessSubunit"); //INTERCEPT
    cy.xpath("//button[@type='submit']").click();
    cy.wait("@get304");
    cy.wait("@employessSubunit");

    //
    cy.xpath("//p[@class='oxd-userdropdown-name']").should("be.visible").click();

    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout").as("logOutIntercept"); // INTERCEPT
    cy.xpath("//a[normalize-space()='Logout']").should("be.visible").and("contain", "Logout").click();
    cy.wait("@get304").its("response.statusCode").should("eq", 304); // ResCode 304
    cy.wait("@logOutIntercept").its("response.statusCode").should("eq", 302); // ResCode 302
  });
});
