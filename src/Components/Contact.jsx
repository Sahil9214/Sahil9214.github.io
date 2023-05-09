import "../Styles/Contact.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "@chakra-ui/react";
import mail from "../Images/mail.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import phone from "../Images/phone.png";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3734n0f",
        "portfolio_1template",
        form.current,
        "l6cIlK8OhPONSDTA8"
      )
      .then((result) => {
        console.log(result.text);

        toast({
          title: "Thank you!",
          description: "We've recieved your mail.",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((error) => {
        console.log(error.text);
      });

    form.current.reset();
  };

  return (
    <div id="contact" className="nav-link contact">
      <div className="top-sec">
        {/* Heading */}
        <div className="contact-name">
          <span className="dash"></span>
          <h2 className="contact_heading">Contact Me</h2>
          <span className="dash"></span>
        </div>
        <p className="PleaseDrop">
          😊 Please Drop a message, let's connect, will reach out as soon as
          possible.
        </p>
      </div>
      {/* Contact */}
      <div className="contactContainer" style={{ marginTop: "80px" }}>
        <div className="contact-section1">
          <div>
            <h3>My Info:</h3>
            <h3>
              <img className="iconsImages" src={mail} alt="" />:
              <Link
                id="contact-email"
                href=""
                target="_blank"
                className="contact-email"
              >
                utkarshsinghal369@gmail.com
              </Link>
            </h3>
            <h3 id="contact-phone" className="contact-phone">
              {" "}
              <img className="iconsImages" src={phone} alt="" /> :
              +91-9214553881
            </h3>
          </div>
          <div>
            <img className="iconsImages" src={linkedin} alt="" />
            <h3>LinkedIn</h3>
            <Link className="contact-linkedin">Send a message</Link>
          </div>
          <div>
            <img className="iconsImages" src={twitter} alt="" />
            <h3>Twitter</h3>
            <Link contact-github>Send a message</Link>
          </div>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />

          <input type="email" name="email" placeholder="Email" required />

          <textarea name="message" placeholder="Message . . ." required />
          <input type="submit" value="Send" required />
        </form>
      </div>
    </div>
  );
};

export default Contact;
