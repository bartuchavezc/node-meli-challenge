const { Router } = require("express");

const router = Router();
router.use('/mutant', require("./mutant/mutant.router"));

module.exports = router;