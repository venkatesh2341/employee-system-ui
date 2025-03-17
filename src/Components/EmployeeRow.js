import React, { useState } from 'react'
import EmployeeService from '../Services/EmployeeService'
import { useNavigate }from "react-router-dom";


const EmployeeRow = ({employee, deleteEmployee}) => {

  return (
    <tr>
        <td className="px-4 py-2">{employee.id}</td>
        <td className="px-4 py-2">{employee.firstName}</td>
        <td className="px-4 py-2">{employee.lastName}</td>
        <td className="px-4 py-2">{employee.emailId}</td>
        <td className=" justify-center space-x-4 flex ">
            <button className="bg-purple-300 rounded-md w-16">Edit</button>
            <button 
                onClick={(e)=> deleteEmployee(e, employee.id)}
                className="bg-red-300 rounded-md w-16">Delete</button>
        </td>
    </tr>
  )
}

export default EmployeeRow