import { Link } from "react-router-dom";
import { EmployeeModel } from "../../../../../Models/EmployeeModel";
import "./EmployeeCard.scss";
import { useMemo } from "react";

interface Props {
  employee: EmployeeModel;
}

function getAge(date: string) {
  const today = new Date();
  const birthDate = new Date(date);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age > 70) {
    return "Old";
  }
  return age;
}

const employeeImg = "http://localhost:3030/api/employees/images/";

function EmployeeCard(props: Props): JSX.Element {
  const { employee } = props;

  const employeeAge = useMemo(
    () => getAge(employee.birthDate),
    [employee.birthDate]
  );

  return (
    <div className="EmployeeCard">
      <div>
        <h3>
          {employee.firstName} {employee.lastName}
        </h3>
        <span>{employee.title}</span>
        <span>{employee.country}</span>
        <span>{employee.city}</span>
        <div>
          <span>Age: </span>
          <strong>{employeeAge}</strong>
        </div>
      </div>
      <Link to={`/employees/${employee.id}`}>
        <img
          src={employeeImg + employee.imageName}
          alt={employee.firstName + "image"}
        />
      </Link>
    </div>
  );
}

export default EmployeeCard;
