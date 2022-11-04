const express = require('express');
const routerApi = require('./routes');
const {  logErrors , errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080','http://localhost:3000']

const options = {
 origin:(origin, callback)=>{
    if (whiteList.includes(origin) || !origin) {
        callback(null, true)
        }
    else {
        callback(new Error('no '));
    }
 }
}
app.use(cors(options));


app.get('/', (req,res) => {
res.send('Hola mi server en express andy')
});


app.get('/nueva-ruta', (req,res) => {
    res.send('Hola soy una nueva ruta')
    });

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () =>{
    console.log('Estoy en el puerto ' + port);
});
