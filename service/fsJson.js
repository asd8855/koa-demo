const fs = require('fs');

fs.readFile('./goods.json', 'utf8', (err, data) => {
    console.log('data', data);
    let newData = JSON.parse(data);
    let i = 0;
    let pushData = [];
    newData.RECORDS.map((value, index) => {
        console.log(11111);
        if (value.IMAGE1 != null) {
            i++;
            console.log(value.NAME)
            pushData.push(value);
        }
    })
    if (err) console.log('读文件操作失败')
    console.log(i);
    console.log(pushData);
    fs.writeFile('./newGoods.json', JSON.stringify(pushData), (err) => {
        if (err) console.log('写文件操作失败==>', err);
        else console.log('写文件操作成功');
    })
})

