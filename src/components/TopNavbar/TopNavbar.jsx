import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./TopNavbar.css";
import { AuthContext } from "../../Providers/AuthProvider";

const TopNavbar = () => {
  const { logout, user } = useContext(AuthContext);

  const signOut = () => {
    logout();
  };
  console.log(user);

  return (
    <div className="d-flex bg-white-cus justify-content-around align-items-center py-3">
      <div className="fs-5">
        <img
          className="nav-img"
          src="https://media.istockphoto.com/id/1249802610/vector/college-educational-institute-school-icon-design.jpg?s=612x612&w=0&k=20&c=MRtthPKs4faM2wRhVZbaeydb0i98UkBcDm6GB4HOTa4="
          alt=""
        />
        College Booker
      </div>
      <div className="d-flex">
        <Link to="/" className="px-2 text-decoration-none text-black fs-5">
          Home
        </Link>
        <Link
          to="/colleges"
          className="px-2 text-decoration-none text-black fs-5"
        >
          Colleges
        </Link>
        <Link
          to="/admission"
          className="px-2 text-decoration-none text-black fs-5"
        >
          Admission
        </Link>
        <Link className="px-2 text-decoration-none text-black fs-5">
          My College
        </Link>
      </div>
      <div>
        {user ? (
          <div className="d-flex gap-4">
            <div>
              <img
                referrerPolicy="no-referrer"
                className="img-fluid user-img"
                src={user?.photoURL}
                alt="img"
              />
            </div>
            <div
              onClick={signOut}
              className="text-decoration-none d-flex align-items-center text-center btn btn-primary"
            >
              Logout
            </div>
          </div>
        ) : (
          <>
            <div>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNavbar;
