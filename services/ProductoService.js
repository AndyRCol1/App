
const faker = require('faker');

class productosService {

constructor(){
    this.productos = [];
    this.generate();

}

generate(){
    const limit = 100;
    for(let index = 0; index < limit; index++){
        this.productos.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            Image: faker.image.imageUrl(),

        })
    }

}

Create(){

}
find(){
    return this.productos;
}
findOne(id){
    return this.productos.find(item => item.id === id);
}
update(){

}
delete(){

}
}


module.exports = productosService;
