const {Brand} = require("../model/models")

class BrandService{

    async create(name){
        const brand = await Brand.create({name})
        return brand;
    }

    async getAll(){
        const brands = await Brand.findAll()
        return brands;
    }
}


module.exports = new BrandService()