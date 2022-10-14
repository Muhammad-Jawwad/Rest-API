require('dotenv').config()
console.log(process.env) 
const express = require("express");
const app = express();

app.get('/api',(req,res) => {
    res.json({
        success: 1,
        message: "This is the rest APIs working with PORT: " + process.env.APP_PORT
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log("Server is up and running with PORT:",process.env.APP_PORT);
});


