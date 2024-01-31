import React from "react";
import TenantRentCard from "../components/TenantRentCard";

function TenantRentList() {
  return (
    <>
      <div className="mb-3">
        <TenantRentCard />
      </div>
      <div className="mb-3">
        <TenantRentCard />
      </div>
      <div className="mb-3">
        <TenantRentCard />
      </div>
    </>
  );
}

export default TenantRentList;
