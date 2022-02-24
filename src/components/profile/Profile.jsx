import React from 'react'

const Profile = () => {
  return (
    <div className="container-fluid px-2 px-md-4 mb-5">
    <div className="page-header min-height-300 border-radius-xl mt-4" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`}} >
      <span className="mask  bg-gradient-primary  opacity-6"></span>
    </div>
    <div className="card card-body mx-3 mx-md-4 mt-n6">
      <div className="row gx-4 mb-2">
        <div className="col-auto">
          <div className="avatar avatar-xl position-relative">
            <img src={ require('../../resources/img/team-3.jpg') } alt="profile_image" className="w-100 border-radius-lg shadow-sm" />
          </div>
        </div>
        <div className="col-auto my-auto">
          <div className="h-100">
            <h5 className="mb-1">
             ATL Admin
            </h5>
            <p className="mb-0 font-weight-normal text-sm">
              CEO 
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
          <div className="nav-wrapper position-relative end-0">
            <ul className="nav nav-pills nav-fill p-1" role="tablist">
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1 active " data-bs-toggle="tab" href="#" role="tab" aria-selected="true">
                  <i className="material-icons text-lg position-relative">home</i>
                  <span className="ms-1">Phone: 01677497966</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="#" role="tab" aria-selected="false">
                  <i className="material-icons text-lg position-relative">email</i>
                  <span className="ms-1">Email: connect@ayaantech.com.bd</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1 " data-bs-toggle="tab" href="#" role="tab" aria-selected="false">
                  <i className="material-icons text-lg position-relative">settings</i>
                  <span className="ms-1">Address: Dhaka, Bangladesh</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        
      </div>
    </div>
  </div>
  )
}

export default Profile