const express = require('express')


// const productosRouter = require('./productosRouter');
// const ventasRouter = require('./ventasRouter');
const usersRouter = require('./usersRouter');
const { route } = require('./usersRouter');

function routerApi(app){
    const router = express.Router();
app.use('/api/v1', router);
// router.use('/productos',productosRouter);
// router.use('/ventas',ventasRouter);
router.use('/users',usersRouter);
}
module.exports = routerApi;

