const router = require("express").Router();

const colaboradoresRouter = require("./colaboradores");

router.use("/", colaboradoresRouter);

module.exports = router;
