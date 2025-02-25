import React, { useState } from 'react';
import userStore from '../store/userStore';
import { Link } from 'react-router-dom';
const Form = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '' });
  const { createUser } = userStore();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData);
    setFormData({ name: '', mobile: '' });
  };

  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">User Form</h2>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="mobile"
          >
            Mobile No.
          </label>
          <input
            type="number"
            name="mobile"
            placeholder="Mobile No."
            value={formData.mobile}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-white leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
   <div>
   <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View all user</Link>
   </div>
     
    </div>
  );
};

export default Form;
