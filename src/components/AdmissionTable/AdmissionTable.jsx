import React from "react";
import { Link } from "react-router-dom";

const AdmissionTable = ({ colleges }) => {
    console.log(colleges);
  return (
    <tr>
      <th className="px-5 mx-5" colSpan={2}>{colleges.name}</th>
      <td colSpan={2}>{colleges.admissionDate}</td>
      
      <td>
        <Link className="text-decoration-none">
          <div className="btn btn-primary">Admission</div>
        </Link>
      </td>
    </tr>
  );
};

export default AdmissionTable;
