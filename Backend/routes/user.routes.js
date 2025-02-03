const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authmiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  userController.loginUser
);

router.get("/profile", authmiddleware.authUser, userController.getUserProfile);

router.get("/logout", authmiddleware.authUser, userController.logoutUser);

module.exports = router;
