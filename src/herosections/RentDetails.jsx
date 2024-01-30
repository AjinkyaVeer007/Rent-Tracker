import React from "react";
import Divider from "../components/Divider";

function RentDetails() {
  return (
    <div className="mx-3">
      <div className="text-center">
        <div className="fw-medium primaryColor fs-3">
          Rushikesh Ashok Dhanawade
        </div>
        <div className="fst-italic">Omkar resident</div>
        <div className="secondaryColor">
          Sec-18, Room no- 800, Koparkhairane
        </div>
      </div>
      <Divider />
      <div className="text-center">
        <div className="primaryColor">Rent Paid</div>
        <div className="fs-2">
          <span className="text-success">04</span>/
          <span className="text-danger">11</span>
        </div>
      </div>
      <Divider />
      <div className="text-center">
        <div className="mb-2">Date Of Rent Payment</div>
        <div className="fw-medium">01 st of every month</div>
      </div>
      <Divider />
      <div className="text-center">
        <div className="mb-2">Rent Amount</div>
        <div className="fw-medium fs-4">₹ 6000</div>
      </div>
      <Divider />
      <div className="text-center">
        <div className="mb-2">Deposit Amount</div>
        <div className="fw-medium fs-4">₹ 25000</div>
      </div>
      <Divider />
      <div className="text-center">
        <div className="mb-2 d-flex align-items-center justify-content-center">
          Agreement Tenure -{" "}
          <span
            style={{ fontSize: "11px" }}
            className="py-1 px-2 rounded-pill bg-success text-white"
          >
            Active
          </span>
        </div>
        <div className="fw-medium">01/01/2023 to 01/12/2023</div>
      </div>
      <Divider />
    </div>
  );
}

export default RentDetails;
