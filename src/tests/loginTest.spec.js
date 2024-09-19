const { test, expect } = require('@playwright/test');
import Loginpage from '../pages/Loginpage';

test("Login test", async({ page }) => {

    const loginPage = new Loginpage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUserName('madhurichinthala2000-fqbw@force.com');
    await loginPage.fillPassword('Winter@145');

    const homePage = await loginPage.clickLogin();

    await homePage.expectServiceIsVisible();





})