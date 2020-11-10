
const mongoose = require('mongoose');
const Router = require('koa-router');
let router = new Router;


router.post('/save', async (ctx) => {
    // 得到前端传递过来的数据
    let info = ctx.request.body;
    let obj = {
        title: info.title,
        detail: info.detail,
        state: 0
    }
    const Agreement = mongoose.model('Agreement');
    let newAgreement = new Agreement(obj);
    await newAgreement.save().then(() => {
        ctx.body = {
            code: 200,
            data: null,
            message: '请求成功'
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            data: null,
            message: '保存失败'
        }
    })
})


router.get('/getList', async (ctx) => {
    try {
        const Agreement = mongoose.model('Agreement');
        let result = await Agreement.find({ state: 0 }).exec();
        ctx.body = {
            code: 200,
            data: result,
            message: '请求成功'
        }
    } catch (err) {
        ctx.body = {
            code: 500,
            data: null,
            message: '保存失败'
        }
    }

})

router.get('/getDetail/:id', async (ctx) => {
    let id = ctx.params.id
    console.log('id', id)
    try {
        const Agreement = mongoose.model('Agreement');
        let result = await Agreement.findOne({ _id: id, state: 0 }).exec();
        ctx.body = {
            code: 200,
            data: result,
            message: '请求成功'
        }
    } catch (err) {
        ctx.body = {
            code: 500,
            data: null,
            message: '保存失败'
        }
    }

})


module.exports = router;