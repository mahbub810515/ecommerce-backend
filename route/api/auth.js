const express = require("express");
const { registrationController, loginController } = require("../../controller/auth.controller");
const router = express.Router();

//http://localhost:8080/api/v1/auth/register
router.get("/register",registrationController)
//http://localhost:8080/api/v1/auth/login
router.get("/login",loginController)


module.exports=router;