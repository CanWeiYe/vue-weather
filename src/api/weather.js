import request from '@/utils/request'

export function getPrecipitationForecast() {
  return request({
    baseURL: 'http://localhost:8181',
    url: 'forecast/precipitation',
    method: 'get'
  })
}


export function getCurrentWeather(useIp,keyword) {
  return request({
    baseURL: 'http://localhost:8181',
    url: 'current/weather',
    method: 'get',
    params:{useIp,keyword}
  })
}
