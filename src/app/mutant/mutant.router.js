const router = require('express').Router();
const MutantController = require("./controllers/MutantController");

router.get("/stats", MutantController.getMutantStats);

router.post("/", MutantController.isMutant);

module.exports = router;