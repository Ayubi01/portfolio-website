// src/components/Contact.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // The keys mentioned here will remain live until assignment evaluation only!!
    emailjs.sendForm(
      'service_u43203k', 
      'template_ioj2mg8',
      form.current,
      '5CJS2jr8j5Zugkjvt'
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Something went wrong: " + error.text);
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10" data-aos="fade-up">Contact Me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-lg mx-auto text-left space-y-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white"
          />
          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
