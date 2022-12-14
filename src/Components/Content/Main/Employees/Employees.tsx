import { useEffect, useState } from "react";
import { EmployeeModel } from "../../../../Models/EmployeeModel";
import employeesServices from "../../../../Services/EmployeesServices";
import AddEmployeeForm from "./AddEmployeeForm/AddEmployeeForm";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import "./Employees.scss";

function Employees(): JSX.Element {
  const [employee, setEmployee] = useState<EmployeeModel[] | null>(null)
  useEffect(() => {
    employeesServices.getAllEmployees().then((res) => setEmployee(res));
  }, []);


  return (
    <div className="Employees">
      <div className="all-employees-cards">
        {employee?.map((emp) => {
          return <EmployeeCard key={emp.id} employee={emp} />;
        })}
      </div>
      <AddEmployeeForm />
    </div>
  );
}

export default Employees;
