import axios from 'axios';


const EMPLOYEE_CREATE_URL = "http://localhost:8080/api/v1/create-employee"
const GET_EMPLOYEE_LIST_URL= "http://localhost:8080/api/v1/employees"
const DELETE_EMPLOYEE_URL = "http://localhost:8080/api/v1/employee/"
const GET_EMPLOYEE_BY_ID_URL = "http://localhost:8080/api/v1/employee/"
const UPDATE_EMPLOYEE_URL = "http://localhost:8080/api/v1/employee/"

class EmployeeService{
    createEmployee(employee){
       return axios.post(EMPLOYEE_CREATE_URL, employee);
    }

    getEmployeeList(){
        return axios.get(GET_EMPLOYEE_LIST_URL)
                        .then(result => result.data)
                        .catch(error => error)
    }
    
    deleteEmployee(id){
        return axios.delete(DELETE_EMPLOYEE_URL + id)
    }

    getEmployee(id){
        return axios.get(GET_EMPLOYEE_BY_ID_URL + id)
    }

    updateEmployee(id, employee){
       return axios.put(UPDATE_EMPLOYEE_URL + id, employee)
    }
};

export default new EmployeeService()