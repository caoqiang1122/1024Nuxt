import request from '~/util/request.js'
const group_name = 'gathering'
const api_name = 'gathering'

export default {
  getHotCity () {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'get'
    })
  }
}