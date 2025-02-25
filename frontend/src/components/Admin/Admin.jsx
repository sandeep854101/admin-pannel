import React, { useState } from 'react';
import userStore from '../store/userStore';
const Admin = () => {
  // Sample data for users
  const {users}=userStore();
  // console.log(users)
  const boxes = users;
  

  // Table component for user list
  const ProductsTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(boxes);

    // Filter the list of users based on the search term
    const handleSearch = (e) => {
      const term = e.target.value.toLowerCase();
      setSearchTerm(term);
      const filtered = boxes.filter(
        (product) => product.name.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    };

    return (
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-100">User List</h2>
          <input
            type="text"
            placeholder="Search users..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg px-2 pl-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  S.No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Mobile Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredProducts.map((product, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      {product.name.charAt(0)}
                    </span>
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {product.mobile}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 flex gap-2">
                    <button className="text-blue-500 hover:text-blue-400">
                      Edit
                    </button>
                    <button className="text-red-500 hover:text-red-400">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              
            
            </tbody>
            
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl text-white font-bold mb-8">Admin Dashboard</h1>
      <ProductsTable />
    </div>
  );
};

export default Admin;
