import { employeeModel } from "../Models/EmployeeModel";

class EmployeesServices {

    async getAllEmployees() {
        const employees = await fetch('http://localhost:3030/api/employees', {
            method: 'GET'
        }).then((response) => response.json())
        return employees;
    }


    async getSpecificEmployees(id: string | undefined): Promise<employeeModel> {
        const employee = await fetch(`http://localhost:3030/api/employees/${id}`, {
            method: 'GET'
        }).then((response) => response.json())
        return employee;
    }
}

const employeesServices = new EmployeesServices;
export default employeesServices;