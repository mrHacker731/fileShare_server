const mongoose = require('mongoose');

module.exports = async()=>{
   try {
    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
   } catch (error) {
    console.error(error);
   }
}