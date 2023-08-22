const router = require("express").Router();

const colaboradorController = require("../controllers/ColaboradorController");

router
  .route("/colaboradores")
  .post((req, res) => colaboradorController.create(req, res));

router
  .route("/colaboradores")
  .get((req, res) => colaboradorController.getAll(req, res));

router
  .route("/colaboradores/:id")
  .get((req, res) => colaboradorController.get(req, res));

router
  .route("/colaboradores/:id")
  .delete((req, res) => colaboradorController.delete(req, res));

router
  .route("/colaboradores/:id")
  .put((req, res) => colaboradorController.update(req, res));

module.exports = router;
