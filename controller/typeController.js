const TypeService = require("../services/typeService")

class TypeController{
    async create(req,res){
        const {name} = req.body
        const type = await TypeService.create(name)
        return res.json(type)
    }

    async getAll(req,res){
        const types = await TypeService.getAll()
        return res.json(types)
    }
}


module.exports = new TypeController()