const express = require('express');
const path = require('path');
var bodyparser = require('body-parser')

const app = express();

const port = 8000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})