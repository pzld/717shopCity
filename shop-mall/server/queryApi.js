let http = require('http');

function queryApi(url) {
   return new Promise((resolve,reject)=>{
        const options = {
          hostname: 'm.gome.com.cn',
          post: 80,
          path: url,
          method: 'GET',
          headers: {
            //'Content-Type':'application/json',
          }
        };

        let data = '';
        const req = http.request(options, (res) => {
          console.log(`STATUS:${res.statusCode}`);
          res.setEncoding('utf8');
          res.on('data', (chunk) => {
            data += chunk
          });
          res.on('end', () => {
            resolve(data)
            console.log('No more data in response');
          });
        });
        req.on('error', (e) => {
          console.error(`problem with request:${e.message}`)
        })

        req.end()
   })
}

module.exports = queryApi
