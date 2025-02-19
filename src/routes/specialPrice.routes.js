const express = require("express");
const router = express.Router();
const {
  getSpecialPrices,
  createSpecialPrice,
  updateSpecialPrice,
  deleteSpecialPrice,
  getUsersWithSpecialPrices
} = require("../controller/specialPrice.controller");

router.get('/usuarios', getUsersWithSpecialPrices); 
router.get("/", getSpecialPrices);
router.post("/", createSpecialPrice);
router.put("/:id", updateSpecialPrice);
router.delete("/:id", deleteSpecialPrice);
  
module.exports = router;
