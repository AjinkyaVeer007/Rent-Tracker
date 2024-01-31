import React from "react";
import { Button, Form } from "react-bootstrap";

function TenantForm() {
  return (
    <>
      <div className="fw-bold fs-2 mb-3 primaryColor">Tenant Details</div>
      <Form.Group className="mb-3">
        <Form.Label>Tenant Name</Form.Label>
        <Form.Control placeholder="Enter name" type="text" className="py-3" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tenant Mobile No.</Form.Label>
        <Form.Control
          placeholder="Enter mobile no."
          type="number"
          className="py-3"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tenant email</Form.Label>
        <Form.Control placeholder="Enter email" type="email" className="py-3" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Permanant Address</Form.Label>
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

export default TenantForm;
