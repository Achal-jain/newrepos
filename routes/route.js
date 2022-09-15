const express = require('express');
const router = express.Router();

const {Createuser}= require("../controllers/userController")
const {Createvehicle}= require("../controllers/vehicleController")
const {createOwner}=require("../controllers/ownercontroller")


router.post("/user",Createuser)
router.post("/vehicle",Createvehicle)
router.post('/owner',createOwner)




module.exports = router;