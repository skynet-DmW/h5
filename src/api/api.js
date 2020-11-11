import http from '@/utils/http.js'

export default {

  login(data) {
    return http.post('/xh/city/v1/list', data)
  }

}
