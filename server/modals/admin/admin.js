const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {
    collection: 'admin-data'
})
const model = mongoose.model('AdminData', AdminSchema)
module.exports = model