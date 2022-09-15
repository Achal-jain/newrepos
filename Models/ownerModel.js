const mongoose = require ('mongoose')


const ownerSchema = new mongoose.Schema({
    Vehicle_id: {
        type: ObjectId,
        ref: 'Vehicle',
        required: true,
        trim: true
    },
    User_id: {
       type: ObjectId,
        ref: 'User',
        required: true,
        trim: true
    },
    
    isDeleted: {
        type: Boolean,
        default: false,
    }
    
    
}, {
    timestamps: true
})

module.exports = mongoose.model("owner", ownerSchema);