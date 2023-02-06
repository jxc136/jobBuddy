const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  loginUser,
} = require("../controllers/users");

const router = express.Router();

router.get("/", getUsers);

router.get("/", getUserById);


router.get('/:id', getUserById)

router.post("/", createUser);


// login route
router.post("/login", loginUser);

module.exports = router;
