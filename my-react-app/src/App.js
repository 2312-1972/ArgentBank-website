import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import User from './pages/user';
import SignIn from './pages/signIn';
import Header from './components/header';
import Footer from './components/footer';
import EditUser from './pages/editUser'
import './main.css';

function App  ()  {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/editUser" element={<EditUser />} />
        <Route path="/checkTransac" element={<checkTransaction />} />
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
