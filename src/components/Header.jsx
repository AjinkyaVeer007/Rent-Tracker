import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => setShowSidebar(!showSidebar);
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div
          onClick={() => navigate("/main/dashboard")}
          className="complementryColor fw-bold fs-3"
        >
          Rent Tracker
        </div>
        <HiMenuAlt3 size={"25px"} onClick={handleToggle} />
      </div>
      <Sidebar show={showSidebar} handleClose={handleToggle} />
    </>
  );
}

export default Header;
