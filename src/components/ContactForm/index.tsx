import React from "react";
import "./style.css";

function ContactForm() {
  return (
    <div id="Contact" className="form-container">
      <div className="form">
        <h5 className="heading">Get in touch</h5>
        <p className="my-2 text-md">
          We&#39;re here to answer your queries, provide information, and
          explore collaborative opportunities. Connect with us to unlock the
          potential of pharmaceutical excellence and holistic well-being.
        </p>
        <p className="mb-5 text-md">
          Feel free to reach out with any questions, inquiries, or partnership
          possibilities. Our team is ready to assist you on your journey to
          success in the pharmaceutical and nutritional industries.
        </p>
        <input placeholder="Name" type="text" className="input" />
        <input placeholder="Email" id="mail" type="email" className="input" />
        <input placeholder="Subject" id="mail" type="email" className="input" />
        <textarea
          placeholder="Inquiry"
          id="message"
          name="message"
          className="textarea"
          rows={6}
        ></textarea>
        <div className="button-container">
          <button className="w-full btn-space">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
