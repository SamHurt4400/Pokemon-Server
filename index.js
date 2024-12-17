const express = require ("express");
const mongoose = require ("mongoose");
require("dotenv").config();

const routerPokemon = require("./routes/pokemon")
const app = express ();
const PORT = 3000;

app.set("port",PORT)

//Midelwares
app.use(express.json());

//Routes
app.use("/api/pokemon",routerPokemon)

//Conexion con la DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Connect to DB"))
.catch((error)=>console.error(error))

app.listen(PORT,()=>console.log(`Listening on post${PORT}`))