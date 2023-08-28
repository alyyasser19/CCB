import React, { useState } from "react";
import "./style.css";

function sendEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  const mailtoLink = `mailto:Yasser.hegazy@c-c-b-egypt.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;
  window.location.href = mailtoLink;
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    sendEmail(name, email, subject, message);
  };

  return (
    <div className="form-container">
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
        <input
          placeholder="Name"
          type="text"
          className="input"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="Email"
          type="email"
          className="input"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Subject"
          type="text"
          className="input"
          value={subject}
          onChange={handleSubjectChange}
        />
        <textarea
          placeholder="Inquiry"
          className="textarea"
          rows={6}
          value={message}
          onChange={handleMessageChange}
        ></textarea>
        <div className="button-container">
          <button className="w-full btn-space" onClick={handleSendClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
