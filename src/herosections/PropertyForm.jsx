import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap";

function PropertyForm() {
  return (
    <>
      <div className="fw-bold fs-2 mb-3 primaryColor">Property Details</div>
      <Form.Group className="mb-3">
        <Form.Label>Property Type</Form.Label>
        <Dropdown className="border w-100 text-start rounded py-2">
          <Dropdown.Toggle variant="white">Select type</Dropdown.Toggle>

          <Dropdown.Menu className="w-100">
            <Dropdown.Item>Residental</Dropdown.Item>
            <Dropdown.Item>Corporate Office</Dropdown.Item>
            <Dropdown.Item>Commercial</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Property Name</Form.Label>
        <Form.Control placeholder="Enter name" type="text" className="py-3" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Property Address</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter address"
          type="text"
          className="py-3"
        />
      </Form.Group>
      <Button className="w-100 complementryBg border-0 py-2">Save</Button>
    </>
  );
}

export default PropertyForm;
