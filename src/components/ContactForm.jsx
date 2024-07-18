import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!process.env.REACT_APP_EMAILJS_USER_ID || !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || !process.env.REACT_APP_EMAILJS_SERVICE_ID) {
    //   console.error('EmailJS environment variables are not configured correctly.');
    //   return;
    // }
    
    emailjs.sendForm(
      'service_pwe5sq1', 'template_kxux01h', e.target, 'Mu0WJI-pqHzx3fKY0'
    )
    .then((response) => {
      toast.success('Message sent successfully!');
    }, (error) => {
      toast.error('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="max-w-xl w-full mx-auto bg-white p-6 rounded-md shadow-md" id='contact'>
      <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-sky-600 text-white rounded-md hover:bg-sky-950 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;