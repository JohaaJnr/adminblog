import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const Logo = () => {

  

  const updateData = (e) => {
    e.preventDefault();
    var siteName = e.target.title.value
    var options = {
      method: 'GET',
      url: `update_site_title/${siteName}`,
      headers: {
        'Access-Control-Allow-Headers' : '*'
       }
    }
    axios.request(options).then(function(response){
      console.log(response)
      alert(response.data.msg)
      window.location.reload(false);
    }).catch(function(error){
      console.error(error)
    })
  }

  const uploadForm = (e) => {
    e.preventDefault()
    var file = e.target.sitelogo.files[0]
    const formData = new FormData();
    console.error(file)
    formData.append('file', file)
   
      const res = axios.post('upload_logo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).catch(err=>{
        console.error(err)
      })
  }



 

  return (
   
      <div className="row mb-4 mt-3 mx-4">
        <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
          <h3 className="my-2">Update Site Logo</h3>
          <img src={ require('../../resources/img/team-3.jpg') } alt="profile_image" className="w-40 border-radius-lg shadow-sm" />
          <form onSubmit={uploadForm}>
  
                 {/* Update Site Logo */}
            <div className="input-group input-group-outline my-3">

            <input type="file" name="sitelogo"  />

            <div className='input-group input-group-outline my-3'>
              <button type="submit" className="btn btn-warning">Submit</button>
            </div>
              
            </div>
          </form>
          
        </div>
  
      </div>
    
  )
}

export default Logo