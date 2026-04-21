import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';   

test('Login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://route2uni.tbls.in/login');
    await loginPage.login('yt66s9cn8c@deltajohnsons.com', 'Hg>$bshu=i$&');
   // await expect(page).toHaveURL('https://route2uni.tbls.in/dashboard');

    const DashBoard =page.getByAltText('Route2Uni');
    await expect(DashBoard).toBeVisible();

});
    