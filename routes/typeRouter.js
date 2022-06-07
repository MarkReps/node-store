const Router = require("express")

const typeController = require("../controller/typeController")

const router = Router()


router.post("/create",typeController.create)
router.get("/get",typeController.getAll)

module.exports = router;