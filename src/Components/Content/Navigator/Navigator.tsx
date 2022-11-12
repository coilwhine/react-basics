import { NavLink } from "react-router-dom";
import "./Navigator.scss";

function Navigator(): JSX.Element {
    return (
        <div className="Navigator">
            <NavLink to="/home">Home Page</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/employees">Employees</NavLink>
        </div>
    );
}

export default Navigator;
