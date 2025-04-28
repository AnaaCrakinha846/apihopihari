console.log('Olá mundo!');
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");


app.use(cors());
app.use(helmet());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header("Acces-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
    }
    next();
});