import { Page } from "@playwright/test";
import AddEmployeePage from "./addEmployeeWithPageObjects";

class HomePage {
    constructor(private readonly page: Page) {
        
    }

    private readonly pimButton =  this.page.getByRole('link', { name: 'PIM' });
    private readonly addEmployeeButton =  this.page.getByRole('link', { name: 'Add Employee' });

    async addEmployeePage () {
        await this.pimButton.click();
        await this.addEmployeeButton.click();
        return new AddEmployeePage(this.page);
    }

  
} export default HomePage;