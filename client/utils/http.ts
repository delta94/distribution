import actions from 'client/actions'
import axios, { AxiosRequestConfig } from 'axios'
export interface AjaxConfigProps extends AxiosRequestConfig {
  [field: string]: any
}
type RequestTypeProps = 'GET' | 'POST' | 'DELETE' | 'PUT'
const http = (url: string, type: RequestTypeProps, config: AjaxConfigProps = {}) => {
  let data: any
  if (config instanceof Array) {
    config = {}
    config.data = data
  }
  data = config.data || config || undefined
  const params = config.params
  const headers = Object.assign({}, config.headers, {
    token: APP.token,
    from: 2,
    ContentType: config.contentType !== undefined ? config.contentType : 'application/json; charset=utf-8',
  })
  let ajaxConfig: AjaxConfigProps = {
    url: '/sys' + url,
    method: type,
    headers,
    data,
    params
  }
  return axios(ajaxConfig).then((res) => {
    APP.dispatch(actions.loading(false))
    return res.data
  }, function (err) {
    APP.dispatch(actions.loading(false))
    if (err.response.status === 500) {
      APP.toast('服务端异常')
    }
    return Promise.reject(err)
  })
}
export default http
