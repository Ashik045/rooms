// import external modules
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// import internal modules
const userRoute = require('./routes/user');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
dotenv.config();

// database connection
mongoose
    .connect(process.env.DATABASE_URL, {
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log(err.message);
    });

// application routing
app.use('/api', userRoute);

app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Success',
    });
});

// error handling
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
    });
});

// not found handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'URL not Found',
    });
});

// application running port
app.listen(process.env.APP_PORT || 4000, (req, res) => {
    console.log(`Server listening on port ${process.env.APP_PORT}`);
});
