import { Link } from "react-router-dom";
import { EmployeeModel } from "../../../../../Models/EmployeeModel";
import "./EmployeeCard.scss";

function EmployeeCard({ employee }: { employee: EmployeeModel }): JSX.Element {

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
          <strong>{getAge(employee.birthDate)}</strong>
        </div>
      </div>
      <Link to={`/employees/${employee.id}`}>
        <img
          src={`http://localhost:3030/api/employees/images/${employee.imageName}`}
          alt={employee.firstName + "image"}
        />
      </Link>
    </div>
  );
}

export default EmployeeCard;
