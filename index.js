const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');
require("dotenv").config();
const multer = require('multer');
const path = require('path');
const cors = require('cors');
//routers
const fileRouter = require("./routes/file");
const downloadUrlRouter = require("./routes/downloadUrl");
const downloadFileRouter = require("./routes/downloadFile");

app.use(cors());

//multer initialization
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
       cb(null, file.originalname + '-' + uniqueSuffix+path.extname(file.originalname))
    }
})

const upload = multer({
    storage,
})

app.use(express.urlencoded({extended:false}));

app.use('/api/v1/file',upload.single("file"),fileRouter);
app.use("/file/uploads",downloadUrlRouter);
app.use("/downloads",downloadFileRouter);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

const port = process.env.PORT || 4000;
dbConnect();
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});