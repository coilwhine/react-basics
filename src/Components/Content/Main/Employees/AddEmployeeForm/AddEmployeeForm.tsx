import "./AddEmployeeForm.scss";
import { useForm } from "react-hook-form";
import { EmployeeModel } from "../../../../../Models/EmployeeModel"
import employeesServices from "../../../../../Services/EmployeesServices";

function AddEmployeeForm() {

    const { register, handleSubmit, reset } = useForm<EmployeeModel>()

    function submitEmployeeForm(employee: EmployeeModel) {
        employeesServices.setNewEmployee(employee).then(() => {
            // reset()
        })
    }

    return (
        <form onSubmit={handleSubmit(submitEmployeeForm)}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" {...register("firstName")} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" {...register("lastName")} />
            </div>
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" {...register("title")} />
            </div>
            <button>Add New</button>
        </form>
    )
}

export default AddEmployeeForm;
