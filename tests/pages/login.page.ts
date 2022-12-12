import { expect, Locator, Page } from '@playwright/test';

const loginButton = '[name="login"]';
const lostPasswordLink = 'a[href="/account/lost_password"]';

export default class LoginPage {

  readonly page: Page;
  url = 'https://www.redmine.org/login';
  validUsername = 'lqctestuser'; // need to use it in spec files
  usernameLocator = '#username';
  passwordLocator = '#password';
  validPassword = '1Q42ds';
  invalidPassword = '1Q42rg';
  flashError = '#flash_error';

  constructor(page: Page) {
    this.page = page;
  }

  async fillUsername() {
    await this.page.locator(this.usernameLocator).fill(this.validUsername);
  }

  async fillValidPassword() {
    await this.page.locator(this.passwordLocator).fill(this.validPassword);
  }

  async fillInvalidPassword() {
    await this.page.locator(this.passwordLocator).fill(this.invalidPassword);
  }

  async clickLoginButton() {
    await this.page.locator(loginButton).click();
  }

  async clickLostPasswordLink() {
    await this.page.locator(lostPasswordLink).click();
  }

}
