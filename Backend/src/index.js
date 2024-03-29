const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser= require('body-parser');
const router = require('./router/prueba.router');
require('./database');

const app = express();


app.set('Port',4000)
 app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())
app.use(cors());
// rutas 
app.use('/api/', router);
app.listen(app.get('Port'),()=>{
    console.log('App correcta por el puerto', app.get('Port'))
})