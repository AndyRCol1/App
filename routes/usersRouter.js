const express = require('express');
const faker = require('faker');

const router = express.Router();


router.get('/',(req,res) =>{
//
const list = [];
const { number } = req.query;
const users = number || 5;
for(let index = 0; index < users; index++){
    list.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        user: faker.internet.email(),
    })
}
res.json(list);


});

module.exports = router;
