const express = require("express");
const {
  registerUser,
  loginUser,
  findUser,
  getUsers,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/find/:userId", findUser);

module.exports = router;
