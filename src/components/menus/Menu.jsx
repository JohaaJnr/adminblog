import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const Menu = () => {

const [menus, setMenus] = useState([])

  useEffect(()=>{
     var options ={
       method: 'GET',
       url: `/menudetails`,
     }
     axios.request(options).then(res=>{
       setMenus(res.data)
     
     }).catch(err=>{
       if(err){
         console.error(err)
       }
     })
  }, [menus])

const addmenu = (e) =>{
  e.preventDefault()
  const menuname = e.target.menutitle.value;
  var options = {
    method: 'GET',
    url: `create_menu/${menuname}`

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
      <h1 className="mx-4 mb-2">Create Menu</h1>
      <form className="mx-4 mb-5" onSubmit={addmenu} >

        <div className="input-group input-group-outline my-3">

          <label htmlFor="post_title" className="form-label">Add a new Menu</label>
          <input type="text" name='menutitle' className="form-control" />
        </div>
        <button type="submit" className="btn btn-warning" >Save</button>


      </form>
      <ul className="mt-5 mb-3 mx-5 list-group">

    {
      menus.menus.map(e =>{
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {e.Menu}
          <button type="button" className="btn-close bg-secondary" data-bs-dismiss="alert"></button>
        </li>
      })
    }
        
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

export default Menu