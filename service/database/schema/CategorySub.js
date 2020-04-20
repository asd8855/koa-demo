const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySubSchema = new Schema({
    "ID": { unique: true, type: String },
    "MALL_CATEGORY_ID": String,
    "MALL_SUB_NAME": String,
    "SORT": Number,
    "COMMENTS": String,
})

mongoose.model('CategorySub', CategorySubSchema);