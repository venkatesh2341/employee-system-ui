import axios from 'axios';


const EMPLOYEE_CREATE_URL = "http://localhost:8080/api/v1/create-employee"
const GET_EMPLOYEE_LIST_URL= "http://localhost:8080/api/v1/employees"

class EmployeeService{
    createEmployee(employee){
       return axios.post(EMPLOYEE_CREATE_URL, employee);
    }

    getEmployeeList(){
        return axios.get(GET_EMPLOYEE_LIST_URL)
                        .then(result => result.data)
                        .catch(error => error)
    }
};

export default new EmployeeService()