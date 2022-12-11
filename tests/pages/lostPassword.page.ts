import { expect, Locator, Page } from '@playwright/test';

export default class LostPasswordPage {

  readonly page: Page;

  #url = 'https://www.redmine.org/account/lost_password';
  #emailInput = '#mail';
  #email = 'lqctestemail@proton.me';
  #commitButton = 'input[name="commit"]';
  #flashMessage = '#flash_notice';

  constructor(page: Page) {
    this.page = page;
  }

  get lostPasswordPageUrl() {
    return this.#url;
  }

  get emailInput() {
    return this.#emailInput;
  }

  get email() {
    return this.#email;
  }

  get commitButton() {
    return this.#commitButton;
  }

  get flashMessage() {
    return this.#flashMessage;
  }

}
