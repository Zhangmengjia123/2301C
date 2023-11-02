<script setup lang='ts'>
    import { ref,reactive } from 'vue'
    import {useRouter,useRoute} from 'vue-router'
    import { showSuccessToast, showFailToast } from 'vant';
    const checked = ref('');
    let phone = ref("")
    let Captcha = ref("")
    let router=useRouter()
    const tologin = () => {
        if (phone.value == '' || Captcha.value=='') {
            showFailToast('登录失败');
            return false
        }
    else {
        showSuccessToast('登录成功');

        router.push('/index')

    }
}


</script>
<template>
    <div>

        <h3>验证码登录</h3>
        <p>为了你的账号安全，请使用手机号登录</p>

        <!-- 可以使用 CellGroup 作为容器 -->
        <van-cell-group inset>
            <van-field v-model="phone" label="中国+86" placeholder="请输入手机号" />
        </van-cell-group>

        <van-cell-group inset>
            <van-field v-model="Captcha" center clearable placeholder="请输入密码">
                <template #button>
                    <!-- <van-button size="small" type="primary" @click="get">获取验证码</van-button> -->
                </template>
            </van-field>
        </van-cell-group>
        <van-button type="primary" block style=" width: 95%;margin: 0 auto;border: 0; background-color:#a3cdbf ;"
            @click="tologin">确定</van-button>
        <van-radio-group v-model="checked" style="   position: absolute; bottom: 80px;left: 30px;">
            <van-radio name="" style="font-size:14px ; color: #666;">阅读并同意<span>《用户协议》</span>和<span>《隐私政策》</span>
            </van-radio>
        </van-radio-group>
        <p><span>密码登录</span><span>免费注册</span></p>
    </div>
</template>
<style lang='scss' scoped>
    h3 {
        margin: 30px;
    }

    p {
        margin: 15px;
        font-size: 14px;
    }

    span {
        color: #6591eb;

    }
</style>