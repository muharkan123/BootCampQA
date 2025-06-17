import loginData from "../../fixtures/LoginData/loginData.json";
import loginPage from "../../support/pageObjects/loginPage.js";

describe("Login Fitur", () => {
  beforeEach(() => {
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.visit();
  });
  it.only("TC_Login_001 - Positive Case", () => {
    loginPage.inputUsername(loginData.validUsername);
    loginPage.inputPassword(loginData.validPassword);
    loginPage.buttonPress();
    loginPage.verifyLoginSuccess();
  });
  it.only("TC_Login_002 - Negative Case", () => {
    loginPage.inputUsername(loginData.invalidUsername);
    loginPage.inputPassword(loginData.invalidPassword);
    loginPage.buttonPress();
    loginPage.verifyNegativeLoginCase()
  });
});
