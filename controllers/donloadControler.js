const File = require('../module/File');

const getDownloadUrl = async (req, res) => {
    const uuid = req.params.uuid;
    const checkUuid = await File.findOne({ uuid: uuid });
    if (!checkUuid) {
        return res.status(404).json({ message: "url is not found" });
    }
    return res.status(200).json({fileName:checkUuid.fileName,size:checkUuid.size, downloadUrl: `${process.env.BASE_URL}/downloads/${uuid}` });
};


//download the file
const downloadFile = async (req, res) => {
    const uuid = req.params.uuid;
    const checkUuid = await File.findOne({ uuid: uuid });
    if (!checkUuid) {
        return res.status(404).json({ message: "url is not found" });
    }
    return res.download(`uploads/${checkUuid.fileName}`);
}

module.exports = {getDownloadUrl,downloadFile};