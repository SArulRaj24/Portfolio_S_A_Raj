import React, { useState } from 'react';
import { Element } from 'react-scroll';
import './Contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/SendSharp';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Element className='contact' id='contact'>
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">
            Get in touch with me for any queries or just to say hi!
          </p>

          <form
            action="https://formspree.io/f/xldndabv" // 🔁 Replace with your actual Formspree form ID
            method="POST"
            className="contact-form"
            onSubmit={() => setSubmitted(true)}
          >
            <div className="form-group">
              <label htmlFor="email" className="form-label">Your email</label>
              <input
                type="email"
                id="email"
                name="email" // ✅ Formspree requires "email"
                className="form-input"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Let us know..."
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message" className="form-label">Your message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="form-input"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send message</button>

            {/* ✅ Success message */}
            {submitted && (
              <p className="success-message">Thanks! Your message has been sent.</p>
            )}
          </form>

          <div className="contact-links">
            <a href="https://github.com/SArulRaj24" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/arulraj-s-b-tech/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href="mailto:sarulrajoffcial@gmail.com" target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
