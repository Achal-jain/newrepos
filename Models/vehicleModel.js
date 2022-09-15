const mongoose = require ('mongoose')

const vehicleSchema = new mongoose.Schema({
    Vehicle_name: {
        type: String,
        trim: true,
        required: true
    },
    Vehicle_brand: {
        type: String,
        trim: true,
        required: true
    },
    
    Vehicle_number: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    
    
}, {
    timestamps: true
})

module.exports = mongoose.model("Vehicle", vehicleSchema);