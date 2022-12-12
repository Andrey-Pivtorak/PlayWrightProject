import { test, expect } from '@playwright/test';
import MainPage from '../pages/main.page';
import LoginPage from '../pages/login.page';
import MyAccountPage from '../pages/myAccount.page';

test('Authorization on the site using valid the credentials', async ({ page }) => {

  const mainPage = new MainPage(page);
  const myAccountPage = new MyAccountPage(page);
  const loginPage = new LoginPage(page);

  await mainPage.openMainPage();

  await mainPage.clickSignInLink();
  await expect(page).toHaveURL(loginPage.url);

  await loginPage.fillUsername();
  const usernameInput = page.locator(loginPage.usernameLocator);
  await expect(usernameInput).toHaveValue(`${loginPage.validUsername}`);

  await loginPage.fillValidPassword();
  const passwordInput = page.locator(loginPage.passwordLocator);
  await expect(passwordInput).toHaveValue(`${loginPage.validPassword}`);

  await loginPage.clickLoginButton();;
  const myAccountLink = page.locator(mainPage.myAccountLink);
  await expect(myAccountLink).toBeVisible();

  await mainPage.clickMyAccountLink();
  await expect(page).toHaveURL(myAccountPage.url);

})
