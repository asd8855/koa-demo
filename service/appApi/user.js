
const mongoose = require('mongoose');
const Router = require('koa-router');
let router = new Router;


router.get('/', async (ctx) => {
    ctx.body = '这是用户操作首页'
})

// 注册
router.post('/register', async (ctx) => {
    // 取得Model
    const User = mongoose.model('User');
    // 把从前端接收的POST数据封装成一个新的user对象
    console.log(ctx.request.body);
    let newUser = new User(ctx.request.body);
    // 用mongoose的save方法直接存储，然后判断是否成功，返回相应的结果
    await newUser.save().then(() => {
        // 成功返回code=200，并返回成功信息
        ctx.body = {
            code: 200,
            message: '注册成功'
        }
    }).catch(err => {
        console.log('err==>', err);
        // 失败返回code=500，并返回错误信息
        ctx.body = {
            code: 500,
            message: err || '网络错误'
        }
    })
})

// 登录
router.post('/login', async (ctx) => {
    // 得到前端传递过来的数据
    let loginUser = ctx.request.body;
    let userName = loginUser.userName;
    let password = loginUser.password;
    // 引入User的model
    const User = mongoose.model('User');
    // 查找用户名是否存在，如果存在开始比对密码
    await User.findOne({ userName: userName }).exec().then(async (result) => {
        console.log('result', result);
        if (result) {
            // 当用户名存在时，开始比对密码
            let newUser = new User();
            await newUser.comparePassword(password, result.password).then(isMatch => {
                // 返回比对结果
                if (isMatch) {
                    ctx.body = {
                        code: 200,
                        message: '登录成功'
                    }
                } else {
                    ctx.body = {
                        code: 500,
                        message: '您还未注册，请先注册'
                    }
                }
            }).catch(err => {
                // 出现异常，返回异常
                ctx.body = {
                    code: 500,
                    message: err
                }
            })
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: err
        }
    })

})

module.exports = router;