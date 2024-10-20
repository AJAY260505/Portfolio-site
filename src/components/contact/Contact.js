import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    // Reset error/success messages
    setErrMsg("");
    setSuccessMsg("");

    // Get form data
    const formData = new FormData(e.target);
    
    // Validate form data
    const username = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!username || !email || !subject || !message) {
      setErrMsg("All fields are required!");
      return;
    }

    // Optionally, validate email format
    const emailValidation = () => {
      return String(email)
        .toLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    if (!emailValidation()) {
      setErrMsg("Give a valid Email!");
      return;
    }

    // If all validations pass, proceed with submission
    setSuccessMsg(`Thank you dear ${username}, Your message has been sent successfully!`);

    // Reset form fields after successful submission
    e.target.reset();
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="flex flex-col justify-between w-full h-auto lgl:flex-row">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              action="https://formspree.io/f/xkgwnpza" // Update this with your Formspree endpoint
              method="POST"
              onSubmit={handleSend}
              className="flex flex-col gap-4 py-2 w-full lgl:gap-6 lgl:py-5"
            >
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="flex flex-col gap-10 w-full lgl:flex-row">
                <div className="flex flex-col gap-4 w-full lgl:w-1/2">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">Your name</p>
                  <input
                    name="name"
                    className="contactInput"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-4 w-full lgl:w-1/2">
                  <p className="text-sm tracking-wide text-gray-400 uppercase">Phone Number</p>
                  <input
                    name="phone"
                    className="contactInput"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">Email</p>
                <input
                  name="email"
                  className="contactInput"
                  type="email"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">Subject</p>
                <input
                  name="subject"
                  className="contactInput"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm tracking-wide text-gray-400 uppercase">Message</p>
                <textarea
                  name="message"
                  className="contactTextArea"
                  cols="30"
                  rows="8"
                  required
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
