import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_kh8jm9b', 'template_1w7oh4a', form.current, {
          publicKey: 'mIGne2SiNdoy2seuZ',
        })
        .then(
          () => {
            setEmail("");
            setName("");
            setMessage("");
            setSuccess("Message Sent Succesfully");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
    <div>
      <p className="text-cyan-400">{success}</p>
      <form 
        className="flex flex-col gap-4 text-white" 
        ref={form} 
        onSubmit={sendEmail}>
      <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-gray-500 px-2"
          value={name}
          onChange={handleName}
      />
      <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-gray-500 px-2"
          value={email}
          onChange={handleEmail}
      />
      <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-gray-500 p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan-500 text-white h-12 font-bold text-xl hover:bg-cyan-500 bg-cyan-300 transition-all duration-500"
        >Send
        </button> 
      </form>
    </div>
  );
};

export default ContactForm;