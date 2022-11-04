
const faker = require('faker');
const boom = require('@hapi/boom');

class usersService {

constructor(){
    this.users = [];
    this.generate();

}
generate(){
    const limit = 100;
    for(let index = 0; index < limit; index++){
        this.users.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            Image: faker.image.imageUrl(),
            isBlock: faker.datatype.boolean(),
            
        })
    }
    // console.log(this.users);

}

async Create(data){
    const newUser = {
        id: faker.datatype.uuid(),
        ...data
    }
    this.users.push(newUser);
    return newUser;
}
find(){
    console.log('aqui voy')
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(this.users)
        }, 2000);
    })
    return this.users;
}
async findOne(id){
const  user = this.users.find(item => item.id === id);
if (!user){
    throw boom.notFound('User not found1');
}
if(user.isBlock){
    throw boom.conflict('User isBlock');
}
return user;
}
async update(id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
        throw boom.notFound('User not found2');
    }
    const users = this.users[index];
    this.users[index] = {
        ...users,
        ...changes
    };
    return this.users[index];
}
async delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
        throw boom.notFound('User not found');
    }
    this.users.splice(index, 1);
    return{message: true
    ,id}
}
}


module.exports = usersService;
