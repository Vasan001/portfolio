import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="content">
        <div className="title">
          <span>About Me</span>
        </div>
        <div className="container">
          <div className="column">
            <h2>Know me!</h2>
            <p>
              I am Vasan, pursuing my final year under graduation at SRM Valliammai Engineering College 
              .Currently, My CGPA is 8.89/10. I have done projects on Deepfake Video Detection and Parking Management System using Deep Learning  and attended a conference for the parking System project. I also done a blog website using Django. I also collabratively done a community website using React JS and Postgresql.
              I had done internships in Feather Softwares for Python web development and in AK Info Park for front-end web development.
            </p>
          </div>
          <div className="column">
            <h2>Events Attended</h2>
            <p>
              I organized a website development Symposium event conducted by my department. 
              I participated in a National Seminar on Big Data and Smart
              Computing.I also presented a paper in a conference on Parking Management System.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
