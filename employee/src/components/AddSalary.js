import React, { useState } from 'react';

const AddSalary = (props) => {
    console.log()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date_of_birth, setDob] = useState('');
  const [designation, setDesignation] = useState('');
  const [salary, setSalary] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const designations = ['Manager', 'Team Lead', 'Developer'];
  const salaries = ['5000', '4000', '3000'];

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
    // update employee's salary and designation here
  };
  

  return (
   <div>
   <a href="addSalary"
    id="salary_svg"
    onClick={() => setShowForm(true)
    
     }>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          Add Salary
        </a>
        {showForm && 
    <form className='salary_form' onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="date" value={date_of_birth} onChange={(event) => setDob(event.target.value)} />
      </label>
      <br />
      <label>
        Designation:
        <select value={designation} onChange={(event) => setDesignation(event.target.value)}>
          {designations.map((designation) => (
            <option key={designation} value={designation}>
              {designation}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Salary:
        <select value={salary} onChange={(event) => setSalary(event.target.value)}>
          {salaries.map((salary) => (
            <option key={salary} value={salary}>
              {salary}
            </option>
          ))}
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
    }
    </div>
  );
};

export default AddSalary;