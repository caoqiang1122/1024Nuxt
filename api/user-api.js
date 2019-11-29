import request from '@/util/request.js'
const group_name = "user"
const api_name = "user"

export default {
  sendSms(mobile) {
    return request ({
      url: `/${group_name}/${api_name}/sendSms/${mobile}`,
      method: 'post'
    })
  },
  register (user, code) {
    return request({
      url: `/${group_name}/${api_name}/register/${code}`,
      method: 'post'
    })
  },
  login (mobile,password) {
    return request({
      url: `/${group_name}/${api_name}/login`,
      method: 'post',
      data: {
        mobile,
        password
      }
    })
  }
}