import React, { useState } from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/samuel500/",
    github: "https://github.com/Smlchinaza",
    facebook: "https://www.facebook.com/chinaza.samuel.37"
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      {/* <div className=" contact-section" > */}
      <div className="card contact-container border-0" id="contact">
        <div className="row">
          {/* Left side - Image */}
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="contact-image-container">
              <div className="row image-wrapper border-line">
                <img
                  src="https://github.com/Smlchinaza/new_portfolio/blob/main/client/src/assets/images/contact.jpg?raw=true"
                  alt="Contact us illustration"
                  className="contact-image"
                />
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="contact-form-wrapper board-0 px-4 py-3">
              <div className="row contact-form-container">
                {/* Header */}
                <div className="row form-header">
                  <h6>
                    Contact with{" "}
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                    </a>
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
                      <BsGithub color="black" size={30} className="ms-2" />
                    </a>
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </a>
                  </h6>
                </div>

                {/* Divider */}
                <div className="row divider-container px-3 mb-4">
                  <div className="divider-line" />
                  <small className="divider-text text-center">OR</small>
                  <div className="divider-line" />
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="form-group px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className={`form-control mb-1 ${errors.name ? 'is-invalid' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  {/* Email Field */}
                  <div className="form-group px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className={`form-control mb-1 ${errors.email ? 'is-invalid' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  {/* Message Field */}
                  <div className="form-group px-3">
                    <textarea
                      name="message"
                      placeholder="Write your message"
                      className={`form-control mb-1 ${errors.message ? 'is-invalid' : ''}`}
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>

                  {/* Status Message */}
                  {status === "success" && (
                    <div className="alert alert-success mx-3">
                      Message sent successfully!
                    </div>
                  )}
                  {status === "error" && (
                    <div className="alert alert-danger mx-3">
                      Failed to send message. Please try again.
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="form-group px-3">
                    <button 
                      type="submit" 
                      className="submit-button"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending..." : "SEND MESSAGE"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
