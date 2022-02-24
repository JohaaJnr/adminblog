const express = require('express')
const Route = express.Router()
const fileUpload = require('express-fileupload')
const Siteinfo = require('../models/Siteinfo')
const Category = require('../models/Categories')
const Menu = require('../models/Menus')

Route.get('/', (req,res)=>{
    res.send("Hello from express admin")
})

//Create Routes
Route.get('/update_title/:title', (req,res)=>{
    const title = req.params.title;
    const id = '621709929fc03bd1bde8107b'
    const up = Siteinfo.findByIdAndUpdate(id, {SiteName: title}, err=>{
        if(err){
            console.error(err)
        }else{
            res.json({
                msg: 'Title Updated'
            })
        }
    })

})


Route.get('/upload_logo', (req,res)=>{
    
})


Route.get('/addcategory/:name', (req,res)=>{
    const value = req.params.name;
    const newCat={
        CategoryName: req.params.name
    }
    const up = Category.create(newCat)
    res.json({
        msg: 'Category Added'
    })
})


Route.get('/create_menu/:menuName', (req,res)=>{
    const menu = req.params.menuName;
    const newMenu = {
        Menu: menu
    }
    const up = Menu.create(newMenu)
    res.json({
        msg: 'Menu Created'
    })
})


//Show Routes

Route.get('/menudetails', (req,res)=>{
    const details = Menu.find({}, (function(err, result){
        if(err) throw err;
        res.json({
            menus: result
        })
    })
    
    )}
)

Route.get('/categorydetails', (req,res)=>{
    const details = Category.find({}, (function(err,result){
        if(err) throw err;
        res.json({
            categories: result
        })
    }))
})

Route.get('/sitedetails', (req,res)=>{
    const details = Siteinfo.find({}, function(err,result){
        if(err) throw err;
        res.json({
            sitetitle: result
        })
    })
})

//Delete routes

Route.get('/delete/menus/:id', (req,res)=>{
    const deleteId = req.params.id;
    const deleteItem = Menu.findByIdAndDelete(deleteId, err=>{
        if(err) throw err;
        else{
            res.json({
                msg: 'Item Deleted'
            })
        }
    })
})

Route.get('/delete/categories/:id', (req,res)=>{
    const deleteId = req.params.id;
    const deleteItem = Category.findByIdAndDelete(deleteId, err=>{
        if(err) throw err;
        else{
            res.json({
                msg: 'Item Deleted'
            })
        }
    })
})



module.exports = Route;



