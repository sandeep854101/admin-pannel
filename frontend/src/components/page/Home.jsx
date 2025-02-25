import React, { use } from 'react';
import { Link } from 'react-router-dom';
import userStore from '../store/userStore';

const Home = () => {
  const {users}=userStore();
  const boxes = users;
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/form"  className="bg-gray-800 rounded shadow p-6 flex flex-col items-center">
        <div
             className="w-16 h-16 mb-4 rounded-full text-4xl text-white bg-blue-400 flex items-center justify-center"
            >
              +
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Add New User</h3>
            <p className="text-gray-300 mb-4">Add a new user to the list</p>
            <div 
              
              className="text-blue-400 hover:text-blue-600 font-medium"
            >
              Add User
            </div>

        </Link>
        {boxes.map((box,index) => (
          <div key={index} className="bg-gray-800 rounded shadow p-6 flex flex-col items-center">
            <div
             className="w-16 h-16 mb-4 rounded-full text-4xl text-white bg-blue-400 flex items-center justify-center"
            >
              {box.name.charAt(0)}
            </div>
            <h3 className="text-white text-xl font-bold mb-2">{box.name}</h3>
            <p className="text-gray-300 mb-4">{box.mobile}</p>
            <Link 
              to={`/details/${box.id}`} 
              className="text-blue-400 hover:text-blue-600 font-medium"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
