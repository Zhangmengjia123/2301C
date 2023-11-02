<template>
  <div>
    <div class="box" v-if="zhuc">
      <div class="top">
        <h2 style="margin: 10px 0;" v-if="title">账号密码登录</h2>
        <h2 style="margin: 10px 0;" v-else>验证码登录</h2>
        <p style="margin-bottom: 20px;">为了你的账号安全，请使用手机号登录</p>
      </div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="list.mobile" name="用户名" label="中国+86" placeholder="请输入手机号"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-if="title" v-model="list.pwd" type="password" name="密码" placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
          <van-field v-else v-model="list.code" center clearable label="短信验证码" placeholder="请输入短信验证码">
            <template #button>
              <van-button size="small" type="primary" @click="yanzm">发送验证码</van-button>
            </template>
          </van-field>
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button block style="background-color:#a3cdbf ;" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
      <div class="flo">
        <a href="###" @click="yan" v-if="title">验证码登录</a>
        <a href="###" @click="yan" v-else>密码登录</a>
        <a style="margin-left: 20%;" href="###" v-if="title">忘记密码</a>
        <a style="margin-left: 10px;" href="###" @click="zhuc=!zhuc">免费注册</a>
      </div>
    </div>
    <div class="box2" v-else>
      <h2>免费注册</h2>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="list.mobile" name="用户名" label="中国+86" placeholder="请输入手机号"
            :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field  v-model="list.code" center clearable label="短信验证码" placeholder="请输入短信验证码">
            <template #button>
              <van-button size="small" type="primary" >发送验证码</van-button>
            </template>
          </van-field>
          <van-field  v-model="list.pwd" type="password" name="密码" placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
            <van-field  v-model="list.pwd" type="password" name="密码" placeholder="请再次输入密码"
            :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button block style="background-color:#a3cdbf ;" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {yzmAPi,zhuce} from '../request/http'
import { ref, reactive } from 'vue'
const zhuc=ref(true)
const title = ref(true)
const list = reactive({
  mobile: '',
  pwd: '',
  code:''
})
const onSubmit = (values: any) => {
  
};
const yan = () => {
  title.value = !title.value
}
const yanzm=()=>{
  yzmAPi(list.mobile).then(res=>{
    console.log(res.data);
   })
}
const yanz=()=>{
  // zhuce(list).then(res=>{
  //   console.log(res.data);
    
  // })
 
}
</script>

<style lang="scss" scoped>
.box {
  padding: 0 20px;
}
</style>