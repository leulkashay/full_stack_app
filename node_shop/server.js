require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');

const app = express();

const port = process.env.PORT || 8082;

//middleware
app.use(bodyParser.json({limit: "30mb", exyended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
    useUnifiedTopology: false
});

// db connected
mongoose.connection.once('open', () => app.listen(port, () => {
    console.log(`server is running on port ${port}`);
}));



//route
app.use('/', (req, res, next) => {
    res.send("It works")
})

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

