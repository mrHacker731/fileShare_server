const {getDownloadUrl} = require("../controllers/donloadControler");

const router = require("express").Router();

router.get("/:uuid",getDownloadUrl);


module.exports = router;