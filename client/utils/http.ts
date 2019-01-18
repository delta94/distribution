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
  const headers = Object.assign({}, config.headers, {
    // token: `${APP.token}`,
    from: 4,
    ContentType: config.contentType !== undefined ? config.contentType : 'application/json; charset=utf-8',
  })
  let ajaxConfig: AjaxConfigProps = {
    url: '/sys' + url,
    method: type,
    headers,
    data
  }
  return axios(ajaxConfig).then((res) => {
    return res.data
  }, (err) => {
    return err
  })
}
export default http