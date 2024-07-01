const express = require("express");
const doctorController = require("../controllers/DoctorController");

const router = express.Router();
//we need to seperate route file from controller file later
router.use("/doctor", doctorController);

module.exports = router;

