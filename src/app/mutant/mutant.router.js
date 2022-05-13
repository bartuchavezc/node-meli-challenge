const router = require('express').Router();
const MutantController = require("./controllers/MutantController");

router.post("/", MutantController.isMutant);

module.exports = router;