const jwt = require("jsonwebtoken")

class TokenService{

    validateAccessToken(token){

        try {
            const userData = jwt.verify(token,process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (error) {
            return null;
        }
    }

    validateRefreshToken(token){

        try {
            const userData = jwt.verify(token,process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (error) {
            return null;
        }
    }

    generateToken(payload){

        const accessToken = jwt.sign(payload,process.env.JWT_ACCESS_SECRET,{expiresIn:"15m"})
        const refreshToken = jwt.sign(payload,process.env.JWT_REFRESH_SECRET,{expiresIn:"30d"})

        return {
            accessToken,
            refreshToken
        }
    }
}


module.exports = new TokenService()