import React from "react";
import "./ResearchSection.css";
import { Link } from "react-router-dom";

const ResearchSection = () => {
  return (
    <div>
      <div className="fs-2 text-center py-3">
        Student Research Papers and Publications
      </div>
      <div className="row mx-3">
        <div className="border-cus col-6">
          <img
            className="img-fluid rounded"
            src="https://media.istockphoto.com/id/1398473177/photo/questionnaire-with-checkboxes-filling-survey-form-online-answer-questions.jpg?s=612x612&w=0&k=20&c=sgZY6ojUqB0goVyn_9fKLfeyZ6lyWjSb3-FQjgeUPec="
            alt=""
          />
          <div className="research-title">
            Social Media and Adolescent Mental Health
          </div>
          <div className="research-subtitle">
            Social Media and Adolescent Mental Health: Understanding the Effects
            on Well-being and Identifying Protective Factors
          </div>
          <Link
            to="https://arxiv.org/pdf/1406.2661.pdf%22%7D"
            target="_blank"
            className="btn btn-primary w-100"
          >
            see more
          </Link>
        </div>
        <div className="border-cus col-6">
          <img
            className="img-fluid rounded"
            src="https://media.istockphoto.com/id/1395657542/photo/in-a-futuristic-laboratory-a-scientist-with-a-pipette-analyzes-a-colored-liquid-to-extract.jpg?s=612x612&w=0&k=20&c=kWGN9q5gDfD-h3_9WMnxOV9PwBsW5-t-0lFfnwtWKTY="
            alt=""
          />
          <div className="research-title">
            Climate Change and Biodiversity: A Global Meta-analysis
          </div>
          <div className="research-subtitle">
            Climate Change and Biodiversity: A Comprehensive Global
            Meta-analysis Assessing Environmental Impacts
          </div>
          <Link
            to="https://arxiv.org/pdf/1406.2661.pdf%22%7D"
            target="_blank"
            className="btn btn-primary w-100"
          >
            see more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
