import axios from 'axios'

export default {

  /**
   * get方法，对应get请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },

  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} data [请求时携带的参数]
   */
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  /**
   * put方法，对应put请求
   * @param {String} url [请求的url地址]
   * @param {Object} data [请求时携带的参数]
   */
  put(url, data) {
    return new Promise((resolve, reject) => {
      axios.put(url, data)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  /**
   * patch方法，对应patch请求
   * @param {String} url [请求的url地址]
   * @param {Object} data [请求时携带的参数]
   */
  patch(url, data) {
    return new Promise((resolve, reject) => {
      axios.patch(url, data)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  /**
   * delete方法，对应delete请求
   * @param {String} url [请求的url地址]
   * @param {Object} data [请求时携带的参数]
   */
  delete(url, data) {
    return new Promise((resolve, reject) => {
      axios.delete(url, data)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  /**
   * postFormData方法，对应post请求，用来提交文件+数据
   * @param {String} url [请求的url地址]
   * @param {Object} data [请求时携带的参数]
   */
  postUpload(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        headers: {
          'Content-Type': 'multipart/form-data'// ;boundary=----WebKitFormBoundaryQ6d2Qh69dv9wad2u
        },
        transformRequest: [function (data) { // 在请求之前对data传参进行格式转换
          const formData = new FormData()
          Object.keys(data).forEach(key => {
            formData.append(key, data[key])
          })
          return formData
        }],
        url,
        method: 'post',
        data: data
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },

  getBaseUrl() {
    return axios.defaults.baseURL
  }
}
