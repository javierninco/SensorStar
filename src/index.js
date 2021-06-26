const { json } = require('express');
const express =require('express');
const morgan = require('morgan');
const app =express();
//configuración
app.set('port',process.env.port || 3000)
app.set('json spaces',2);
//mildewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//rutas
app.use(require('./routes/index'));
app.use(require('./routes/naves'));
//iniciar servidor
app.listen(app.get('port'),()=>{
    console.log(`server port ${app.get('port')}`);
})