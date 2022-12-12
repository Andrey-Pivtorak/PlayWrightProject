import { expect, Locator, Page } from '@playwright/test';

const signInLink = '.login';
const downloadTab = '.download';
const myAccountLink = '.my-account';

export default class MainPage {

  readonly page: Page;
  url = 'https://www.redmine.org/';
  searchBar = '#q';
  searchRequest = 'JavaScript';

  constructor(page: Page) {
    this.page = page;
  }

  get myAccountLink() {
    return myAccountLink;
  }

  async openMainPage() {
    await this.page.goto(`${this.url}`);
    await expect(this.page).toHaveTitle(/Overview/);
  }

  async clickSignInLink() {
    await this.page.locator(signInLink).click();
  }

  async clickMyAccountLink() {
    await this.page.locator(myAccountLink).click();
  }

  async clickSearchBar() {
    await this.page.locator(this.searchBar).click();
  }

  async fillSearchBar() {
    await this.page.locator(this.searchBar).fill(this.searchRequest);
  }

  async clickDownloadTab() {
    await this.page.locator(downloadTab).click();
  }

}


