import React from "react";
import TenantCard from "../components/TenantCard";

function TenantList() {
  return (
    <>
      <div className="mb-3">
        <TenantCard />
      </div>
      <div className="mb-3">
        <TenantCard />
      </div>
      <div className="mb-3">
        <TenantCard />
      </div>
    </>
  );
}

export default TenantList;
