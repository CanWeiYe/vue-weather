import request from '@/utils/request'

export const baseUrl = 'http://localhost:8181'

export function getPrecipitationForecast() {
  return request({
    baseURL: baseUrl,
    url: 'forecast/precipitation',
    method: 'get'
  })
}


export function getCurrentWeather(useIp,keyword) {
  return request({
    baseURL: baseUrl,
    url: 'current/weather',
    method: 'get',
    params:{useIp,keyword}
  })
}

export function getForecastWeather(useIp,keyword) {
  return request({
    baseURL: baseUrl,
    url: 'forecast/weather',
    method: 'get',
    params:{useIp,keyword}
  })
}

export function getAlarmData() {
  return request({
    baseURL: baseUrl,
    url: 'alarms',
    method: 'get'
  })
}
