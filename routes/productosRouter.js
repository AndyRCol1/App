const express = require('express');

const productosService = require('./../services/ProductoService')

const router = express.Router();
const service = new productosService();

router.get('/', (req,res) => {

    const productos = service.find();
    res.json(productos);
});




///////////////////////////////////////////////////////////////////////////////
////////////////  Manejadores  ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


router.get('/filter',(req,res) =>{
    res.send('Yo soy un filter');
})

router.get('/:id', (req,res) =>{
    const { id } = req.params;
    const producto = service.findOne(id);
    res.json(producto);
});

router.post('/',(req,res) => {
    const body = req.body;
    res.status(201).json({
        message: 'Creado',
        data: body
    })
});



router.patch('/:id || 5', (req,res) =>{
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Update',
        date: body,
        id ,
    });

});

router.delete('/:id || 5', (req,res) =>{
    const { id } = req.params;

    res.json({
        message: 'delete',
        id ,
    });

});

module.exports = router;

