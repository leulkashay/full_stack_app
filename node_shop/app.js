const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
    useUnifiedTopology: true,
});

// db connected
mongoose.connection.once('open', () => {
    console.log("connected DB");
});

//route
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//error handling
app.use((req,res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status( error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;
