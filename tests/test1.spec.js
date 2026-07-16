import { test, expect, chromium } from '@playwright/test';

test("My First Test Case", async ()=>{
    const browser = await chromium.launch({headless:false});//service

    //context 1 - seperate window
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://www.google.com")

    const page2 = await context1.newPage();
    await page2.goto("https://www.amazon.com")


    //context 2 - seperate
    const context2 = await browser.newContext();
    const page3 = await context2.newPage();
    await page3.goto("https://www.facebook.com")

    const page4 = await context2.newPage();
    await page4.goto("https://www.filpkart.com")
});


//Fixture
//Already created objects in playwright
//UI
//Browser - browser service
//Context - cokkiee free session, brand new session
//page - tab