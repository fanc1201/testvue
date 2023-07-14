//引入我们二次封装的axios.js文件
//import https from "./axios.js";

import https from "./axios_ajax.js";


export const getNvrTreeNodeList = function(params) {
    let url = "SchoolClass/All";
    var result;
    https(url,params,result);
    setTimeout(() => {
        console.log(result);
    }, 3000);
    
    return result;
};