import test,{ expect } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com", { timeout: 60000 });
});

test("My testcase", async({page})=>{
    let loginPageObject = new LoginPage(page);
    //goto=open the page
    //playwright - element locator -30sec
    //playwright - assertion - 5 sec
    //locators - placeholder, Label, Title, Role, testid, Text, AltText
    //locator= xpath and css selector

    //await page.goto("https://www.saucedemo.com",{timeout:60000});
   await loginPageObject.username.fill("dhein");
    await loginPageObject.password.fill("dhoe");
    await loginPageObject.loginButton.click();
    const errorMsg = await page.locator("[data-test='error']").textContent();
    //Assertion - validation
    //expect(errorMsg).toBe("Epic sadface: Username and password do not match any user in this service");
    expect.soft(await page.locator("[data-test='error']")).toHaveText("Epic sadface: Username and password do not match any user in this service");

    //Hard Assertion - next step will not executed
    //Soft Assertion - next step will execute

});



test("Valid Credintials login user", async({page})=>{
    let loginPageObject = new LoginPage(page);
    //await page.goto("https://www.saucedemo.com",{timeout:60000});
await expect(loginPageObject.username).toBeVisible();
    await loginPageObject.username.fill("standard_user");
await expect(loginPageObject.password).toBeVisible();
    await loginPageObject.password.fill("secret_sauce");
await expect(loginPageObject.loginButton).toBeVisible();
await loginPageObject.loginButton.click();

    //(3 ways to select dropdown)
    //await page.locator("[data-test='product-sort-container']").selectOption({label: "Name (Z to A)"});
    //await page.waitForTimeout(5000);

    //await page.locator("[data-test='product-sort-container']").selectOption({index: 2});
    //await page.waitForTimeout(5000);

    await page.locator("[data-test='product-sort-container']").selectOption({value: "az"});

    await page.locator("[data-test='inventory-item']").filter({hasText:"Sauce Labs Backpack"})
    .getByText("Add to cart").click();

    await page.locator("[data-test='inventory-item']").filter({hasText:"Sauce Labs Fleece Jacket"})
    .getByText("Add to cart").click();
    await page.waitForTimeout(15000);
});