import React from 'react'

const Posts = () => {
  return (
      <div>
          <h1 className="mx-4 mb-2">Add New Posts</h1>
          <form className="mx-4" >

              <div className="input-group input-group-outline my-3">

                  <label for="post_title" className="form-label">Post Title</label>
                  <input type="text" className="form-control" />
              </div>

             
              <select className="form-select mt-5 px-2" name="category" id="inputGroupSelect01">
                            <option disabled="" selected="">Select A Category</option>
                            <option value="Product Renders">Product Renders</option>
                            <option value="Furniture Renders">Furniture Renders</option>
                            <option value="Hospitality">Hospitality Renders</option>
                            <option value="Architectural Renders">Architectural Renders</option>
                        </select>
              
              <div className="input-group input-group-outline my-3">

                  <label for="post_title" className="form-label">Post Body</label>
                  <textarea className="mt-5 mb-3 px-2 form-control" name="add_post" id="" cols="60" rows="10"></textarea>
              </div>
            
              <h3>Update Featured Image</h3>
              <div className="input-group input-group-outline my-3">
               
              <label for="Featured Image" className="form-label"></label>
                    <input type="file" className="form-control" />
              </div>

              <div className="input-group input-group-outline my-3">

                  <label for="post_title" className="form-label">Tags</label>
                 <input type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-warning" >Update</button>




          </form>
      </div>
  )
}

export default Posts