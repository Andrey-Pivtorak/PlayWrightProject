import { expect, Locator, Page } from '@playwright/test';

export default class DownloadPage {

  readonly page: Page;

  #url = /.*Download/;
  #appVersionLink = 'a[href="/releases/redmine-4.2.9.tar.gz"]';

  constructor(page: Page) {
    this.page = page;
  }

  get downloadPageUrl() {
    return this.#url;
  }

  get appVersionLink() {
    return this.#appVersionLink;
  }

}
