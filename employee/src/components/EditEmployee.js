import React, { useState } from "react";
import axios from "axios";

function EditEmployee() {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditEmployee = () => {
    setShowEditForm(true);
  };

  return (
    <>
      <div>
        <button onClick={handleEditClick}>Edit</button>
      </div>
      {showEditForm && (
        <div>
          {/* Edit form goes here */}
        </div>
      )}
    </>
  );
}









// import React, { useState } from "react";

// function EditEmployee({ props}) {
//   const [edit, setEdit] = useState(false);
//   const [currentData, setCurrentData] = useState(null);

//   const handleEdit = (data) => {
//     setEdit(true);
//     setCurrentData(data);
//   };

//   const handleSave = (data) => {
//     setEdit(false);
//     // Save data
//   };

//   return (
//     <div>
//       <table>
//         <tbody>
//           {props.details.map((data) => (
//             <tr key={data.id}>
//               <td>{data.name}</td>
//               <td>{data.surname}</td>
//               <td>{data.phone}</td>
//               <td>{data.email}</td>
//               <td>{data.nationalId}</td>
//               <td>{data.department}</td>
//               <td>{data.date_of_birth}</td>
//               <td>
//                 {!edit && (
//                  <a href="edit" id="edit_svg" 
//                  onClick={() => handleEdit(data)}>
 
//            <svg
//              xmlns="http://www.w3.org/2000/svg"
//              height="48"
//              viewBox="0 96 960 960"
//              width="48"
//            >
//              <path d="M180 876h44l443-443-44-44-443 443v44Zm614-486L666 262l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248 936H120V808l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" />
//            </svg>
//            Edit
//          </a>  
//                 )}
//                 {edit && currentData.id === data.id && (
//                   <>
//                     <button onClick={() => handleSave(data)}>Save</button>
//                     <button onClick={() => setEdit(false)}>Cancel</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EditEmployee;