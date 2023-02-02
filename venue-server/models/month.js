const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const monthSchema = new Schema({
    year: {type: Number, required: true},
    month: {type: Number, required: true},
    days: { type: Array, required:true},
    monthString: {type: String, required: true}
})

module.exports = mongoose.model("Month", monthSchema)