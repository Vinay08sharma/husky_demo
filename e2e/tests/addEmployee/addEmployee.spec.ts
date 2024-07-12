import { test, expect } from "@playwright/test";
import { ENV } from "../../frameworkConfig/env";
import { getRandomEmployeedDetails } from "../../testData/random";
import LoginPage from "../../pages/loginPageObjects";

test("Add employee", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto(ENV.BASE_URL);
  const homePage = await loginPage.login();
  const addEmployee = await homePage.addEmployeePage();
  await addEmployee.addEmployee(getRandomEmployeedDetails());
  await expect(page.getByText(/Successfully saved/i)).toBeVisible();
});
