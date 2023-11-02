<script setup lang='ts'>
import {ref} from 'vue'

const checked = ref('');


</script>
<template>
    <div>

        <h3>免费注册</h3>
        <!-- <p>为了你的账号安全，请使用手机号登录</p> -->

        <!-- 可以使用 CellGroup 作为容器 -->
        <van-cell-group inset>
            <van-field v-model="phone" label="中国+86" placeholder="请输入手机号" />
        </van-cell-group>

        <van-cell-group inset>
            <van-field v-model="Captcha" center clearable placeholder="请输入4位验证码">
                <template #button>
                    <van-button size="small" type="primary">获取验证码</van-button>
                </template>
            </van-field>
        </van-cell-group>
        <van-field v-model="password1" type="password" placeholder="    请设置8-25位(数字+字母)密码" />
        <van-field v-model="password2" type="password" placeholder="    请再次输入密码" />

        <van-button type="primary" block style=" width: 95%;margin: 0 auto;border: 0; background-color:#a3cdbf ;">确定</van-button>
        <van-radio-group v-model="checked" style="   position: absolute; bottom: 80px;left: 30px;">
            <van-radio name="" style="font-size:14px ; color: #666;">阅读并同意<span>《用户协议》</span>和<span>《隐私政策》</span></van-radio>
          </van-radio-group>
          
    </div>
</template>
<style lang='scss' scoped>

h3{
    margin: 30px;
}
p{
    margin: 15px;
}

span{
    color: #6591eb;

}

</style>