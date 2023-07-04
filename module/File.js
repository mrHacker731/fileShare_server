const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    fileName:{type:String,required:true},
    path:{type:String,required:true},
    size:{type:String,required:true},
    uuid:{type:String,required:true},

},{timestamps:true});

module.exports = mongoose.model('File',FileSchema);