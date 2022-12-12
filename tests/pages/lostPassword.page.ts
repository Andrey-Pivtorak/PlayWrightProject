import { expect, Locator, Page } from '@playwright/test';

const commitButton = 'input[name="commit"]';

export default class LostPasswordPage {

  readonly page: Page;
  url = 'https://www.redmine.org/account/lost_password';
  emailInput = '#mail';
  email = 'lqctestemail@proton.me';
  flashMessage = '#flash_notice';

  constructor(page: Page) {
    this.page = page;
  }

  async fillEmailInput() {
    await this.page.locator(this.emailInput).fill(this.email);
  }

  async clickCommitButton() {
    await this.page.locator(commitButton).click();
  }
  
}
