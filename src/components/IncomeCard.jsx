import React from "react";

function IncomeCard() {
  return (
    <div className="inComeCardGradient text-white rounded-2 px-2 py-5">
      <div className="row g-0">
        <div className="col-6 border-end">
          <div className="text-center">
            <div style={{ fontSize: "35px" }} className="fw-bolder">
              ₹ 100k
            </div>
            <div className="fw-medium">Yearly income</div>
          </div>
        </div>
        <div className="col-6">
          <div className="text-center">
            <div style={{ fontSize: "35px" }} className="fw-bolder">
              ₹ 10000
            </div>
            <div className="fw-medium">Monthly income</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeCard;
