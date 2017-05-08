import axios from 'axios'

export default {
  get: (param)=>{
    console.log(param)
    axios({
      url: param.url,
      method: param.method,
      data:param.data
    })
    .then(function (res) {
      param.callback(res)
    })
  }
}