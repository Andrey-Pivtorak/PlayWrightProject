import { test, expect } from '@playwright/test';
import Helper from '../../helper/helper';
import MainPage from '../pages/main.page';
import DownloadPage from '../pages/download.page';

test('Checking the download of the app on the computer', async ({ page }) => {

  const helper = new Helper(page);
  const mainPage = new MainPage(page);
  const downloadPage = new DownloadPage(page);

  await mainPage.openMainPage();

  await helper.clickLocator(mainPage.downloadTab);
  await expect(page).toHaveURL(downloadPage.downloadPageUrl);

  await helper.clickLocator(downloadPage.appVersionLink);
  console.log('File download is successful');

})
