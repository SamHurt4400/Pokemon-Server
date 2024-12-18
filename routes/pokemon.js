const express = require("express");
const{test,createPokemon, getPokemons,getPokemonByPokemonId,catchPokemonByPokemonId}= require("../controllers/pokemon")
const router = express.Router();

router.get("/test",test);
router.post("/",createPokemon)
router.get("/",getPokemons)
router.get("/pokemonid/:pokemon_id",getPokemonByPokemonId)
router.put("/catch/:pokemon_id",catchPokemonByPokemonId)
module.exports =router