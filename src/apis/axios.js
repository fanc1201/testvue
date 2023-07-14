import axios from "axios";
import Qs from "qs";
// import storage from "./cookie";
// import router from "../router";
import { message } from "ant-design-vue";
export default function(
  path,
  params,
  method = "get",
  headerType = "json",
  responseType = "json",
  basePath = "http://localhost:5197/School/"
) {
  let baseURL = "";
  let headers = {};
  let data = {};
  baseURL = basePath;
  //post请求
  if (method === "post") {
    if (headerType === "json") {
      axios.defaults.headers["Content-Type"] = "application/json;charset=UTF-8";
      data = params;
    } else if (headerType === "form") {
      axios.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded;charset=UTF-8";
      data = Qs.stringify(params);
    } else if (headerType === "file") {
      axios.defaults.headers["Content-Type"] =
        "multipart/form-data;charset=UTF-8";
      data = params;
    }
  }

  //get请求
  if (method === "get") {
    if (headerType == !"json") {
      axios.defaults.headers["Content-Type"] =
        "application/x-www-form-urlencoded;charset=UTF-8";
    }
    data = Qs.stringify(params);
    path = path + "?" + data;
    data = {};
  }
  // 请求拦截
  axios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  let antMessage = document.getElementsByClassName("ant-message-notice");

  //返回数据拦截器
  axios.interceptors.response.use(
    response => {
      if (response.status == 200 && response.data.type) {
        console.log(response);
        return response;
      }
      if (response.data.status == 405) {
        if (!antMessage.length) {
          message.error(response.data.message);
          setTimeout(() => {
            router.push("/");
          }, 800);
        }
        return false;
      } else if (response.data.status != 200) {
        if (!antMessage.length) {
          message.error(response.data.message);
          return false;
        }
      }
      return response;
    },
    err => {
      console.log(err);
      // http请求错误
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = "请求错误(400)";
            break;
          case 401:
            err.message = "未授权，请重新登录(401)";
            setTimeout(() => {
              router.push("/");
            }, 800);
            break;
          case 403:
            err.message = "拒绝访问(403)";
            setTimeout(() => {
              router.push("/");
            }, 800);
            break;
          case 404:
            err.message = "请求出错(404)";
            break;
          case 408:
            err.message = "请求超时(408)";
            break;
          case 500:
            err.message = "服务器错误(500)";
            break;
          case 501:
            err.message = "服务未实现(501)";
            break;
          case 502:
            err.message = "网络错误(502)";
            break;
          case 503:
            err.message = "服务不可用(503)";
            break;
          case 504:
            err.message = "网络超时(504)";
            break;
          case 505:
            err.message = "HTTP版本不受支持(505)";
            break;
          default:
            err.message = `连接出错(${err.response.status})!`;
        }
      } else {
        err.message = "连接服务器失败!";
      }
      if (!antMessage.length) {
        // message.error(err.message);
      }
      return Promise.reject(err);
    }
  );

  //发送请求
  return new Promise((resolve, reject) => {
    axios
    .post(baseURL+path)
    .then(function (response) {
  console.log(response.data);
})
    .catch(function (error) { // 请求失败处理
      console.log(error);
    });
  });

    // //发送请求
    // return new Promise((resolve, reject) => {
    //   axios({
    //     baseURL,
    //     url: path,
    //     method,
    //     data: data,
    //     // timeout: 6000,
    //     headers: headers,
    //     responseType: responseType
    //   })
    //     .then(result => {
    //       console.log(result.data);
    //       resolve(result.data);
    //     })
    //     .catch(err => {
    //       reject(err);
    //     });
    // });
}
