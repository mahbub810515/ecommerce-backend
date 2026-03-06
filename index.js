require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT;
//http://localhost:8080/
app.use("/",require("./route"))


app.listen(port,()=>{
    console.log(`server is started at port: ${port}`);
})