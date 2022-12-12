import { expect, Locator, Page } from '@playwright/test';

export default class MyAccountPage {

  readonly page: Page;
  url = 'https://www.redmine.org/my/account';

  constructor(page: Page) {
    this.page = page;
  }

}
