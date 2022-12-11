import { test, expect } from '@playwright/test';
import Helper from '../../helper/helper';
import MainPage from '../pages/main.page';
import LoginPage from '../pages/login.page';

test('Authorization on the site using invalid the credentials', async ({ page }) => {

  const helper = new Helper(page);
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);

  await mainPage.openMainPage();

  await helper.clickLocator(mainPage.signInLink);
  await expect(page).toHaveURL(loginPage.loginPageUrl);

  await helper.fillInput(loginPage.usernameLocator, loginPage.validUsername);
  const usernameInput = page.locator(loginPage.usernameLocator);
  await expect(usernameInput).toHaveValue(`${loginPage.validUsername}`);

  await helper.fillInput(loginPage.passwordLocator, loginPage.invalidPassword);
  const passwordInput = page.locator(loginPage.passwordLocator);
  await expect(passwordInput).toHaveValue(`${loginPage.invalidPassword}`);

  await helper.clickLocator(loginPage.loginButton);
  const flashError = page.locator(loginPage.flashError);
  await expect(flashError).toBeVisible();

})
