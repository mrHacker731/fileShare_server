const { handleUpload } = require("../controllers/fileControler");

const router = require("express").Router();

router.post("/upload",handleUpload);

module.exports = router;