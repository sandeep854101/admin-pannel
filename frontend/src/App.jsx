import React, { useEffect } from 'react';
import Home from './components/page/Home';
import Form from './components/page/Form';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/common/SideBar';
import Admin from './components/Admin/Admin';
import userStore from './components/store/userStore';

const App = () => {
  const { users, fetchUsers } = userStore();

  useEffect(() => {
    fetchUsers();

    const interval = setInterval(() => {
      fetchUsers();
    }, 60*1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [fetchUsers]);

  

  return (
    <div className="flex">
      <div className="w-1/5">
        <SideBar />
      </div>
      <div className="w-4/5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/details/:id" element={<Form />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
