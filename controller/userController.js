
const userService = require("../services/userService")


class UserController{

    async registration(req,res){
        try {
            const {email,password,role} = req.body

            const user = await userService.registration(email,password,role)
        
            return res.json(user)
        } catch (error) {
            next(error)
        }
        
    }

    async login(req,res,next){
        try {
        const {email,password} = req.body

        const user = await userService.login(email,password)
        return res.json(user);
        } catch (error) {
            next(error)
        }
        
    }

    async getAll(req,res){
        try {
        const users = await userService.getAll()

        return res.json(users);  
        } catch (error) {
            next(error)
        }
        
    }
}

module.exports = new UserController();