import React from "react";
import { Button, Form } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Tabs from "../components/Tabs";
import { tenantTabs } from "../utils/constant";

function Tenant() {
  return (
    <div className="mx-3">
      <Tabs data={tenantTabs} />
      <Outlet />
    </div>
  );
}

export default Tenant;
