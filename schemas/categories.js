const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        default: '',
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
});
module.exports = mongoose.model('Category', categorySchema);