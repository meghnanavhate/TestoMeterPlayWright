//OTP validation, captha validation


//playwright - save session details and you can load that session again
import { test, expect, chromium } from '@playwright/test';

    test.use({
       storageState:'auth/mamaearth-session.json'
   })

test("mamaearth automation", async({page})=>{
    await page.goto("https://mamaearth.in");
    await page.waitForTimeout(5000);
    //await page.locator("//button[contains(text(),'Account')]").click();
    //await page.pause();

    //await page.context().storageState({
      //  path:'auth/mamaearth-session.json'
    //})
});
