import React from 'react'

 const Card = (props) => {
  return (
    <div>
        {props.details.map((employee) => (
    <tr key={employee}>
            <th></th>
            <td>{employee.name}</td>
            <td>{employee.surname}</td>
            <td>{employee.phone} </td>
            <td>{employee.email}</td>
            <td>{employee.national_id}</td>
            <td>{employee.department}</td>
            <td>{employee.dob}</td>
          
    </tr>
))}
    </div>
  )
}
export default Card;