import axios from 'axios'
export default {
  //调用微信登录外部接口
  getAccessToken(code) {
    return axios.get(`http://localhost:8888/?operation=token&code=${code}`)
  },
  getUserInfo(access_token,openid) {
    return axios.get()
  }
}