import React, { useState } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";

const AdmissionForm = () => {

  const [candidateName, setCandidateName] = useState("");
  const [subject, setSubject] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [candidateImage, setCandidateImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <TopNavbar></TopNavbar>
      <div className="container">
        <h1 className="mb-4 text-center">Admission Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Candidate Name:</label>
            <input
              type="text"
              className="form-control my-2"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Subject:</label>
            <select
              className="form-control my-2"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              <option value="">Select a subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Commerce">Commerce</option>
            </select>
          </div>

          <div className="form-group">
            <label>Candidate Email:</label>
            <input
              type="email"
              className="form-control my-2"
              value={candidateEmail}
              onChange={(e) => setCandidateEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Candidate Phone Number:</label>
            <input
              type="tel"
              className="form-control my-2"
              value={candidatePhone}
              onChange={(e) => setCandidatePhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              className="form-control my-2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              className="form-control my-2"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Candidate Image:</label>
            <input
              type="file"
              className="form-control-file my-2"
              onChange={(e) => setCandidateImage(e.target.files[0])}
              accept="image/*"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
