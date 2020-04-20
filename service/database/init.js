const mongoose = require('mongoose')
const db = "mongodb://localhost/simle-db"
const glob = require('glob');
const { resolve } = require('path');

mongoose.Promise = global.Promise

exports.initSchemas = () => {
    glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
}

exports.connect = () => {
    //连接数据库
    mongoose.connect(db)

    let maxConnectTimes = 0;

    return new Promise((resolve, reject) => {
        //增加数据库连接的事件监听
        mongoose.connection.on('disconnected', () => {
            console.log('***********数据库断开*************')
            //进行重连
            if (maxConnectTimes < 3) {
                maxConnectTimes++;
                mongoose.connect(db)
            } else {
                reject()
                throw new Error('数据库出现问题，程序无法搞定，请人为修理。。。。。');
            }
        })

        //数据库出现错误的时候
        mongoose.connection.on('error', err => {
            console.log('***********数据库错误*************')
            if (maxConnectTimes < 3) {
                maxConnectTimes++;
                mongoose.connect(db)
            } else {
                reject()
                throw new Error('数据库出现问题，程序无法搞定，请人为修理。。。。。');
            }
        })

        //链接打开的时候
        mongoose.connection.once('open', () => {
            console.log('MongoDB Connected successfully!')
            resolve();
        })
    })



}