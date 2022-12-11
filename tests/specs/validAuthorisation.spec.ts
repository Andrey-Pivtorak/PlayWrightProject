import { test, expect } from '@playwright/test';
import Helper from '../../helper/helper';
import MainPage from '../pages/main.page';
import LoginPage from '../pages/login.page';
import MyAccountPage from '../pages/myAccount.page';

test('Authorization on the site using valid the credentials', async ({ page }) => {

  const helper = new Helper(page);
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  const myAccountPage = new MyAccountPage(page);

  await mainPage.openMainPage();

  await helper.clickLocator(mainPage.signInLink);
  await expect(page).toHaveURL(loginPage.loginPageUrl);

  await helper.fillInput(loginPage.usernameLocator, loginPage.validUsername);
  const usernameInput = page.locator(loginPage.usernameLocator);
  await expect(usernameInput).toHaveValue(`${loginPage.validUsername}`);

  await helper.fillInput(loginPage.passwordLocator, loginPage.validPassword);
  const passwordInput = page.locator(loginPage.passwordLocator);
  await expect(passwordInput).toHaveValue(`${loginPage.validPassword}`);

  await helper.clickLocator(loginPage.loginButton);
  const myAccountLink = page.locator(mainPage.myAccountLink);
  await expect(myAccountLink).toBeVisible();

  await helper.clickLocator(mainPage.myAccountLink);
  await expect(page).toHaveURL(myAccountPage.myAccountUrl);

})
