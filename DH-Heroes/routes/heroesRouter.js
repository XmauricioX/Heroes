const express = require("express");
const app = express();
const router = express.Router();
const controller = require("../controllers/heroesController");

router.get("/", controller.index)
router.get("/heroe/:id", controller.heroe);

module.exports = router;