import axios from "axios";
import React, { useEffect , useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

 
function EditEmployee({details}) {
  const [name, setName] = useState(details.name);
  const [surname, setSurname] = useState(details.surname);
   const [email, setEmail] = useState(details.email);
   const [phone ] = useState(details.phone);
  const [nationalId, setNationalId] = useState(details.nationalId);
  const [department, setDepartment] = useState(details.department);
  const [date_of_birth, setDateofBirth] = useState(details.date_of_birth);
  const [value, setValue] = useState();
  const [_id ] = useState(null);
  const [showForm, setShowForm] = useState(false);

  console.log(details);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        name,
        surname,
        phone,
        email,
        nationalId,
        department,
        date_of_birth,
        value,
    };
    axios.put(`http://localhost:3000/employees/:${_id}`, data).then((res) => {
      console.log(res.data);
    });
  };
  const handleEditClick = (event, id) => {
    event.preventDefault();
    setSelectedRow(id);
    setShowForm(!showForm);

  };
  
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:3000/employees')
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
  
    const selectedData = data.find((item) => item.id === selectedRow);
  
  

  return (
    <div>
       <a
        href="edit"
        id="edit_svg"
        onClick = {handleEditClick}>
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
    <form className="form" onSubmit={handleSubmit}>
      
       <div>
          <h2>Edit Employee</h2>
       </div>
       <div>
      
          <label htmlFor="name">
            Name: <br/>          
            </label>
          <input
            id="name"
            type="text"
            value={selectedData.name}
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
            value={selectedData.surname}
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
            value={selectedData.value}
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
            value={selectedData.email}
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
            value={selectedData.nationalId}
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
            value={selectedData.department}
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
            value={selectedData.date_of_birth}
            onChange={(event) => setDateofBirth(event.target.value)}
          />
        </div>
        <button className="submit_btn" type="submit">
          Save
        </button>
        <button className="clear_btn" type="submit">
          Cancel
        </button>
       
      </form>
       
      )}
      
      </div>
      
  );
  
}

 




 

export default EditEmployee;
