const { downloadFile } = require("../controllers/donloadControler");

const router = require("express").Router();

router.get('/:uuid',downloadFile);

module.exports = router;