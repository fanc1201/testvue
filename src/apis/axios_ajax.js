import axios from "axios";

const base = "http://localhost:5197/School/";

export default function(url,params,result){
  var req =  axios
  .post(base+url)
  .then(function (response) {
console.log(response.data.data);
result = response.data.data;

})
  .catch(function (error) { // 请求失败处理
    console.log(error);
  });

  complete(req, () => {console.log(result)});
  
}

function complete(req, callback) {
  req.then(callback, callback);
}




