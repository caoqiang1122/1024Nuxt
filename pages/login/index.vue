<template>
  <div>
    <div class="wrapper loginsign"> 
      <div class="item signup"> 
        <div class="form"> 
        <h3 class="loginsign-title">注册新账号</h3> 
        <form class="sui-form"> 
          <div class="control-group"> 
          <label for="inputname" class="control-label">名字</label> 
          <div class="controls"> 
            <input type="text" id="inputname" placeholder="真实姓名或常用昵称" class="input-xlarge" /> 
          </div> 
          </div> 
          <div class="different"> 
          <div class="radio-content"> 
            <div id="a1" class="phone"> 
            <div class="control-group number"> 
              <input type="text" v-model="userInfo.mobile" placeholder="仅支持大陆手机号" class="input-xlarge" /> 
            </div> 
            <div class="control-group code"> 
              <div class="input-append"> 
              <input id="appendedInputButton" type="text" placeholder="短信验证" class="span2 input-large msg-input" /> 
              <button type="button" v-model="code" @click="sendSms()" class="sui-btn msg-btn">获取验证码</button> 
              </div> 
            </div> 
            <div class="control-group"> 
              <label for="inputpassword" class="control-label">密码</label> 
              <div class="controls"> 
              <input type="text" id="inputpassword" placeholder="请输入6-16位密码" class="input-xlarge" /> 
              </div> 
            </div> 
            </div> 
          </div> 
          </div> 
          <div class="control-group btn-signup"> 
          <label class="control-label"></label> 
          <div class="controls"> 
            <label> <input type="checkbox" /><span class="type-text" style="font-size:12px;">同意协议并接受《服务条款》</span> </label> 
            <button type="button" @click="register()" class="sui-btn btn-danger btn-yes">注 册</button> 
          </div> 
          </div> 
        </form> 
        </div> 
      </div> 
      <div class="item"> 
        <div class="form"> 
        <h3 class="loginsign-title">用户登录</h3> 
        <form class="sui-form login-form"> 
          <div class="control-group"> 
          <label for="inputname" class="control-label">手机号：</label> 
          <div class="controls"> 
            <input type="text" id="inputname" v-model="mobile" placeholder="11位手机号" class="input-xlarge" data-rules="required" /> 
          </div> 
          </div> 
          <div class="control-group"> 
          <label for="inputpassword" class="control-label">密码：</label> 
          <div class="controls"> 
            <input type="text" id="inputpassword" v-model="password" placeholder="输入登录密码" class="input-xlarge" /> 
          </div> 
          </div> 
          <div class="controls"> 
          <label> <input type="checkbox" name="remember-me" /><span class="type-text" style="font-size:12px;">记住登录状态</span> </label> 
          <button type="button" @click="login()" class="sui-btn btn-danger btn-yes">登 录</button>
          </div> 
          <div id="weixin"></div>
          <div class="other-methods"> 
          </div> 
        </form> 
        </div> 
      </div> 
    </div>
  </div>
</template>

<script>
import '~/assets/css/page-sj-person-loginsign.css'
// import Auth from '@/util/auth.js'
import { setUser } from '@/util/auth.js'
import userApi from '@/api/user-api.js'
const group_name = 'user'
const api_name = 'user'
export default {
  data () {
    return {
      userInfo: {
        mobile: ''
      },
      code: '',
      mobile: '',
      password: ''
    }
  },
  methods: {
    sendSms () {
      userApi.sendSms (this.userInfo.mobile).then( res => {
        this.$message({
          message: res.data.message,
          type: res.data.flag?'success':'error'
        })
      })
    },
    register () {
      userApi.register (this.userInfo,this.code).then( res => {
        this.$message({
          message:res.data.message,
          type: res.data.flag?'success':'error'
        })
      })
    },
    login () {
      userApi.login(this.mobile,this.password).then( res => {
        if (res.data.flag) {
          //保存用户信息
          setUser(res.data.data.token,res.data.data.name.res.data.avatar)
          // 跳转用户中心
          location.href('/manager')
        }else {
          this.$message({
            message:res.data.message,
            type: 'error'
          })
          this.mobile = ''
          this.password = ''
        }
      })
    }
  },
  mounted () {
    //在需要使用微信登录的地方实例以下JS对象：
    var obj = new WxLogin({
      self_redirect:true,
      id:"weixin", 
      appid: "wx3bdb1192c22883f3", 
      scope: "snsapi_login", 
      redirect_uri: "http://note.java.itcast.cn/weixinlogin",
      state: "",
      style: "",
      href: ""
      })
  },
  // 引入外部js或者css
  head: {
    script:[
      {src: 'http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'}
    ]
  }
}
</script>
