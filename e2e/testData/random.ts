import { faker } from "@faker-js/faker";
import { EmployeeDetails } from "./orangeHrmInterfaces";

export function getRandomEmployeedDetails (): EmployeeDetails{
    return{
        firstName: faker.person.firstName(),
        middleName:faker.person.middleName(),
        lastName: faker.person.lastName(),
        employeeId: faker.number.int(1000).toString()
    }
}