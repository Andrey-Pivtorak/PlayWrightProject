import { expect, Locator, Page } from '@playwright/test';

export default class Helper {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickLocator(locator: string) {
    await this.page.locator(`${locator}`).click();
  }

  public async fillInput(username: string, data: string) {
    await this.page.locator(`${username}`).fill(`${data}`);
  }

}

// прописати локатори на мейн пейджі і передати в спеку
