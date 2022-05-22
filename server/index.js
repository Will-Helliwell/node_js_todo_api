const express = require('express');
const app = express();
const cors = require('cors');


const pool = require('./db.js');

const test = pool.query("SELECT * FROM todo");
console.log(test);

// Middleware
app.use(cors());
app.use(express.json());

const port_number = 5000;
app.listen(port_number, () => {
    console.log(`server has started on port ${port_number}`);
});