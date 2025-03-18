import React, { useState } from 'react'
import EmployeeService from '../Services/EmployeeService';
import { useNavigate }from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";


const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email_id: ""
    })

    const navigate= useNavigate()

    const handleChange = (e)=>{
        const {name, value}= e.target;
        setEmployee({...employee, [name] : value})
    }

    const createEmployee = (e)=>{
        e.preventDefault();
        EmployeeService.createEmployee(employee).then((response)=>{
            console.log(response);
            navigate("/")
        }).catch((error)=>{
            console.log(error);
        });
    };

    const resetEmployee = (e)=>{
        e.preventDefault();
        setEmployee({
            id: "",
            first_name: "",
            last_name: "",
            email_id: ""
        })
    }


  return (
    <div className="flex max-w-2xl shadow border-b mx-auto mt-4 bg-gray-100">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <button onClick={(e) => { e.preventDefault(); navigate("/")}}
                    className="hover:bg-slate-300">
                    <VscArrowLeft />
                </button>
                
                <h1>Add New Employee</h1>
            </div>

            <div className="items-center justify-center h-14 w-full my-4 py-2">
                <label className="block text-gray-500 text-sm font-normal">First Name</label>
                <input type="text" 
                    name="first_name"
                    value={employee.first_name}
                    onChange={(e)=> handleChange(e)}
                    className="border h-10 w-96 mt-2 px-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 py-2">
                <label className="block text-gray-500 text-sm font-normal">Last Name</label>
                <input type="text" 
                    name="last_name"
                    value={employee.last_name}
                    onChange={(e)=> handleChange(e)}
                    className="border h-10 w-96 mt-2 px-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 py-2">
                <label className="block text-gray-500 text-sm font-normal">Email</label>
                <input type="email" 
                    name="email_id"
                    value={employee.email_id}
                    onChange={(e)=> handleChange(e)}
                    className="border h-10 w-96 mt-2 px-2"></input>
            </div>

            <div className="items-center justify-center h-14 w-full my-6 py-2 space-x-8">
               <button 
                onClick={(e) => createEmployee(e)}
                className="w-24 rounded-md border bg-green-500 hover:bg-green-600">Save</button>

               <button
                onClick={(e) => resetEmployee(e)}
                className="w-24 rounded-md border bg-red-500 hover:bg-red-600">Clear</button>
            </div>

        </div>

    </div>
  )
}

export default AddEmployee