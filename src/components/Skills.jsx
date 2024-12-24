import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="content">
        <div className="title">
          <span>My Skills</span>
        </div>
        <div className="skills-details">
          <div className="text">
            <div className="topic">Skills Reflect Our Knowledge</div>
            <p>
              I had solved 300+ problems in Leetcode and Geeksforgeeks using C++. I completed a NPTEL Certification on Python for Data Science course.I completed Machine Learning and Javascript course from IBM.
              I also completed Django, React JS,and MySQL from Udemy.
            </p>
          </div>
          <div className="boxes">
          <div className="box">
              <div className="topic">C++</div>
              <div className="per">90%</div>
            </div>
            <div className="box">
              <div className="topic">Python</div>
              <div className="per">80%</div>
            </div>
            
            <div className="box">
              <div className="topic">HTML, CSS, Javascript</div>
              <div className="per">80%</div>
            </div>
            <div className="box">
              <div className="topic">Java</div>
              <div className="per">60%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
