import express from "express"
import { createReviews, getAllReviews, getReviews } from "../controllers/controller_reviews.js";
const router=express.Router();

//CREATE
router.post("/", createReviews);

//GET
router.get("/:id",getReviews)

//GET ALL
router.get("/", getAllReviews)

export default router;