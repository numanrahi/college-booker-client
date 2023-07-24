import React, { useEffect, useState } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
import AdmissionTable from "../AdmissionTable/AdmissionTable";
import Footer from "../Footer/Footer";

const Admission = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://college-booker-server-ten.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div>
      <TopNavbar></TopNavbar>
      <div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th className="px-5 mx-5" colSpan={2} scope="col">
                College Name
              </th>
              <th colSpan={2} scope="col">
                Admission Date
              </th>
              <th scope="col">Apply</th>
            </tr>
          </thead>
          <tbody>
            <>
              {colleges.map((colleges) => (
                <AdmissionTable
                  key={colleges.id}
                  colleges={colleges}
                ></AdmissionTable>
              ))}
            </>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Admission;
