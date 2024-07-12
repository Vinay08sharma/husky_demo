import { Page } from "@playwright/test";
import { EmployeeDetails } from "../testData/orangeHrmInterfaces";

class AddEmployeePage {
    constructor(private readonly page: Page) {
        
    }

    private readonly firstNameTextBox = this.page.getByPlaceholder('First Name');
    private readonly middleNameTextBox = this.page.getByPlaceholder('Middle Name');
    private readonly lastNameTextbox = this.page.getByPlaceholder('Last Name');
    private readonly idTextBox = this.page.locator('form').getByRole('textbox').nth(4);
    private readonly saveButton = this.page.getByRole('button', { name: 'Save' });
    private readonly successToastMessage = this.page.getByText(/Successfully saved/i);

    async addEmployee(employeeDetails : EmployeeDetails) {
        await this.firstNameTextBox.fill(employeeDetails.firstName);
        await this.middleNameTextBox.fill(employeeDetails.middleName);
        await this.lastNameTextbox.fill(employeeDetails.lastName);
        await this.idTextBox.fill(employeeDetails.employeeId);
        await this.saveButton.click();
    }

}

export default AddEmployeePage;