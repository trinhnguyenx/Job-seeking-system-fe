<script setup lang="ts">
import { useAuthStore } from "../../stores/auth"
import { useRouter } from "vue-router"
import { ref } from "vue"
import { ILogin, } from "../../types/user"
import { loginApi } from "../../services/user.service"
import { initAuthStore } from '@/stores'
import {jwtDecode} from 'jwt-decode';
import { ElNotification } from "element-plus"
import { getInfo } from "@/services/user.service"

const user = ref<ILogin>({
    email: "",
    password: ""
})
const auth = useAuthStore()
const router = useRouter()
const submit = async () => {
    try {
        await loginApi({ email: user.value.email, password: user.value.password }).then((res) => {
            const data = res["data"]
            localStorage.setItem("access_token", data.data.access_token)
            localStorage.setItem("refresh_token", data.data.refresh_token)
            
            if(data.data.access_token) {
                try {
                    const decodedToken = jwtDecode(data.data.access_token) as { role: string };
                    const roles = decodedToken.role;
                    console.log(roles);
                    if(roles === 'admin') {
                        initAuthStore()
                        router.push('/user')
                    } else {
                        initAuthStore()
                        router.push('/user')
                    }
                } catch(error) {
                    console.log(error)
                        ElNotification({
                        title: "Error",
                        message: "Login Failed!",
                        type: "error",
                        })
                }
            }

        })
    } catch (error) {
        console.log(error)
    }
};
</script>

<template>
    <div class="login-container">
        <div class="login-container__form">
            <h1 class="login-container__form__title">Sign in to your dashboard</h1>
            <div class="login-container__form__content">
                <el-input v-model="user.email" placeholder="Enter your username" class="login-container__form__content__input" />
                <el-input v-model="user.password" type="password" placeholder="Enter your password" show-password class="login-container__form__content__input" />
                <div class="login-container__form__content__co"></div>
                <el-button @click="submit" class="login-container__form__content__submit" type="primary">Sign in</el-button>
                <div class="login-container__form__content__register">
                    <div>
                    <span>Don't have an account?</span>
                    <el-link type="primary" href="/register">Register</el-link>
                    </div>
                    <div>
                    <el-link type="primary" href="/forgotpassword">Forgot Password</el-link>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    &__form {
        width: 35%;
        margin: auto;
        margin-top: 100px;
        background: #fff;
        padding: 40px 20px 60px;
        box-shadow: $shadow-primary;
        border-radius: 12px;
        &__title {
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 2rem;
            margin-bottom: 2rem;
            text-align: center;
        }
        &__content {
            padding: 0 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            &__co {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
            }
            &__input,
            &__submit {
                width: 100%;
            }
            &__register {
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                    font-size: 12px;
                    padding-right: 8px;
                }
                
            }
        }
    }
}
</style>
