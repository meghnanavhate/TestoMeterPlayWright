import { test, expect } from '@playwright/test';

test("handling alert", async({page})=>{
    await page.goto ("file:///C:/Users/aksha/Desktop/TestoMeterPlayWright/html/test1.html");

    //Trigger one event
    let alertWaitingProcess = page.waitForEvent("dialog");
    await page.getByText("click me for alert").click();
    let alert= await alertWaitingProcess;
    console.log(await alert.message());
    await alert.accept(); //ok
    //dismiss //cancel
    //await alert.dismiss();
    //await page.getByText("Amazon Page").click();
    //await page.waitForTimeout(5000);
});


test("handling window @windowtest", async({page})=>{
    await page.goto ("file:///C:/Users/aksha/Desktop/TestoMeterPlayWright/html/test1.html");

    //Trigger one event
    let newWindowWaitingProcess = page.waitForEvent("popup");
    await page.getByText("Amazon Page").click();
    let newWindow= await newWindowWaitingProcess;
    await page.waitForTimeout(2000);
    console.log(await newWindow.title());
    await newWindow.getByPlaceholder("Search Amazon").fill("Phone");
    await newWindow.getByPlaceholder("Search Amazon").press("Enter");
    await page.waitForTimeout(5000);
    //dismiss //cancel
    //await alert.dismiss();
    
    //await page.waitForTimeout(5000);
});