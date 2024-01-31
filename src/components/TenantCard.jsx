import React from "react";
import { MdDelete } from "react-icons/md";

function TenantCard() {
  return (
    <div className="p-3 rounded border position-relative">
      <div className="fw-medium fs-5 primaryColor">
        Rushikesh Ashok Dhanawade
      </div>
      <div className="primaryColor">8655473364 - rdhanawade@gmail.com</div>
      <div className="secondaryColor">Wai-Satara</div>
      <div className="position-absolute top-0 end-0 p-1">
        <MdDelete color="tomato" size={"20px"} />
      </div>
    </div>
  );
}

export default TenantCard;
