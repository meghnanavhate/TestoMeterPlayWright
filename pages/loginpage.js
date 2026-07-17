
export class LoginPage{

    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.locator("[value='Login']");
        this.errorMessage = page.locator("[data-test='error']");

    }
    async enterUserName(username){
        expect(await this.loginPageObject.Username).toBeVisible();
        await this.loginPageObject.username.fill(username);
    }

    async enterPassword(password){
        expect(await this.loginPageObject.password).toBeVisible();
        await this.loginPageObject.password.fill(password);
    }
    
     async clickLogin(loginButton) {
        expect(await this.loginPageObject.loginButton).toBeVisible();
        await this.loginPageObject.loginButton.click(loginButton);
    }
}