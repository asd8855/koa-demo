
const mongoose = require('mongoose');
const Router = require('koa-router');
let router = new Router;

const qiniu = require('qiniu')

var ACCESS_KEY = 'lotEXV8G7-_IgzYmYcsoMfpWQeCB0ZzFTsVfFWGL'
var SECRET_KEY = 'WPY9tHs2Lh8wSxuH-Jg_zE0xmxXcnPnlFLR8eSXP'

// 注册
router.get('/getUploadToken', async (ctx) => {
    var mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);
    var bucket = "cicadafile"
    var options = {
        scope: bucket,
        expires: 365 * 24 * 60 * 60
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);
    ctx.body = {
        code: 200,
        data: uploadToken,
        message: '请求成功'
    }
})


router.post('/saveImage', async (ctx) => {
    // 得到前端传递过来的数据
    let image = ctx.request.body;
    let obj = {
        PRODUCT_CODE: image.product_code,
        IMAGE_KEY: image.key,
        IMAGE_NAME: image.name,
        IMAGE_URL: image.url,
        STATE: 0
    }

    const Images = mongoose.model('Images');
    let newImage = new Images(obj);
    await newImage.save().then(() => {
        console.log('插入商品信息成功：')
        ctx.body = {
            code: 200,
            data: null,
            message: '请求成功'
        }
    }).catch(err => {
        console.log('插入商品信息失败：' + err);
        ctx.body = {
            code: 500,
            data: null,
            message: '保存失败'
        }
    })
})


router.get('/getAllImages', async (ctx) => {
    try {
        const Images = mongoose.model('Images');
        let result = await Images.find({ STATE: 0 }).exec();
        ctx.body = {
            code: 200,
            data: result,
            message: '请求成功'
        }
    } catch (err) {
        ctx.body = {
            code: 500,
            message: '请求失败'
        }
    }
})

// 子类别
router.get('/deleteImage', async (ctx) => {
    try {
        let id = ctx.query.id;
        const CategorySub = mongoose.model('Images');
        await CategorySub.update({ _id: id }, { $set: { 'STATE': 1 } }).exec();
        ctx.body = {
            code: 200,
            data: null,
            message: '删除成功'
        }
    } catch (err) {
        ctx.body = {
            code: 500,
            message: err
        }
    }
})

module.exports = router;