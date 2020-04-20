const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const SALT_WORK_FACTOR = 5;

// 创建我们的用户Schema
const userSchema = new Schema({
    UserId: ObjectId,
    userName: { unique: true, type: String },
    password: String,
    createAt: { type: Date, default: Date.now() },
    lastLoginAt: { type: Date, default: Date.now() }
})

//每次存储数据时都要执行
userSchema.pre('save', function (next) {
    console.log(this)
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err)
            this.password = hash
            next()
        })
    })
})

userSchema.methods = {
    // 密码比对的方法
    comparePassword: (_password, password) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(_password, password, (err, isMatch) => {
                if (!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
}

// 发布模型
mongoose.model('User', userSchema)