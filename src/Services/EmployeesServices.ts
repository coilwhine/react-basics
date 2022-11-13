import { EmployeeModel } from "../Models/EmployeeModel";

class EmployeesServices {

  async getAllEmployees() {
    const result = await fetch('http://localhost:3030/api/employees')
    return result.json();
  }


  async getSpecificEmployees(id: string | undefined): Promise<EmployeeModel> {
    const result = await fetch(`http://localhost:3030/api/employees/${id}`)
    return result.json();
  }

  async setNewEmployee(employee: EmployeeModel) {
    await fetch("http://localhost:3030/api/employees", {
      method: "POST",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "aplication-json"
      }
    })
  }
}

const employeesServices = new EmployeesServices();
export default employeesServices;
