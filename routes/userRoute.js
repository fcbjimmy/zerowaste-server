const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  showCurrentUser,
  showAllProducts,
} = require("../controllers/user.controller");
const authenticateUser = require("../middleware/authentication");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/showAllProducts").get(showAllProducts);

router.route("/showCurrentUser").get(authenticateUser, showCurrentUser);

module.exports = router;
