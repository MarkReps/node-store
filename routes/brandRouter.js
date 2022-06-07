const Router = require("express")

const brandController = require("../controller/brandController")

const router = Router()


router.post("/create",brandController.create)
router.get("/get",brandController.getAll)

module.exports = router;