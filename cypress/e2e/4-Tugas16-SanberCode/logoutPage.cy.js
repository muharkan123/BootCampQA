import loginData from "../../fixtures/LoginData/loginData.json";
import loginPage from "../../support/pageObjects/loginPage.js";
import logoutPage from "../../support/pageObjects/logoutPage.js";

describe("Logout Fitur", () => {
  beforeEach(() => {
    loginPage.visit();
  });
  it.only("TC_Logout_001 - Positive Case", () => {
    logoutPage.inputUsername(loginData.validUsername);
    logoutPage.inputPassword(loginData.validPassword);
    logoutPage.buttonPress();
    logoutPage.verifyLoginSuccess();
    logoutPage.logoutProfileDropdown();
  });
});
