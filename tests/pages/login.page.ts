import { expect, Locator, Page } from '@playwright/test';

export default class LoginPage {

  readonly page: Page;

  #url = 'https://www.redmine.org/login';
  #usernameLocator = '#username';
  #validUsername = 'lqctestuser';
  #passwordLocator = '#password';
  #validPassword = '1Q42ds';
  #invalidPassword = '1Q42rg';
  #loginButton = '[name="login"]';
  #flashError = '#flash_error';
  #lostPasswordLink = 'a[href="/account/lost_password"]';

  constructor(page: Page) {
    this.page = page;
  }

  get loginPageUrl() {
    return this.#url;
  }

  get usernameLocator() {
    return this.#usernameLocator;
  }

  get validUsername() {
    return this.#validUsername;
  }

  get passwordLocator() {
    return this.#passwordLocator;
  }

  get validPassword() {
    return this.#validPassword;
  }

  get invalidPassword() {
    return this.#invalidPassword;
  }

  get loginButton() {
    return this.#loginButton;
  }

  get flashError() {
    return this.#flashError;
  }

  get lostPasswordLink() {
    return this.#lostPasswordLink;
  }

}
