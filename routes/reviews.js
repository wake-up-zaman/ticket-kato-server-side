const express = require('express');
const { createReviews, getAllReviews, getReviews } =require("../controllers/controller_reviews.js");
const router=express.Router();

//CREATE
router.post("/", createReviews);

//GET
router.get("/:id",getReviews)

//GET ALL
router.get("/", getAllReviews)

module.exports=router;