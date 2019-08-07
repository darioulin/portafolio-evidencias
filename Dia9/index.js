const express = require("express");
const bodyParser = require ("body-parser");

const PORT = 4444;
const router = require("./routes/routes");
const mongoose = require("mongoose");
const MONGOURI = require("./config/keys").mongoURI;
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

mongoose.connect(MONGOURI, {useNewUrlParser: true})
    .then(() => console.log("Conectado a MongoDB 🐸") )
    .catch((err) => console.log(err));

//EndPoint
app.use('/', router);

app.listen(PORT, () => {
    console.log(`El servidor corriendo en el puerto ${PORT}`);
})

