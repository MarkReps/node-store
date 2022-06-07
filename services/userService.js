const bcrypt = require("bcrypt")

const {User} = require("../model/models")
const tokenService = require("./tokenService")
const UserDto = require("../dto/userDto")

const ApiError = require("../error/ApiError")

class UserService{

    async registration(email,password,role){
        
        const candidate = await User.findOne({where:{email}})

        if(candidate){
            throw ApiError.badRequest("user already exist!")
        }
        
        const hashedPassword = await bcrypt.hash(password,3);
        const user = await User.create({email,password:hashedPassword,role})
        
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})

        return {
            ...tokens,
            userDto
        };
    }


    async login(email,password){
        
        const user = await User.findOne({where:{email}})

        if(!user){
            throw ApiError.BadRequest("User don`t exist!")
        }

        const uncodeResult = await bcrypt.compare(password,user.password)

        if(!uncodeResult){
            throw ApiError.BadRequest("Uncorrect password!!")
        }


        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})

        return {
            ...tokens,
            userDto
        };
    }

    async getAll(){
        const users = await User.findAll()
        return users;
    }
}


module.exports = new UserService()