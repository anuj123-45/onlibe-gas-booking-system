import React, { useState } from "react";
function Users() {
  
  const [state, setState] = useState(localStorage.getItem("Result"));
  return (
    <>
      <div>
        <table className="table table-striped table-dark">
          <tbody key={'header'}>
            <tr style={{color:"white",fontWeight:"bolder"}}><td>Name</td><td>Email</td><td>Address</td></tr>
            {JSON.parse(state).map((item,key)=>{
              return <tr key={key}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>;
            })}
          </tbody>
          
        </table>
      </div>
    </>
  );
}

export default Users;