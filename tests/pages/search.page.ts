import { expect, Locator, Page } from '@playwright/test';

export default class SearchPage {

  readonly page: Page;

  #url = /.*search/;

  constructor(page: Page) {
    this.page = page;
  }

  get searchPageUrl() {
    return this.#url;
  }

}
