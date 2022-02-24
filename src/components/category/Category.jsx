import React from 'react'
import axios from 'axios'
const Category = () => {

const updatecategory = (e) =>{
    e.preventDefault()
    const categoryname = e.target.catname.value;
    var options = {
        method: 'GET',
        url: `addcategory/${categoryname}`

    }
    axios.request(options).then((res)=>{
        alert(res.data.msg);
        window.location.reload(false);
    }).catch(err=>{
        console.error(err)
    })
}

  return (
      <div>
          <h1 className="mx-4 mb-2">Create New Category</h1>
          <form className="mx-4 mb-5" onSubmit={updatecategory} >

              <div className="input-group input-group-outline my-3">

                  <label className="form-label">Add a new category</label>
                  <input type="text" name='catname' className="form-control" />
              </div>
              <button type="submit" className="btn btn-warning" >Save</button>
          </form>
          <ul className=" mt-5 mb-3 mx-5 list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                      Cras justo odio
                      <button type="button" className="btn-close bg-secondary" data-bs-dismiss="alert"></button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                      Dapibus ac facilisis in
                     <button type="button" className="btn-close bg-secondary" data-bs-dismiss="alert"></button>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                      Morbi leo risus
                    <button type="button" className="btn-close bg-secondary" data-bs-dismiss="alert"></button>
                  </li>
              </ul>
      </div>
  )
}

export default Category