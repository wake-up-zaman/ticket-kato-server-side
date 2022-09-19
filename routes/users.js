const express = require('express');
const { createUsers, deleteUser, getAdmin, getAllUser, getUser, RemoveAdmin, SetAdmin, updateUser } =require("../controllers/controller_users.js");
const { verifyToken }=require("../utils/verifyToken.js");
const router=express.Router();

//CREATE of buses
router.post("/",createUsers);

//UPDATE
router.put("/:email",updateUser)

//DELETE
router.delete("/:id",deleteUser)

//GET
router.get("/:email",getUser)

//GET ALL
router.get("/", getAllUser)

//GET ADMIN
router.get("/getAdmin/:email",getAdmin)

//UPDATE SET ADMIN
router.put("/setAdmin/:email",SetAdmin)

//UPDATE REMOVE ADMIN
router.put("/removeAdmin/:email",RemoveAdmin)


// //Implemented VerifyToken

// //CREATE of buses
// router.post("/",  createUsers);

// //UPDATE
// router.put("/:email", verifyToken, updateUser)

// //DELETE
// router.delete("/:id", verifyToken, deleteUser)

// //GET
// router.get("/:email", verifyToken, getUser)

// //GET ALL
// router.get("/", getAllUser)

// //GET ADMIN
// router.get("/getAdmin/:email",getAdmin)

// //UPDATE SET ADMIN
// router.put("/setAdmin/:email", verifyToken, SetAdmin)

// //UPDATE REMOVE ADMIN
// router.put("/removeAdmin/:email", verifyToken, RemoveAdmin)


module.exports=router;