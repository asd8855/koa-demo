const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
    IMAGE_KEY: String,
    PRODUCT_CODE: String,
    IMAGE_NAME: String,
    IMAGE_URL: String,
    STATE: Number // 0 正常  1删除
}, {
    collections: 'Images'
})
mongoose.model('Images', imagesSchema);