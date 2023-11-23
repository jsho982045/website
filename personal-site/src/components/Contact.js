import React from 'react';
import '../styles/Contact.css';


function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Include your email, LinkedIn profile, or other contact information here.</p>
      <div className="gmail-icon">
      {/* Gmail Icon */}
      <a href="mailto:jackshomer98@gmail.com" target="_blank">
        <img src="gmailIcon2.png" alt="Gmail" />
      </a>
      </div>
      <div className="linkedin-icon">
      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/jack-shomer-067123266/" target="_blank">
        <img src="linkedin.png" alt="LinkedIn" />
        </a>
        </div>
        <div className="github-icon">
        {/* GitHub Icon */}
        <a href="https://github.com/jsho982045" target="_blank">
        <img src="githubIcon.png" alt="GitHub" />
        </a>
        </div>
    </section>
  );
}

export default Contact;
