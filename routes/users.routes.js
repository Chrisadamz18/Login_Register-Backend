const userController = require("../controllers/users.controller");

const express = require("express");
// const { required } = require("nodemon/lib/config");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user-profile", userController.userProfile);



module.exports = router;