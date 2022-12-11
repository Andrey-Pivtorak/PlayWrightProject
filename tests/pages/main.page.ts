import { expect, Locator, Page } from '@playwright/test';

export default class MainPage {

  readonly page: Page;

  #url = 'https://www.redmine.org/';
  #signInLink = '.login';
  #searchBar = '#q';
  #searchRequest = 'JavaScript';
  #downloadTab = '.download';
  #myAccountLink = '.my-account';

  constructor(page: Page) {
    this.page = page;
  }

  get signInLink() {
    return this.#signInLink;
  }

  get mainPageUrl() {
    return this.#url;
  }

  get myAccountLink() {
    return this.#myAccountLink;
  }

  get searchBar() {
    return this.#searchBar;
  }

  get searchRequest() {
    return this.#searchRequest;
  }

  get downloadTab() {
    return this.#downloadTab;
  }

  async openMainPage() {

    const [response] = await Promise.all([
      // It is important to call waitForNavigation before click to set up waiting.
      this.page.waitForNavigation(),
      await this.page.goto(`${this.mainPageUrl}`),
      await expect(this.page).toHaveTitle(/Overview/)
    ])


  }

}


