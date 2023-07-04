import axios from "axios";

function https(url,params){
        axios
      .post(url)
      .then(function (response) {
    console.log(response.data.data);
    params = response.data.data;
  })
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
}