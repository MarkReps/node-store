const uuid = require('uuid')
const path = require('path')

const {Device, DeviceInfo} = require("../model/models")

class deviceService{
    
    async create(name,price,info,img,typeId,brandId){
        try {
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname,"..","static",fileName))

            const device = await Device.create({name,price,img:fileName,typeId,brandId})

            if(info){
                info = JSON.parse(info)
                info.forEach(element => {
                    DeviceInfo.create({
                        title:element.title,
                        description:element.description,
                        deviceId: device.id
                    })
                });
            }


            return device;
        } catch (error) {
            console.log(error.message)
            throw Error("error !!")
        }
    }

    async getAll(brandId,typeId,objsLimit,currentPage){
        
        const limit = objsLimit || 9;
        const page = currentPage || 1;

        const offset = page*limit -limit;



        let devices;

        if(!brandId && !typeId){
            devices = await Device.findAll({
                limit,
                offset
            })
        }
        if(brandId && !typeId){
            devices = await Device.findAll({
                where:{
                    brandId,
                    limit,
                    offset
            }})
        }
        if(!brandId && typeId){
            devices = await Device.findAll({
                where:{
                    typeId,
                    limit,
                    offset                    
            }})
        }
        if(brandId && typeId){
            devices = await Device.findAll({where:{
                brandId,
                typeId,
                limit,
                offset
            }})
        }

        return devices;

    }

    async getOne(id){
        const device = await Device.findOne({
            where:{
                id
            },
            include:[
                {
                    model:DeviceInfo,as:"info"
                }
            ]
        })

        return device;
    }
}

module.exports = new deviceService();