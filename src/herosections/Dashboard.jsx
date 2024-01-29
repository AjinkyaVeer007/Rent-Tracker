import React from "react";
import IncomeCard from "../components/IncomeCard";
import UserCard from "../components/UserCard";

function Dashboard() {
  return (
    <div className="mx-3 overflow-auto">
      <IncomeCard />
      <div className="row g-0 mt-3 mb-5">
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-6">
          <UserCard />
        </div>
        <div className="col-6">
          <UserCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
