import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap";

function UserOnRent() {
  return (
    <div className="mx-3">
      <div className="fw-bold fs-2 mb-3 primaryColor">
        Property-Tenant Connection
      </div>
      <Form.Group className="mb-3">
        <Form.Label>Select Propery for rent</Form.Label>
        <Dropdown className="border w-100 text-start rounded py-2">
          <Dropdown.Toggle variant="white">Select property</Dropdown.Toggle>

          <Dropdown.Menu className="w-100">
            <Dropdown.Item>Home 1</Dropdown.Item>
            <Dropdown.Item>Home 2</Dropdown.Item>
            <Dropdown.Item>Home 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Select Tenant for rent</Form.Label>
        <Dropdown className="border w-100 text-start rounded py-2">
          <Dropdown.Toggle variant="white">Select tenant</Dropdown.Toggle>

          <Dropdown.Menu className="w-100">
            <Dropdown.Item>User 1</Dropdown.Item>
            <Dropdown.Item>User 2</Dropdown.Item>
            <Dropdown.Item>User 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Aggrement start date</Form.Label>
        <Form.Control
          placeholder="Select start date"
          type="date"
          className="py-3"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Aggrement end date</Form.Label>
        <Form.Control
          placeholder="Select end date"
          type="date"
          className="py-3"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date of rent payment</Form.Label>
        <Form.Control
          placeholder="Select date of rent"
          type="date"
          className="py-3"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Deposite amount</Form.Label>
        <Form.Control
          placeholder="Enter deposit amount"
          type="number"
          className="py-3"
        />
      </Form.Group>
      <Button className="w-100 complementryBg border-0 py-2">Save</Button>
    </div>
  );
}

export default UserOnRent;
