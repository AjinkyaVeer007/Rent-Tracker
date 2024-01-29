import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="row g-0 justify-content-center">
      <div className="col-10 col-lg-4 col-md-5">
        <div className="fs-1 fw-bolder text-center mt-4">Login</div>
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
        <div className="d-flex align-items-center justify-content-between mb-3">
          <Form.Check type="checkbox" label="Show Password" />
          <div className="fw-medium pointer">Forget Password</div>
        </div>
        <Button
          onClick={() => navigate("/main/dashboard")}
          className="w-100 py-3 primaryBg text-white border-0 mb-3"
        >
          Login
        </Button>
        <div className="textDivider mb-2">or</div>
        <div className="mb-3">
          Dont't have an account ?{" "}
          <span
            onClick={() => navigate("/register")}
            className="fw-medium pointer"
          >
            Click to register
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
