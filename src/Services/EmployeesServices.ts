import { EmployeeModel } from "../Models/EmployeeModel";

class EmployeesServices {
  async getAllEmployees() {
    const response = await fetch("http://localhost:3030/api/employees", {
      method: "GET",
    });
    return response.json();
  }

  async getSpecificEmployees(id: string | undefined): Promise<EmployeeModel> {
    const response = await fetch(`http://localhost:3030/api/employees/${id}`, {
      method: "GET",
    });
    return response.json();
  }
}

const employeesServices = new EmployeesServices();
export default employeesServices;
