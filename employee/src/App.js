import React, {useState , useEffect } from "react"
import './App.css';
import Employee from "./pages/Employee";
import Card from "./components/Card";

function App(){
  const [employeeArray , setEmployeeArray] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/0ae4e220-556e-4fe6-a857-8ac4ac42a1f2")
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
   </div>
    
    )
}

export default App;
