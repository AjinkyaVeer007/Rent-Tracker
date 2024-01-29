import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="row g-0 justify-content-center">
      <div className="col-12 col-lg-4 col-md-5">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
