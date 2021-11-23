const latest = require('./routes/latest');
const list = require('./routes/list');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/latest', latest);
app.use('/list', list);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express app Running at http://localhost:${port}`))
