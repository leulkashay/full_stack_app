require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 8082;

//middleware
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.json());

//route
app.use('/', (req, res, next) => {
    res.send("It works")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});