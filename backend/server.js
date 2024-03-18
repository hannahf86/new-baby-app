// REQUIRED
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const testRoutes = require('./routes/tests')

// EXPRESS APP
const app = express();

    // middleware
    app.use(express.json());
    app.use((req, res, next) => {
        console.log(req.path, req.method)
        next();
    })

// ROUTE HANDLER
app.use('/api/routes/tests', testRoutes)

// CONNNECT TO DB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('connected to database')
        // LISTEN
        app.listen(process.env.PORT, () => {
            console.log('listening on port ' + process.env.PORT)
        })
    }) .catch(( error ) => {
        console.log(error.message)
    })