import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id='contact' className="flex items-center justify-center min-h-[80dvh] bg-white ">
      <div className="w-full px-6 py-10 rounded-lg max-w-[1300px] mx-auto">
        <h1 className="text-3xl font-semibold text-center text-black mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block text-black font-semibold mb-2" htmlFor="name">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <div className="mt-6 ">
            <button
              className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300"
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
