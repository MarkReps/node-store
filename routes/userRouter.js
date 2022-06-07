const Router = require("express")

const userController = require("../controller/userController")
const authMiddleware = require("../middleware/AuthMiddleware")

const router = Router()


router.post("/registration",userController.registration)
router.post("/login", userController.login)
router.get("/users",authMiddleware,userController.getAll)

module.exports = router;