import React from "react";
import { Outlet } from "react-router-dom";
import Tabs from "../components/Tabs";
import { tenantRentTabs } from "../utils/constant";

function TenantRent() {
  return (
    <div className="mx-3">
      <Tabs data={tenantRentTabs} />
      <Outlet />
    </div>
  );
}

export default TenantRent;
