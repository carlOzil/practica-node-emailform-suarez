const express = require("express");
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.use(cors());
 
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use('/',require('./routes/formRoutes'));


app.listen(port, () => {
console.log(`Servidor FORM a la escucha del puerto ${port}`);
});