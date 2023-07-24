import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopNavbar from "../TopNavbar/TopNavbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);

    signIn(email, password)
      .then(() => {
        toast("Welcome Back !!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      toast.success("Login Successful");

      // TODO: Connect to the server
      // fetch("https://assgignment-12-server.vercel.app/all-users", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(saveUser),
      // })
      // .then((res) => res.json())
      // .then(() => {
      //   console.log("from", from);
      //   navigate(from, { replace: true } || "/");
      // });
      navigate(from, { replace: true } || "/");
    });
  };

  return (
    <div>
      <TopNavbar></TopNavbar>
      <div className="display-5 text-center pt-4">Login Your Account</div>
      <hr className="w-50 pb-4 mx-auto text-secondary" />
      <div>
        <Form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto pe-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              {...register("email")}
              required
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <div>
              <Form.Control
                type="password"
                {...register("password")}
                required
                placeholder="Password"
              />
            </div>
          </Form.Group>
          <br />
          <Button className="w-100 bg-primary my-3" type="submit">
            Login
          </Button>
          <div className="text-center">--------- or ----------</div>
          <Button
            onClick={handleGoogleSignIn}
            className="w-100 bg-primary my-3"
            type="submit"
          >
            Login with Google
            <FaGoogle className="ms-1"></FaGoogle>
          </Button>
          <div className="text-center">--------- or ----------</div>
          <Button
            className="w-100 bg-primary my-3"
            type="submit"
          >
            Login with Facebook
            <FaFacebook className="ms-1"></FaFacebook>
          </Button>
          <div className="text-center">
            Dont have an account? Please {" "}
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
