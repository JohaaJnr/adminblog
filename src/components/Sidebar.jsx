import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a className="navbar-brand m-0" to=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
        <img src={require('../resources/img/logo-ct.png')} className="navbar-brand-img h-100" alt="main_logo" />&ensp;
        <span className="ms-1 font-weight-bold text-white">React Blog Admin</span>
      </a>
    </div>
    <hr className="horizontal light mt-0 mb-2" />
    <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
    <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/" >
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">dashboard</i>
            </div>
            <span className="nav-link-text ms-1">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link text-white " to="/site_logo">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">table_view</i>
            </div>
            <span className="nav-link-text ms-1">Site Logo</span>
          </Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link text-white " to="/site_title">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">table_view</i>
            </div>
            <span className="nav-link-text ms-1">Site Title</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="/posts">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">receipt_long</i>
            </div>
            <span className="nav-link-text ms-1">Posts</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="/categories">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">view_in_ar</i>
            </div>
            <span className="nav-link-text ms-1">Categories</span>
          </Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-white " to="/menus">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">table_view</i>
            </div>
            <span className="nav-link-text ms-1">Menus</span>
          </Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-white " to="/profile">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">person</i>
            </div>
            <span className="nav-link-text ms-1">Profile</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white " to="/logout">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">login</i>
            </div>
            <span className="nav-link-text ms-1">Sign Out</span>
          </Link>
        </li>
      
      </ul>
    </div>
    
  </aside>
  )
}

export default Sidebar