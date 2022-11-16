
const express = require('express')
const route = express.Router();

const  authorController =require("../Controller/authorController")
const blogcontroller = require("../Controller/blogController")


router.post("/authors",authorController.createAuthor)
router.post("/blogs",blogcontroller.createBlogs)
router.get("/getAllBlog",blogcontroller.getAllBlogs)

module.exports=router