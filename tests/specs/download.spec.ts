import { test, expect } from '@playwright/test';
import MainPage from '../pages/main.page';
import DownloadPage from '../pages/download.page';

test('Checking the download of the app on the computer', async ({ page }) => {

  const mainPage = new MainPage(page);
  const downloadPage = new DownloadPage(page);

  await mainPage.openMainPage();

  await mainPage.clickDownloadTab();
  await expect(page).toHaveURL(downloadPage.url);

  await downloadPage.clickAppVersionLink();
  console.log('File download is successful');

})
