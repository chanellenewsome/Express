// dependency 

const express = require ("express");
const app = express ();
const port = process.env.port || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

require('./routes/APIroute')(app);
require ('./route/HTMLroute')(app);

app.listen(port,functino()){
    console.log('App listening on Port: ${PORT}');
});