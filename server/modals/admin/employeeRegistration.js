const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
    f_name: {type: String, required: true},
    l_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
}, {
    collection: 'employee-data'
})
const model = mongoose.model('EmployeeData', Schema)
module.exports = model