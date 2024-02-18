import React from "react";

export function DropdownMenu(){
    const [value, setValue] = React.useState();
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <div>
        <h2>Complaint Box</h2>
          <select value={value} onChange={handleChange}>
            <option value="hostelwarden">Hostel Warden</option>
            <option value="academicsection">Academic Section</option>
          </select> 
        </div>
    );
   };
