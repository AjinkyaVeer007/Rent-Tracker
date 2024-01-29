import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="row g-0 justify-content-center">
      <div className="col-10 col-lg-4 col-md-5">
        <div className="fs-1 fw-bolder text-center mt-4">Register</div>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter your full name"
            type="text"
            className="py-3"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Enter email"
            type="email"
            className="py-3"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control
            placeholder="Enter mobile no."
            type="number"
            className="py-3"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Enter password"
            type="password"
            className="py-3"
          />
        </Form.Group>
        <Form.Check type="checkbox" label="Show Password" className="mb-3" />
        <Button className="w-100 py-3 primaryBg text-white border-0 mb-3">
          Register
        </Button>
        <div className="textDivider mb-2">or</div>
        <div className="mb-3">
          Already have an account ?{" "}
          <span onClick={() => navigate("/")} className="fw-medium pointer">
            Click to login
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
