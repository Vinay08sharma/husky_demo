import { Page } from "@playwright/test";
import { ENV } from "../frameworkConfig/env";
import AddEmployeePage from "./addEmployeeWithPageObjects";
import HomePage from "./homePageObjects";

class LoginPage {
    constructor(private readonly page: Page) {
        
    }

    private readonly userNameTextBox = this.page.getByPlaceholder('Username');
    private readonly passwordTextBox = this.page.getByPlaceholder('Password');
    private readonly loginButton = this.page.getByRole('button', { name: 'Login' });
    
    async login() {
        await this.userNameTextBox.fill(ENV.USERNAME);
        await this.passwordTextBox.fill(ENV.PASSWORD);
        await this.loginButton.click();
        return new HomePage(this.page);
    }

} export default LoginPage;