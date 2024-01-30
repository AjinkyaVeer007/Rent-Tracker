import React from "react";
import Tabs from "../components/Tabs";
import { Outlet } from "react-router-dom";
import { propteryTabs } from "../utils/constant";

function Property() {
  return (
    <div className="mx-3">
      <Tabs data={propteryTabs} />
      <Outlet />
    </div>
  );
}

export default Property;
