const path = require("path");
const express = require("express");
const app = express();
const indexHTML = path.resolve("build/index.html");
const PORT = process.env.PORT || 3000;


app.get("/*", (req,res)=>{
    res.sendFile(indexHTML);
})

app.listen(PORT, (err)=>{
    if(err){
        return console.log(err);
    }

    console.log("we are listen"+PORT);
})