import React from "react";

const Certifications = () => {
  return (
    <section className="services" id="services">
      <div className="content">
        <div className="title">
          <span>Certifications</span>
        </div>
        <div className="boxes">
          {/* Certification 1 */}
          <div className="box">
            <a href="https://drive.google.com/file/d/1uYcH1CXXaU8rScC7hF2etvAaTRdrN_Aa/view?usp=drivesdk">
              <div className="icon">
                <i className="fas fa-atom" style={{ paddingLeft: '10px' }}></i>
              </div>
              <div className="topic">Data Science</div>
              <p>
                I Completed python for Data Science course from NPTEL.
              </p>
            </a>
          </div>

          {/* Certification 2 */}
          <div className="box">
            <a href="https://drive.google.com/file/d/1HgULgpf5yqgKGfA2Wa65zGCmCGQNqP6m/view?usp=drivesdk">
              <div className="icon">
                <i className="fas fa-code" style={{ paddingLeft: '10px' }}></i>
              </div>
              <div className="topic">Django</div>
              <p>
                I completed the course "Python and Django Framework" from Udemy.
              </p>
            </a>
          </div>

          {/* Certification 3 */}
          <div className="box">
            <a href="https://coursera.org/share/432a963ab855bb7069afb040f603cd75">
              <div className="icon">
                <i className="fas fa-robot" style={{ paddingLeft: '10px' }}></i>
              </div>
              <div className="topic">Machine Learning</div>
              <p>
                I completed the "Machine Learning with Python" course from
                Coursera.
              </p>
            </a>
          </div>

          {/* Certification 4 */}
          <div className="box">
            <a href="https://drive.google.com/file/d/1fsGX1nbn0xNndmQJHYKimEm0iY5OejFq/view?usp=drivesdk">
              <div className="icon">
                <i className="fas fa-atom" style={{ paddingLeft: '10px' }}></i>
              </div>
              <div className="topic">MySQL</div>
              <p>
                I completed an MySQL from Beginner to Expert in Udemy.
              </p>
            </a>
          </div>

          {/* Certification 5 */}
          <div className="box">
            <a href="https://www.guvi.in/verify-certificate?id=2c1Ge886W8I3CV1474">
              <div className="icon">
                <i className="fas fa-code" style={{ paddingLeft: '10px' }}></i>
              </div>
              <div className="topic">Python</div>
              <p>
                I learned Basic to Advanced Level of Python from Guvi .
              </p>
            </a>
          </div>

          {/* Certification 6 */}
          <div className="box">
            <a href="https://drive.google.com/file/d/1k4srOJHsWBkYTST8_9toBrvh7nE9hIrY/view?usp=drivesdk">
              <div className="icon">
                <i className="fas fa-code" style={{ paddingLeft: '10px' }}></i>
              </div>
              <div className="topic">Python Programming</div>
              <p>
                I completed a Python course in Computer Software College (CSC).
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
