import axios from 'axios'

// 返回值处理
axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  console.log('服务器出错啦，请您稍后再试')
  return Promise.reject(error)
})

/**
 * 统一请求接口
 * @param {*} url 请求的接口路径
 * @param {*} params 请求的参数，参数格式以json对象形式
 */
export function fetch (url, params) {
  let formData = new FormData()

  for (let key in params) {
    formData.append(key, params[key])
  }
  if (params.send === 'get') {
    return new Promise((resolve, reject) => {
      axios.get(url, formData)
          .then(response => {
            resolve(response.data)
          }, err => {
            reject(err)
          })
          .catch((error) => {
            reject(error)
          })
    })
  } else {
      return new Promise((resolve, reject) => {
        axios.post(url, formData)
          .then(response => {
            resolve(response.data)
          }, err => {
            reject(err)
          })
          .catch((error) => {
            reject(error)
          })
      })
  }
}

export function axiosConfig (config) {
  axios.defaults.timeout = 5000
}
