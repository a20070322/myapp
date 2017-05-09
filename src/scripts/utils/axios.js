import axios from 'axios'

export default {
  get: (param)=>{
    axios({
      url: param.url,
      method: param.method,
      data:param.data
    })
    .then(function (res) {
      param.callback(res)
    })
  },
  post:(param)=>{
    axios({
      url: param.url,
      //请求方式
      method: param.method,
      //请求头
      headers:param.headers,
      // request body
      data:param.data
    })
    .then(function (res) {
      param.callback(res)
    })
  }
}