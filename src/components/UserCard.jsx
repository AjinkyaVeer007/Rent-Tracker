import React from "react";

function UserCard() {
  return (
    <div className="border p-2 m-1 rounded-2 userCardGradient">
      <div className="fw-medium fs-6 text-truncate">Rushikesh</div>
      <div className="row">
        <div className="col-6 text-center">
          <div style={{ color: "#44ce42" }} className="fw-bold fs-2">
            06
          </div>
          <div className="primaryColor" style={{ fontSize: "10px" }}>
            Rent Paid
          </div>
        </div>
        <div className="col-6 text-center">
          <div className="text-danger fw-bold fs-2">01</div>
          <div className="primaryColor" style={{ fontSize: "10px" }}>
            Rent Pending
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
