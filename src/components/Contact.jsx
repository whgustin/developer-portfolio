import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or connect with me on LinkedIn!</p>
      <a href="/resume.pdf" download className="resume-button">
      Download Resume
      </a>
    </section>
  );
};

export default Contact;