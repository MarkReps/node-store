const ApiError = require("../error/ApiError");
const tokenService = require("../services/tokenService");


module.exports = function(req,res,next){
    
    try{
        const authorizationHeader = req.headers.authorization;

        if(!authorizationHeader){
            return next(ApiError.UnauthorizedError("user don`t authorize!"))
        }

        const accessToken = authorizationHeader.split(" ")[1]

        const userData = tokenService.validateAccessToken(accessToken)

        if(!userData){
            return next(ApiError.UnauthorizedError("user don`t authorize!!"))
        }

        req.user = userData;
        next()
    } catch(e){
        return next(ApiError.UnauthorizedError("user don`t authorize!!!"))
    }
}
