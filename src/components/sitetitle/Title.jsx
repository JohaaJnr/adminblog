import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'


const Title = () => {

const updatetitle = (e) => {
    e.preventDefault()
    const sitename = e.target.title.value
    var options = {
        method: 'GET',
        url: `update_title/${sitename}`
    }
    axios.request(options).then(res=>{
        alert(res.data.msg)
        window.location.reload(false);
    }).catch(err=>{
        console.error(err)
    })
}



  return (
    <div className="row mb-4 mt-3 mx-4">
        <div className='col-lg-8 col-md-6 mb-md-0 mb-4'>
           
        <form onSubmit={updatetitle}>
            <h3 className="my-2">Update Site Title</h3>
            <div className="input-group input-group-outline my-3">
            <input type="text" name='title'  className="form-control" />
            
            </div>
            <div className="input-group input-group-outline my-3">
  
            <button type="submit" className="btn btn-warning" >Update</button>
          </div>
          </form>
        </div>
    </div>
  )
}

export default Title