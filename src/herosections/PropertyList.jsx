import React from "react";
import PropertyCard from "../components/PropertyCard";

function PropertyList() {
  return (
    <>
      <div className="mb-3">
        <PropertyCard />
      </div>
      <div className="mb-3">
        <PropertyCard />
      </div>
      <div className="mb-3">
        <PropertyCard />
      </div>
    </>
  );
}

export default PropertyList;
