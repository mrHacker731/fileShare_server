const File = require("../module/File");
const { v4: uuidv4 } = require('uuid');

const handleUpload = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    const { filename, path, size } = req.file;
    const uuid = req.body.uuid;
    if (!uuid) {
        return res.status(400).json({ message: "uuid not created" });
    }
    const newFile = await File.create({
        fileName: filename,
        path: path,
        size: size,
        uuid: uuid
    });
    return res.status(201).json({ url: `${process.env.BASE_URL}/file/uploads/${uuid}` });
}

module.exports = { handleUpload };