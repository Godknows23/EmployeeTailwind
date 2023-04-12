import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import EditEmployee from "./EditEmployee";



const Card = (props) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/deleteemployees/${selectedRows[0]._id}`
      );
      console.log(response.data);
      setSelectedRows([]);
      Swal.fire({
        title: `Delete ${selectedRows.length} Employees`,
        text: "Are you sure you want to delete this record ?",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // User clicked the "Yes, delete it!" button
          // Perform the delete operation here
          Swal.fire(
            'Deleted!',
            'The Selected Employee has been deleted.',
            'success'
          ).then(() => {
            window.location.reload();
          });
  
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // User clicked the "No, cancel!" button
          console.log("Delete operation cancelled!");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleCheckboxChange = (event, row) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows(selectedRows.filter((r) => r._id !== row._id));
    }
  };
  if (props.details && props.details.length > 0) {
    return (
      <div>
        <table className="card">
          <thead>
            <tr className="table_header">
              <th></th>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone </th>
              <th>Email</th>
              <th>National ID</th>
              <th>Department</th>
              <th>D.O.B</th>
            </tr>
          </thead>
          <tbody>
            {props.details.map((row) => (
              <tr key={row._id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.some((r) => r._id === row._id)}
                    onChange={(event) => {
                      handleCheckboxChange(event, row);
                    }}
                  />
                </td>
                <td>{row.name}</td>
                <td>{row.surname}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
                <td>{row.nationalId}</td>
                <td>{row.department}</td>
                <td>{row.date_of_birth}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        <a
          href="#"
          id="delete_svg"
          onClick={handleDelete}
          disabled={selectedRows.length === 0}
           
        
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" />
          </svg>
          Delete
        </a>

        <a className="selected" onClick={() => this.getSelectedRows()}>
          {selectedRows.length} Selected
        </a>
        <EditEmployee/>
        <a href="#" id="salary_svg">
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
      </div>
    );
  } else {
    return (
      <div className="card">
        <img src={require("../img/empty.png")} />
        <p className="card-text">You have no employees</p>
      </div>
    );
  }
};

export default Card;

