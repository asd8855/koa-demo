const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agreementSchema = new Schema({
    title: String,
    detail: String,
    state: Number // 0 正常  1删除
}, {
    collections: 'Agreement'
})
mongoose.model('Agreement', agreementSchema);