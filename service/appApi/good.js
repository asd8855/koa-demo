const mongoose = require('mongoose');
const Router = require('koa-router');
let router = new Router;

const fs = require('fs');

router.get('/insetAllGoodsInfo', async (ctx) => {
    fs.readFile('./dataJson/goods.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        let saveCount = 0;
        const Goods = mongoose.model('Goods');
        data.RECORDS.map((value, index) => {
            if (value.IMAGE1 != null) {
                let newGoods = new Goods(value);
                newGoods.save().then(() => {
                    saveCount++;
                    console.log('11111')
                    console.log('插入商品信息成功：' + saveCount)
                }).catch(err => {
                    console.log('22222')
                    console.log('插入商品信息失败：' + err);
                })
            }
        })
        if (err) {
            console.log(err)
        }
    })
    ctx.body = "开始导入商品数据"
})


router.get('/insetAllCategory', async (ctx) => {
    fs.readFile('./dataJson/category.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        let saveCount = 0;
        const Category = mongoose.model('Category');
        data.RECORDS.map((value, index) => {
            let newCategory = new Category(value);
            newCategory.save().then(() => {
                saveCount++;
                console.log('插入分类信息成功：' + saveCount)
            }).catch(err => {
                console.log('插入分类信息失败：' + err);
            })
        })
        if (err) {
            console.log(err)
        }
    })
    ctx.body = "开始导入分类数据"
})


router.get('/insetAllCategorySub', async (ctx) => {
    fs.readFile('./dataJson/category_sub.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        let saveCount = 0;
        const CategorySub = mongoose.model('CategorySub');
        data.RECORDS.map((value, index) => {
            let newCategorySub = new CategorySub(value);
            newCategorySub.save().then(() => {
                saveCount++;
                console.log('插入子分类信息成功：' + saveCount)
            }).catch(err => {
                console.log('插入子分类信息失败：' + err);
            })
        })
        if (err) {
            console.log(err)
        }
    })
    ctx.body = "开始导入子分类数据"
})


// 商品详情
router.get('/getDetailGoodsInfo', async (ctx) => {
    try {
        let goodsId = ctx.query.goodsId;
        const Goods = mongoose.model('Goods');
        let result = await Goods.findOne({ ID: goodsId }).exec();
        ctx.body = {
            code: 200,
            message: result
        }
    } catch (err) {
        console.log('getDetailGoodsInfo', err);
        ctx.body = {
            code: 500,
            message: err
        }
    }
})

// 大类别
router.get('/getCategoryList', async (ctx) => {
    try {
        const Category = mongoose.model('Category');
        let result = await Category.find().exec();
        ctx.body = {
            code: 200,
            message: result
        }
    } catch (err) {
        ctx.body = {
            code: 500,
            message: err
        }
    }
})


// 子类别
router.get('/getCategorySubList', async (ctx) => {
    try {
        let categoryId = ctx.query.categoryId;
        const CategorySub = mongoose.model('CategorySub');
        let result = await CategorySub.find({ MALL_CATEGORY_ID: categoryId }).exec();
        ctx.body = {
            code: 200,
            message: result
        }
    } catch (err) {
        ctx.body = {
            code: 500,
            message: err
        }
    }
})

// 根据商品类别获取商品列表
router.get('/getGoodsListByCategorySubId', async (ctx) => {
    try {
        let categorySubId = ctx.query.categorySubId;
        let pageIndex = ctx.query.pageIndex;
        let pageSize = Number(ctx.query.pageSize);
        let start = (pageIndex - 1) * pageSize;
        const Goods = mongoose.model('Goods');
        let result = await Goods.find({ SUB_ID: categorySubId }).skip(start).limit(pageSize).exec();
        ctx.body = {
            code: 200,
            message: result
        }
    } catch (err) {
        ctx.body = {
            code: 200,
            message: err
        }
    }
})


module.exports = router;