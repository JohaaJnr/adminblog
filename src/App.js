import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import Logo from './components/logo/Logo';
import Posts from './components/posts/Posts';
import Category from './components/category/Category';
import Title from './components/sitetitle/Title';
import Menu from './components/menus/Menu';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
    <div>
     <Sidebar />
     <div className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/site_logo' element={<Logo />} />
          <Route exact path='/site_title' element={<Title />} />
          <Route exact path='/posts' element={<Posts />} />
          <Route exact path='/categories' element={<Category />} />
          <Route exact path='/menus' element={<Menu />} />
        </Routes>
        <Footer />
     </div>
    </div>
    </Router>
  );
}

export default App;
