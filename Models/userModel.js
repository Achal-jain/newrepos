const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true,
        required: true
    },
    Surname: {
        type: String,
        trim: true,
        required: true
    },
    Email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    Phone: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    Location: {
       type: String,
       enum :["Latitude","Longitude"]
    }
}, {timestamps: true})


module.exports = mongoose.model("user", userSchema);