const Koa = require('koa')
const app = new Koa();
const Router = require('koa-router');

const bodyParser = require('koa-bodyparser')
app.use(bodyParser());

let router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());

let user = require('./appApi/user.js');
let goods = require('./appApi/good.js');
let upload = require('./appApi/upload.js');
let agreement = require('./appApi/agreement.js');

router.use('/user', user.routes());
router.use('/goods', goods.routes());
router.use('/upload', upload.routes());
router.use('/agreement', agreement.routes());


//引入connect
const { connect, initSchemas } = require('./database/init.js')
    //立即执行函数
    ; (async () => {
        await connect()
        initSchemas();
    })()

// 匹配任何路由
app.use(async (ctx, next) => {
    console.log(new Date())
    // ctx.body = 'hello Koa2'
    await next() // 当前路由匹配完成以后继续向下匹配
    if (ctx.status == 404) {
        ctx.status = 404
        ctx.body = '这是一个 404页面'
    }else {
        
        console.log('当前url',ctx.url,ctx.status)
    }
})

app.listen(3000, () => {
    console.log('http://localhost:3000/')
})