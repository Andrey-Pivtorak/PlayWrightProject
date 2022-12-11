import { test, expect } from '@playwright/test';
import Helper from '../../helper/helper';
import MainPage from '../pages/main.page';
import SearchPage from '../pages/search.page';

test('Checking the search bar work using a valid request', async ({ page }) => {

  const helper = new Helper(page);
  const mainPage = new MainPage(page);
  const searchPage = new SearchPage(page);

  await mainPage.openMainPage();

  await helper.clickLocator(mainPage.searchBar);
  await helper.fillInput(mainPage.searchBar, mainPage.searchRequest);
  const searchBar = page.locator(mainPage.searchBar);
  await expect(searchBar).toHaveValue(mainPage.searchRequest);

  await searchBar.press('Enter');
  await expect(page).toHaveURL(searchPage.searchPageUrl);

})
