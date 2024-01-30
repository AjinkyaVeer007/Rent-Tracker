import React from "react";
import { MdDelete } from "react-icons/md";

function PropertyCard() {
  return (
    <div className="p-3 rounded border position-relative">
      <div className="fw-bold">Omkar Residency</div>
      <div>Residental</div>
      <div className="fst-italic secondaryColor">
        Flat no.601, Floor 6, Koparkhairane{" "}
      </div>
      <div className="position-absolute top-0 end-0 p-1">
        <MdDelete color="tomato" size={"20px"} />
      </div>
    </div>
  );
}

export default PropertyCard;
