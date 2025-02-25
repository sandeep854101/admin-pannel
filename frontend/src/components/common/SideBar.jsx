import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className=" h-screen bg-gray-800 text-white p-4 flex flex-col space-y-4">
            <h2 className="text-xl font-bold text-center">Dashboard</h2>
            <nav className="flex flex-col space-y-2">
                <Link to="/" className="p-2 rounded hover:bg-gray-700 transition">🏠 Home</Link>
                <Link to="/form" className="p-2 rounded hover:bg-gray-700 transition">📝 Form</Link>
                <Link to="/admin" className="p-2 rounded hover:bg-gray-700 transition">🏠 Admin</Link>
            </nav>
        </div>
    );
};

export default SideBar;
