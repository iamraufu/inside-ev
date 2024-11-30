import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     // Validate form fields
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    toast.error("All fields are required.");
    return;
  }

    try {
      // Add form data to Firestore
      await addDoc(collection(db, "contacts"), {...formData, date: new Date(), type: "contact"});
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to send message, please try again.");
    }
  };

  return (
    <div id='contact' className="flex items-center justify-center min-h-[80dvh] bg-white ">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full px-6 pb-10 rounded max-w-[1100px] mx-auto">
        <h1 className="text-3xl font-semibold text-center text-black">Contact Us</h1>
        <div className="w-24 my-4 bg-amber-500 h-1.5 rounded-full mx-auto mb-8"></div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 text-sm gap-6">
            <div className="col-span-1">
              <label className="block text-black font-semibold mb-2" htmlFor="name">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-black font-semibold mb-2" htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-black font-semibold mb-2" htmlFor="message">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <div className="mt-6 ">
            <button
              className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
