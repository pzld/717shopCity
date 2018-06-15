function jsonp(url,callbackname){
    return new Promise((resolve,reject)=>{
        window[callbackname]= function(data){
            resolve(data)
        }
    })
    let script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}

export default jsonp;