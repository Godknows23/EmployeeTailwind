import axios from "axios";
import React, {  useEffect, useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'

function EditEmployee(props) {
  const [showForm, setShowForm] = useState(false);
  const [details, setEmployees] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  

  function handleEditEmployee(employee) {
    setEmployees([...details, employee]);
    setShowForm(false);
  }
 

  function handleSubmit(event) {
    event.preventDefault();
    setShowForm(false);
  }
  const handleCheckboxChange = (event, data) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, data]);
    } else {
      setSelectedRows(selectedRows.filter((r) => r._id !== data._id));
    }
  };

  return (
    <div>
      <a
  href="edit"
  id="edit_svg"
  onClick={(event) => {
    event.preventDefault();
    if (selectedRows) {
      setShowForm(true);
    }
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
  >
    <path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
  </svg>
  Edit
</a>
{showForm && (
    <EmployeeEditForm
      employee={selectedRows}
      onEditEmployee={handleEditEmployee}
      onSubmit={handleSubmit}
    />
  )}
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
       
          {details.map((data) => (
            <tr key={data.id}>
              <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.some((r) => r._id === data._id)}
                    onChange={(event) => {
                      handleCheckboxChange(event, data);
                    }}
                  />
                </td>
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

function EmployeeEditForm({employee, onEditEmployee, onSubmit }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [department, setDepartment] = useState("");
  const [date_of_birth, setDateofBirth] = useState("");
  const [value, setValue] = useState()

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setSurname(employee.surname);
      setPhone(employee.phone);
      setEmail(employee.email);
      setNationalId(employee.nationalId);
      setDepartment(employee.department);
      setDateofBirth(employee.date_of_birth);
    }
  }, [employee]);

  // ...


  const putData = () => {
    let options = {
      method: "PUT",
      url: `http://localhost:3000/employees/${employee._id}`,
      headers: { "Content-Type": "application/json" },
      data: {
        name,
        surname,
        phone,
        email,
        nationalId,
        department,
        date_of_birth,
      },
    };
    axios(options)
      .then((response) => {
        onEditEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setSurname("");
    setPhone("");
    setEmail("");
    setNationalId("");
    setDepartment("");
    setDateofBirth("");
  };

  return (
    <>
    
      <form className="form" onSubmit={onSubmit}>
        <div>
          <h2>Edit Employee</h2>
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
     <PhoneInput
     defaultCountry="ZW"
      placeholder=""
      value={value}
      flags={flags}
      id="phone"
      type="phone"      
      onChange={setValue}
      
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
            <option value="">Select Department </option>
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
        <button className="submit_btn" onClick={putData} type="submit">
          Save
        </button>
        <button className="clear_btn" type="submit">
          Cancel
        </button>
      </form>
      <div className="loadingform"></div>
    </>
  );
}

export default EditEmployee;
