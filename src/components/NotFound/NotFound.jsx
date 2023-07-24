import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="display-3 text-center py-3">Opps! Page not found</div>
      <div className="text-center p-3">
        <img
          className="rounded-5"
          src="https://media.istockphoto.com/id/155597883/photo/error-message.webp?b=1&s=170667a&w=0&k=20&c=4HbRRa1UbQw592Ex57rV45dNxjX_sh-F-5qxOyEXmLw="
          alt=""
        />
      </div>
      <div className="text-center">
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;