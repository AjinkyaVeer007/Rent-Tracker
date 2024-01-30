import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function Tabs({ data }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Nav fill variant="tabs" className="mb-3">
      {data &&
        data.map((item) => {
          return (
            <Nav.Item key={item.id}>
              <Nav.Link
                className={
                  location.pathname === item.navigate
                    ? "primaryColor"
                    : "complementryColor"
                }
                onClick={() => navigate(item.navigate)}
                active={location.pathname === item.navigate}
              >
                {item.name}
              </Nav.Link>
            </Nav.Item>
          );
        })}
    </Nav>
  );
}

export default Tabs;
