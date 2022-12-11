import { test, expect } from '@playwright/test';
import Helper from '../../helper/helper';
import MainPage from '../pages/main.page';
import LoginPage from '../pages/login.page';
import LostPasswordPage from '../pages/lostPassword.page';

test('Checking password recovery using a registered email', async ({ page }) => {

  const helper = new Helper(page);
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  const lostPasswordPage = new LostPasswordPage(page);

  await mainPage.openMainPage();

  await helper.clickLocator(mainPage.signInLink);
  await expect(page).toHaveURL(loginPage.loginPageUrl);

  await helper.clickLocator(loginPage.lostPasswordLink);
  await expect(page).toHaveURL(lostPasswordPage.lostPasswordPageUrl);

  await helper.fillInput(lostPasswordPage.emailInput,lostPasswordPage.email);
  const emailLocator = page.locator(lostPasswordPage.emailInput);
  await expect(emailLocator).toHaveValue(`${lostPasswordPage.email}`);

  await helper.clickLocator(lostPasswordPage.commitButton);
  const flashMessage = page.locator(lostPasswordPage.flashMessage);
  await expect(flashMessage).toBeVisible();

})
