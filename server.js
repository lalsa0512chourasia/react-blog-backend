const express = require("express")  //import express
const cors = require("cors") // import cors
const mainRouter = require("./routes")

const app = express(); //creating express
app.use(cors());

// app.get("/api", (req,res)=>{   //for routes                                        
//     res.json({name:"lalsa"})
// })

app.use("/api/v1", mainRouter, )  //(whatever child provides write after /api/v1 [child routes])declare main route here only i.e.index.js inside routes

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log('hello this is server');
})