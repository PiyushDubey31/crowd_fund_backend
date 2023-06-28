const express = require("express");
require("dotenv").config()
const port = process.env.PORT || 3002
const app = express();
console.log(port,"porttt")

app.listen(port,()=>{
console.log(`port started on ${port} `)
});

app.get("/test", (req,res)=>{
return res.json({message:"this is test message"})
})