import React from "react";

function LastUserInDb({users}) {

  

  return (
    <div className="col-lg-6 mb-4" style={{width: 60 + "em"}}>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Usuario numero {users.id}
          </h5>
        </div>
        
          <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow" style={{width: 25 + "em"}}>
                <div className="card-body" >Nombre: {users.first_name} </div>
                <div className="card-body" >Fecha de creación: {users.created_at} </div>
              </div>
            </div>
            
          </div>
        </div>
      
        
      </div>
    </div>
  );
}

export default LastUserInDb;
