import { test, expect } from '@playwright/test';
import MainPage from '../pages/main.page';
import LoginPage from '../pages/login.page';

test('Authorization on the site using invalid the credentials', async ({ page }) => {

  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);

  await mainPage.openMainPage();

  await mainPage.clickSignInLink();
  await expect(page).toHaveURL(loginPage.url);

  await loginPage.fillUsername();
  const usernameInput = page.locator(loginPage.usernameLocator);
  await expect(usernameInput).toHaveValue(`${loginPage.validUsername}`);

  await loginPage.fillInvalidPassword();
  const passwordInput = page.locator(loginPage.passwordLocator);
  await expect(passwordInput).toHaveValue(`${loginPage.invalidPassword}`);

  await loginPage.clickLoginButton();
  const flashError = page.locator(loginPage.flashError);
  await expect(flashError).toBeVisible();

})
