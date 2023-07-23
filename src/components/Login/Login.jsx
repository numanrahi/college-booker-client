import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopNavbar from "../TopNavbar/TopNavbar";

const Login = () => {
  return (
    <div>
        <TopNavbar></TopNavbar>
      <div className="display-5 text-center pt-4">Login Your Account</div>
      <hr className="w-50 pb-4 mx-auto text-secondary" />
      <div>
        <Form
          //  onSubmit={handleSubmit(onSubmit)}
          className="w-50 mx-auto pe-5"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              // {...register("email")}
              required
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div className="password-input-container">
              <Form.Control
                //   type={showPassword ? "text" : "password"}
                //   {...register("password")}
                required
                placeholder="Password"
              />
              {/* <span
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FiEyeOff className="password-icon" />
                  ) : (
                    <FiEye className="password-icon" />
                  )}
                </span> */}
            </div>
          </Form.Group>
          <br />
          <Button className="w-100 bg-color my-3" type="submit">
            Login
          </Button>
          <div className="text-center">--------- or ----------</div>
          <Button
            //   onClick={handleGoogleSignIn}
            className="w-100 bg-color my-3"
            type="submit"
          >
            Login with Google
            {/* <FaGoogle className="ms-1"></FaGoogle> */}
          </Button>
          <div className="text-center">
            Dont have an account? Please{" "}
            <Link to="/register" className="text-danger text-decoration-none">
              Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
