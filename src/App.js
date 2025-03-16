import './App.css';
import AddEmployee from './Components/AddEmployee';
import Card from './Components/Card';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EmployeeList from './Components/EmployeeList';

function App() {
  return (
      <>
      <BrowserRouter>
        <Card />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
      </>
  )
  ;
}

export default App;
