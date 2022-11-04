const express = require('express');

const userService = require('./../services/usersService');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createUserSchema, updateUserSchema, getUserSchema} = require('./../schema/usersSchema');


const router = express.Router();
const service = new userService();

router.get('/', async (req, res, next) => {
    try {
      const user = await service.find();
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

///////////////////////////////////////////////////////////////////////////////
////////////////  Manejadores  ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

router.get('/filter',(req,res) =>{
    res.send('Yo soy un filter');
})

router.get('/:id',
    validatorHandler(getUserSchema,'params'),
    async (req, res, next) =>{
        try {
            const { id } = req.params;
            const user = await service.findOne(id);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
);



router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
        console.log('aqui')
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);




router.patch('/:id',
validatorHandler(updateUserSchema,'body')
, async (req,res,next) =>{
 try {
    const { id } = req.params;
    const body = req.body;
    const users = await service.update(id, body);
    res.json(users)
    } catch (error) {
        next(error);

}
});

router.delete('/:id', async (req,res) =>{
    const { id } = req.params;
    const users = await service.delete(id)
    res.json(users);

});

module.exports = router;

