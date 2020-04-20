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

router.use('/user', user.routes());
router.use('/goods', goods.routes());



//引入connect
const { connect, initSchemas } = require('./database/init.js')
    //立即执行函数
    ; (async () => {
        await connect()
        initSchemas();
    })()

app.use(async (ctx) => {
    ctx.body = 'hello Koa2'
})

app.listen(3000, () => {
    console.log('http://localhost:3000/')
})