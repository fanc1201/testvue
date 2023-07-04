//引入我们二次封装的axios.js文件
//import https from "./axios.js";

import https from "./axios_ajax.js";


export const getNvrTreeNodeList = function(params) {
    let url = "http://localhost:5197/School/SchoolClass/All";
    return https(url, params);
};