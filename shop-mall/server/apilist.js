const fs = require('fs');
const path = require('path');
//定义接口
module.exports = function (app){
    //首页商品列表的接口
    const goodsPath = path.resolve(__dirname + '/goodslist')
    app.get('/index/recommend.action', (req,res) => {
        let list1 = fs.readFileSync(goodsPath + `/list${req.query.page}.json`, 'utf-8');
        setTimeout(() => {
            res.json(list1)
        }, 1000);
   });
   const queryApi = require('./queryApi');
   //分类接口
   app.get('/api/classify',(req,res)=>{
       console.log(req.query)
       queryApi(`/index.php?ctl=goods_class&act=ajaxGetClassList&cid=${req.query.cid}`)
       .then(data=>{
           res.end(data)
       })
   })
}