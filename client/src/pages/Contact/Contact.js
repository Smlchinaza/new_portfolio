import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className=" contact-section">
        <div className="card contact-container border-0">
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
            <div className="col-lg-6 col-md-6">
              <div className="contact-form-wrapper board-0 px-4 py-3">
                <div className="row contact-form-container">
                  {/* Header */}
                  <div className="row form-header">
                    <h6>
                      Contact with{" "}
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                      <BsGithub color="black" size={30} className="ms-2" />
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </h6>
                  </div>

                  {/* Divider */}
                  <div className="row divider-container px-3 mb-4">
                    <div className="divider-line" />
                    <small className="divider-text text-center">OR</small>
                    <div className="divider-line" />
                  </div>

                  {/* Contact Form */}
                  <form className="row contact-form">
                    {/* Name Field */}
                    <div className="form-group px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="form-control mb-3"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="form-group px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="form-control mb-3"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="form-group px-3">
                      <textarea
                        name="message"
                        placeholder="Write your message"
                        className="form-control mb-3"
                        rows="4"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="form-group px-3">
                      <button type="submit" className="submit-button">
                        SEND MESSAGE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
