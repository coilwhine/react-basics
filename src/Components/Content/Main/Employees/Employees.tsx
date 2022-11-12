import { useEffect, useState } from "react";
import { employeeModel } from "../../../../Models/EmployeeModel";
import employeesServices from "../../../../Services/EmployeesServices";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import "./Employees.scss";

function Employees(): JSX.Element {

    const [employee, setEmployee] = useState<employeeModel[] | null>(null)

    useEffect(() => {
        employeesServices.getAllEmployees().then(
            res => setEmployee(res)
        )
    }, [])

    return (
        <div className="Employees">
            {employee?.map((emp) => {
                return <EmployeeCard key={emp.id} employee={emp} />
            })}

        </div>
    );
}

export default Employees;
