import { Route, Router, Routes } from "react-router-dom";
import EmployeeExtend from "./Employees/EmployeeCard/EmployeeExtend/EmployeeExtend";
import Employees from "./Employees/Employees";
import Home from "./Home/Home";
import "./Main.scss";
import Products from "./Products/Products";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <Routes>
                <Route path='/' element={<h2>welcome to my store</h2>} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/employees/:employeeId" element={<EmployeeExtend />} />
            </Routes>
        </div>
    );
}

export default Main;
