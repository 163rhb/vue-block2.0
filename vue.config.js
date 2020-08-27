
let proxyObj={};
proxyObj['/ws'] = {
    ws: true,
    target: "ws://localhost:8082"
};
/*changOrign是改变请求头的意思，把它改成target*/
proxyObj['/']={
    ws:false,
    target:'http://localhost:8082',
    changeOrigin: true,
    pathRewrite:{
        '^/':'',
    }

}
module.exports={
    devServer:{
        host:'0.0.0.0',
        port:8080,
        proxy:proxyObj,
    },

};




