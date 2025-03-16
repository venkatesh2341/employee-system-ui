import React, { useEffect, useState } from 'react';
import EmployeeService from '../Services/EmployeeService';
import { useNavigate }from "react-router-dom";
import EmployeeRow from './EmployeeRow';

const EmployeeList = () => {

    const [employeeList, setEmployeeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        EmployeeService.getEmployeeList()
            .then(data =>{
                setEmployeeList(data)
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


    if(loading){
        return <h1>Loading... Shimmmer</h1>
    }

  return (
    <div> 

        <button 
        onClick={(e) => navigate("/addEmployee")}
        className="bg-slate-600 my-4 ml-2 rounded tracking-wider text-white hover:bg-slate-700 w-36">Add Emplyee</button>

        <div className="flex mt-4 justify-center">
            <table className="min-w-full table-auto border-separate">
                <thead>
                    <tr className="bg-gray-300">
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Employee Id</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">First Name</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Last Name</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Email Id</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-slate-100">
                        {
                            employeeList.map(employee => (
                                <EmployeeRow employee={employee} key={employee.id}> </EmployeeRow>
                            ) )
                        }                
                </tbody>
            </table>
        </div>
    </div> 

  )
}

export default EmployeeList