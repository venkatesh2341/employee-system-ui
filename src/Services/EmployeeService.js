import axios from 'axios';


const EMPLOYEE_CREATE_URL = "http://localhost:8080/api/v1/create-employee"

class EmployeeService{
    createEmployee(employee){
       return axios.post(EMPLOYEE_CREATE_URL, employee);
    }
}

export default new EmployeeService()