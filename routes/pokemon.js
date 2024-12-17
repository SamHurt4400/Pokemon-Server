const express = require("express");
const{test,createPokemon}= require("../controllers/pokemon")
const router = express.Router();

router.get("/test",test);
router.post("/",createPokemon)

module.exports =router