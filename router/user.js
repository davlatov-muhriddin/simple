const { Router } = require("express");
const Users = require("../models/Users.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json({
      message: "success",
      users: users,
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const createUser = await Users.create({ name, email, password });
    res.status(200).json({
      message: "success",
      users: createUser,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
