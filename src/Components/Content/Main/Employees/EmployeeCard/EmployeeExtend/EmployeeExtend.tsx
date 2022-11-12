import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { EmployeeModel } from "../../../../../../Models/EmployeeModel";
import employeesServices from "../../../../../../Services/EmployeesServices";
import "./EmployeeExtend.scss";

function EmployeeExtend(): JSX.Element {

    const { employeeId } = useParams()
    const [employee, setEmploee] = useState<EmployeeModel | null>(null)

    useEffect(() => {
        employeesServices.getSpecificEmployees(employeeId).then(res => setEmploee(res))
    }, [employeeId])

    return (
        <div className="EmployeeExtend">
            <h1>Employee Number: {employeeId}</h1>
            <div className="all-wraper">
                <p><label>Name: </label>{employee?.firstName} {employee?.lastName}</p>
                <p><label>Position: </label>{employee?.title}</p>
                <p><label>Location: </label>{employee?.country} {employee?.city}</p>
                <Link to={'/employees/'}>Go Back</Link>
            </div>
        </div>
    );
}

export default EmployeeExtend;
