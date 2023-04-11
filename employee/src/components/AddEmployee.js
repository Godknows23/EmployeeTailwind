import axios from "axios";
import React, { useState } from "react";


// code Adding an Employee
function AddEmployee() {
  const [showForm, setShowForm] = useState(false);
  const [details, setEmployees] = useState([]);
  

  function handleAddEmployee(employee) {
    setEmployees([...details, employee]);
    setShowForm(false);
  };
  
  return (
    <div>
      <button onClick={() => setShowForm(true)}>Add Employee</button>  
      {showForm && <EmployeeForm onAddEmployee={handleAddEmployee} />}
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          {details.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.surname}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
              <td>{data.nationalId}</td>
              <td>{data.department}</td>
              <td>{data.date_of_birth}</td>
              
              
            </tr>
            
          ))}
              </tbody> 
      </table>
    </div>
  );
}

function EmployeeForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [department, setDepartment] = useState("");
  const [date_of_birth, setDateofBirth] = useState("");

  const postData = () => {
    

    let options = {
      method: "POST",
      url: "http://localhost:3000/addemployees",
      headers: { "Content-Type": "application/json" },
      data: {
        name: name,
        surname: surname,
        phone: phone,
        email: email,
        nationalId: nationalId,
        department: department,
        date_of_birth: date_of_birth,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <form className="form">
        <div>
          <h2>Add Employee</h2>
        </div>
        <div>
          <label htmlFor="name">
            Name:
            <br />
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="surname">
            Surname: <br />
          </label>
          <input
            id="surname"
            type="text"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">
            Phone:
            <br />
          </label>
          <input
            id="phone"
            type="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <br />
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="nationalId">
            National ID:
            <br />
          </label>
          <input
            id="nationalId"
            type="text"
            value={nationalId}
            onChange={(event) => setNationalId(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="department">
            Department:
            <br />
          </label>
          <select
            id="department"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="Software Engineering">Software Engineering </option>
            <option value="DevOps">DevOps </option>
            <option value="Design">Design </option>
          </select>
        </div>
        
        <div>
          <label htmlFor="dob">
            D.O.B:
            <br />
          </label>
          <input
            id="DOB"
            type="date"
            value={date_of_birth}
            onChange={(event) => setDateofBirth(event.target.value)}
          />
        </div>
        <button className="submit_btn" onClick={postData} type="submit">
          Submit
        </button>
        <button className="clear_btn" type="submit">
          Cancel
        </button>
      </form>
      <div className="loadingform"></div>
    </>
  );
}

export default AddEmployee;
