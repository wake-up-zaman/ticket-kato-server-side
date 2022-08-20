import express from "express"
import { createUsers, deleteUser, getAdmin, getAllUser, getUser, RemoveAdmin, SetAdmin, updateUser } from "../controllers/controller_users.js";
import { verifyToken } from "../utils/verifyToken.js";
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


export default router;