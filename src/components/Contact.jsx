import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="content">
        <div className="title">
          <span>Contact Me</span>
        </div>
        <div className="text">
          {/* Address Section */}
          <div className="topic">Address</div>
          <p>
            17/32, Sannathy St, Ganapathipuram & Post, Kanyakumari District
            629502
          </p>

          {/* Contact Section */}
          <div className="topic">Contact</div>
          <p>
            <i className="fa fa-envelope" style={{ fontSize: "20px" }}></i> 
            <a href="mailto:vasan.kumar.j@gmail.com">vasan.kumar.j@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-phone"></i>+91 8825674340
          </p>

          {/* Follow Section */}
          <div className="topic">Follow </div>
       {/*   <a
            href="https://www.linkedin.com/in/k-j-vasan-ab3924236"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" style={{ fontSize: "24px" }}></i>
          </a>*/}
          <a
        href="https://www.linkedin.com/in/k-j-vasan-ab3924236"
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn"
          style={{ width: '24px', height: '24px' }}
        />
      </a>
          <a
              href="https://leetcode.com/u/vasankj/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "15px" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/vasankj2k1zx/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "15px" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                alt="GFG"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a href="https://github.com/Vasan001" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "15px" }}>
  <i class="fab fa-github"style={{fontSize:"28px"}} ></i>
</a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
