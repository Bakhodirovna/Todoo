const express = require('express');
require('dotenv').config();
const routes = require('./routes')


const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());

app.use("/api",routes)


app.listen(PORT, ()=>{
    console.log(PORT);
})

module.exports = app