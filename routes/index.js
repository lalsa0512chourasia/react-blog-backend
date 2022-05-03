const express = require("express")
const router = express.Router();
const categoryRouter = require("./category")
// const categoryRouter2 = require("./category")

router.use("/category", categoryRouter)
// router.use("/:category/:id", categoryRouter2)

module.exports= router;