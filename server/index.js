const express = require('express');
const app = express();

const port_number = 5000;

app.listen(port_number, () => {
    console.log(`server has started on port ${port_number}`);
});