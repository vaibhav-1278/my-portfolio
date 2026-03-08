import React from "react";
import emailjs from "@emailjs/browser";
import '../css/Contact.css';
import { useRef } from "react";

export default function Contact(){
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4fh8mr",   // Replace with your EmailJS service ID
        "template_18h80bj",  // Replace with your EmailJS template ID
        form.current,
        "LdNDUaAY-FE796bEQ"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };
    return(
         <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new opportunities and interesting projects.<br />
          Let's connect!
        </p>

        <div className="row contact-wrapper">
          {/* LEFT SIDE */}
          <div className="col-lg-5">
            <h5 className="contact-heading">Contact Information</h5>

            <div className="contact-card">
              <i className="fa-solid fa-phone"></i>
              <div>
                <h6>Phone</h6>
                <p>7083491278</p>
              </div>
            </div>

            <div className="contact-card">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h6>Email</h6>
                <p>
                  <a href="mailto:vaibhavgarad556@gmail.com">vaibhavgarad556@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h6>Location</h6>
                <p>Pune, Maharashtra</p>
              </div>
            </div>

            <div className="follow">
              <h6>Follow Me</h6>
              <div className="social-icons">
                <a href="https://github.com/vaibhav-1278"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/vaibhav-garad-10073532b/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:vaibhavgarad556@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                <a href="https://wa.me/+917083491278?text=Hello%Vaibhav Garad%20I%20want%20to%20connect%20with%20you" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-lg-7 mt-4">
            <div className="contact-form">
              <h5>Send Me a Message</h5>
              <p className="form-text">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder="Your full name" className="form-control" required />
                <input type="email" name="from_email" placeholder="your.email@example.com" className="form-control" required />
                <textarea name="message" placeholder="Tell me about your project or inquiry..." className="form-control" required></textarea>
                <button type="submit" className="send-btn">
                  <i className="fa-regular fa-paper-plane"></i> Send Message
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
    )
}