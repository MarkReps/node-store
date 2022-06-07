const {Type} = require("../model/models")

class TypeService{

    async create(name){
        const type = await Type.create({name})
        return type;
    }

    async getAll(){
        const types = await Type.findAll()
        return types;
    }
}


module.exports = new TypeService()