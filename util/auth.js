import Cookie from 'js-cookie'
const TokenKey = 'User-Token'
const NameKey = 'User-Name'
const Avatar = 'User-Avatar'

// export default {
//   setUser(token,name,avatar) {
//     Cookie.set(TokenKey,token)
//     Cookie.set(NameKey,name)
//     Cookie.set(Avatar,avatar)
//   }
// }

// 对应大括号的引入方式
export function setUser(token,name,avatar) {
  Cookie.set(TokenKey,token)
  Cookie.set(NameKey,name)
  Cookie.set(Avatar,avatar)
}

export function getUser(){
  return {
    token: Cookie.get(TokenKey),
    name: Cookie.get(NameKey),
    avatar: Cookie.get(Avatar)
  }
}

export function removeUser () {
  Cookie.remove(TokenKey)
  Cookie.remove(NameKey)
  Cookie.remove(Avatar)
}