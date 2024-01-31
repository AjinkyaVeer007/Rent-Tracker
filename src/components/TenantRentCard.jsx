import React from "react";
import Divider from "./Divider";
import { MdDelete } from "react-icons/md";

function TenantRentCard() {
  return (
    <div className="rounded border p-3 position-relative">
      <div>Rushikesh Arun Dhanawade</div>
      <div className="mb-2 fst-italic">Omkar Appartment</div>
      <Divider />
      <div style={{ fontSize: "12px" }}>
        <div>Agreement Tenure : 01/01/2023 to 01/12/2023</div>
        <div>Rent Amount : ₹ 6000</div>
        <div>Rent Payment Date : 01 st date of every month</div>
      </div>
      <div className="position-absolute top-0 end-0 p-1">
        <MdDelete color="tomato" size={"20px"} />
      </div>
    </div>
  );
}

export default TenantRentCard;
