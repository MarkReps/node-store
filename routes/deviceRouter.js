const Router = require("express")

const deviceController = require("../controller/deviceController")

const router = Router()


router.post("/create",deviceController.create)
router.get("/getAll",deviceController.getAll)
router.get("/:id",deviceController.getOne)

module.exports = router;