const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    "ID": { unique: true, type: String },
    "IMAGE": String,
    "MALL_CATEGORY_NAME": String,
    "SORT": Number,
    "TYPE": Number,
    "COMMENTS": String,
})

mongoose.model('Category', categorySchema);