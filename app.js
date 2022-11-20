require("dotenv").config();

const express = require("express");
const bodyParser = require('body-parser');
const upload = require('express-fileupload');
const nodemailer = require('nodemailer');


const userRouter = require("./api/users/user.router");
const visitorRouter = require("./api/visitors/visitors.router");

const app = express();
app.use(upload());


// var cors = require('cors')
// app.use(cors())

app.use(express.json());
app.use(bodyParser.json());


app.use("/api/users", userRouter);
app.use("/api/visitors", visitorRouter);


app.listen(process.env.APP_PORT, () => {
  console.log("server up and running on PORT :", process.env.APP_PORT);
});
