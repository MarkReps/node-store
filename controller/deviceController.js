const deviceService = require("../services/deviceService")

class DeviceController{

    async create(req,res){
        const {name,price,info,brandId,typeId} = req.body
        const {img} = req.files
        const device = await deviceService.create(name,price,info,img,typeId,brandId)

        return res.json(device);
    }

    async getAll(req,res){

        const {brandId,typeId,limit,page} = req.query
        const devices = await deviceService.getAll(brandId,typeId,limit,page)

        return res.json(devices);
    }

    async getOne(req,res){
        const {id} = req.params
        const device = await deviceService.getOne(id)
        return res.json(device);
    }
}

module.exports = new DeviceController()