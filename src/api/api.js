import http from '@/utils/http.js'

export default {

  getCityList(data) {
    return http.get('/xh/city/v1/list', data)
  },
  getMovieList(data) {
    return http.get('/xh/movie/v1/hot', data)
  },
  getCityId(data) {
    return http.get('/xh/city/v1/location', data)
  },

  // 获取影片详细信息
  getMovieInfo(data) {
    return http.get('/xh/movie/v1/info/' + data)
  },

  // 根据影片、经纬度、时间查询影院列表
  getCinemaList(data) {
    return http.get('/xh/cinema/v1/page', data)
  },

  // 根据影院、影片、时间查询时间排期
  getPlanDateList(data) {
    return http.get('/xh/plan/v1/list', data)
  },

  // 根据影院、时间查询当天的影片排期
  getPlanMovieList(data) {
    return http.get('/xh/cinema/v1/list', data)
  },

  // 根据场次查询座位
  getSeatList(data) {
    return http.get('/xh/seat/v1/info/' + data)
  },

  // 下单
  confirmOrder(data) {
    return http.post('/order/v1/confirm', data)
  },

  // 提交订单
  submitOrder(data) {
    return http.post('/order/v1/submit', data)
  },

  // 订单列表
  getOrderList(data) {
    return http.get('/order/v1/page', data)
  },

  // 订单详情
  getOrderInfo(data) {
    return http.get('/order/v1/info/' + data)
  }
}
