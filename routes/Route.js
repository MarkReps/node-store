const Router = require("express")

const typeRouter = require("./typeRouter")
const brandRouter = require("./brandRouter")
const deviceRouter = require("./deviceRouter")
const userRouter = require("./userRouter")

const router = Router()

router.use("/type",typeRouter)
router.use("/brand",brandRouter)
router.use("/device",deviceRouter)
router.use("/user",userRouter)

module.exports = router;