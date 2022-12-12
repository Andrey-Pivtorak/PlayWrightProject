import { test, expect } from '@playwright/test';
import MainPage from '../pages/main.page';
import LoginPage from '../pages/login.page';
import LostPasswordPage from '../pages/lostPassword.page';

test('Checking password recovery using a registered email', async ({ page }) => {

  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  const lostPasswordPage = new LostPasswordPage(page);

  await mainPage.openMainPage();

  await mainPage.clickSignInLink();
  await expect(page).toHaveURL(loginPage.url);

  await loginPage.clickLostPasswordLink();
  await expect(page).toHaveURL(lostPasswordPage.url);

  await lostPasswordPage.fillEmailInput();
  const emailLocator = page.locator(lostPasswordPage.emailInput);
  await expect(emailLocator).toHaveValue(`${lostPasswordPage.email}`);

  await lostPasswordPage.clickCommitButton();
  const flashMessage = page.locator(lostPasswordPage.flashMessage);
  await expect(flashMessage).toBeVisible();

})
