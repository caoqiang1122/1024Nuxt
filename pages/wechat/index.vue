<template>
  <div>

  </div>
</template>

<script>
import wechatApi from '@/api/wechat.js'
import { getUrlParams } from '@/util/params.js'
import { setUser } from '@/util/auth.js'
export default {
  mounted () {
    //1.获取参数code的值
    let code = getUrlParams('code')
    //2.调用api
    wechatApi.getAccessToken(code).then( res => {
      let access_token = res.data.access_token
      let openid = res.data.openid
      wechatApi.getUserInfo( access_token, openid).then( res2 => {
        let nickName = res2.data.nickname
        let headImgUrl = res.data.headImgUrl
        setUser(access_token,nickName,headImgUrl)
        location.href('/')
      })
    })
  }
  
}
</script>
