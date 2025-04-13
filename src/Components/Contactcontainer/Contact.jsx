import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Element } from 'react-scroll';
import './Contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8pg8wts', // Replace with your EmailJS service ID
        'template_ugrhe55', // Replace with your EmailJS template ID
        form.current,
        'I1NuimQfLi8EkRmKi' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Error: ' + JSON.stringify(error));
        }
      );
  };

  return (
    <Element className='contact' id='contact'>
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Get a touch with me for any queries or just to say hi!
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Your email</label>
            <input type="email" id="email" name="user_email" className="form-input" placeholder="name@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" id="subject" name="user_subject" className="form-input" placeholder="Let us know..." required />
          </div>
          <div className="form-group full-width">
            <label htmlFor="message" className="form-label">Your message</label>
            <textarea id="message" name="message" rows="6" className="form-input" placeholder="Leave a comment..." required></textarea>
          </div>
          <button type="submit" className="submit-button">Send message</button>
        </form>

         <div className="contact-links">
          <a href="https://github.com/SArulRaj24" target="_blank" rel="noopener noreferrer">
            <GitHubIcon/>
          </a>
          <a href="https://www.instagram.com/s_a_raj_forever/" target="_blank" rel="noopener noreferrer">
          < InstagramIcon/>
          </a>
          <a href="https://www.linkedin.com/in/arulraj-s-b-tech/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon/>
          </a>
        </div>


      </div>
    </section>
    </Element>
  );
};

export default Contact;