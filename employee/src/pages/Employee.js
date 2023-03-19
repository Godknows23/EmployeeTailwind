import React from "react";

 const Employee = (props) => {

return( 
<div>
<h1 class = "text-black text-2xl text-sanserif"> Employees</h1>
{props.details && props.details.map((employee) => {
    return <p>{}</p>
    
})}

</div>
)
}



export default Employee