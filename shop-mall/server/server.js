const express = require('express');
const apilist = require('./apilist.js');
const queryApi = require('./queryApi');
let app = express();

app.all('*',function(req,res,next){
    res.header({
        'Access-Control-Allow-Origin':'*'
    })
    next()
})

apilist(app);
queryApi(app)
//定义接口

app.listen('3000',function(){
    console.log('server start at :3000')
})