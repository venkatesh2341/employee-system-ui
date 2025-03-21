import React, { useEffect, useState } from 'react';
import EmployeeService from '../Services/EmployeeService';
import { useNavigate }from "react-router-dom";
import EmployeeRow from './EmployeeRow';

const EmployeeList = () => {

    const [employeeList, setEmployeeList] = useState([]);
    const [filteredEmployeeList, setFilteredEmployeeList] = useState([])
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        EmployeeService.getEmployeeList()
            .then(data =>{
                setEmployeeList(data)
                setFilteredEmployeeList(data)
            })
            .catch(error =>{
                console.log("Error occured while fetching employee list")
            })
            .finally(()=>{
                setLoading(false)
            })

        // const fetchEmployees= async()=>{
        //     try{
        //         const employeeData= await EmployeeService.getEmployeeList()
        //         setEmployeeList(employeeData)
        //     }catch(error){
        //         console.log(error);
        //     }finally{
        //         setLoading(false)
        //     }
        // }
        // fetchEmployees()
    },[])

    const deleteEmployee= (e, employeeId)=>{
        e.preventDefault()
        EmployeeService.deleteEmployee(employeeId)
                            .then(result=>{
                                console.log("Employee with employee id :" + employeeId + " deleted");
                                setEmployeeList(prevEmployee => prevEmployee.filter(employee => employee.id !== employeeId))
                            })
                            .catch(error => {
                                console.log("Error occured while deleting the employee with id " + employeeId);
                            })
    }

    const updateEmployee = (e, employeeId) => {
        navigate(`/editEmployee/${employeeId}`)
    }

    if(loading){
        return <h1>Loading... Shimmmer</h1>
    }

  return (
    <div> 

        <button 
        onClick={(e) => navigate("/addEmployee")}
        className="bg-slate-600 my-4 ml-2 rounded tracking-wider text-white hover:bg-slate-700 w-36">Add Emplyee</button>

        <input 
        onChange={(e)=>{
            const newSearchText = e.target.value
            setSearchText(newSearchText)
            console.log(newSearchText + " -- ")
            const filteredEmployees = employeeList.filter(employee => Object.values(employee).join(' ').toLocaleLowerCase().includes(newSearchText.toLocaleLowerCase()))
            setFilteredEmployeeList(filteredEmployees)
        }}
        className="mx-3 border-b-2 border" type="text" placeholder="Search employee" value={searchText}></input>

        <div className="flex mt-4 justify-center">
            <table className="min-w-full table-auto border-separate">
                <thead>
                    <tr className="bg-gray-300">
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Employee Id</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">First Name</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Last Name</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Email Id</th>
                    <th className="px-4 py-2 font-semibold text-gray-700 text-balance">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-slate-100">
                        {
                            filteredEmployeeList.map(employee => (
                                <EmployeeRow employee={employee} deleteEmployee ={deleteEmployee} updateEmployee={updateEmployee} key={employee.id}> </EmployeeRow>
                            ) )
                        }                
                </tbody>
            </table>
        </div>
    </div> 

  )
}

export default EmployeeList