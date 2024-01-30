import React from "react";
import { Offcanvas } from "react-bootstrap";
import { GoHomeFill } from "react-icons/go";
import { BsBuildingsFill } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";
import { FaLink } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar({ show, handleClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarArray = [
    {
      id: 1,
      name: "Dashboard",
      icon: <GoHomeFill size={"20px"} />,
      navigate: "/main/dashboard",
    },
    {
      id: 2,
      name: "Property",
      icon: <BsBuildingsFill size={"20px"} />,
      navigate: "/main/property/form",
    },
    {
      id: 3,
      name: "Rental Users",
      icon: <HiMiniUsers size={"20px"} />,
      navigate: "/main/users",
    },
    {
      id: 4,
      name: "Link users to property",
      icon: <FaLink size={"20px"} />,
      navigate: "/main/useronrent",
    },
  ];

  const handleClick = (nav) => {
    navigate(nav);
    handleClose();
  };
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        {sidebarArray &&
          sidebarArray.map((content) => {
            return (
              <div
                onClick={() => handleClick(content.navigate)}
                key={content.id}
                className={`${
                  location.pathname.includes(content.navigate)
                    ? "complementryBg text-white"
                    : "bg-white secondaryColor"
                } d-flex align-items-center p-2 rounded  gap-2 mb-2`}
              >
                <div>{content.icon}</div>
                <div>{content.name}</div>
              </div>
            );
          })}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Sidebar;
