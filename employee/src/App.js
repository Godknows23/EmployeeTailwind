import React, {useState , useEffect } from "react"
import './App.css';
import Employee from "./pages/Employee";
import Card from "./components/Card";
import AddSalary from "./components/AddSalary";
import EditEmployee from "./components/EditEmployee";

function App(){
  const [employeeArray , setEmployeeArray] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployeeArray(data);
        console.log(data);

      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
 
  
  return(
    <div>
  <Employee details = {employeeArray}/>
  <Card details = {employeeArray}/>
  <EditEmployee details={employeeArray}/>
   </div>
    
    )
}

export default App;
