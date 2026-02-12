import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import "./css/Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Contact CareMe</h2>
          <p>We are here to help you improve your health lifestyle.</p>

          <div className="info-box">
            <p>Email: support@careme.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Location: India</p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Message</h3>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
