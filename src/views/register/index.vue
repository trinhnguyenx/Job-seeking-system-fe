<script setup lang="ts">
import { useAuthStore } from "@/stores/auth"
import { useRouter } from "vue-router"
import { ref} from "vue"
import { ISignUp } from "@/types/user"
import { registerApi } from "@/services/user.service"
import { ElNotification } from "element-plus"

const auth = useAuthStore()
const router = useRouter()

const user = ref<ISignUp>({
    email: "",
    name: "",
    password: "",
    avatar: "",
    age: 0
})
const isEnterValue = ref<boolean[]>([false])
const isMatchPassword = ref<boolean>(false)
const rePassword = ref<string>("")

const signUp = async () => {
    try {
        if (!checkInput()) {
            console.log("hihii")

            return
        }
        if (rePassword.value != user.value.password) {
            isMatchPassword.value = true
            return
        }
        isMatchPassword.value = false
        await registerApi(user.value)
        ElNotification({
            title: "Success",
            message: "Create user succesfully!",
            type: "success",
        })
        router.push("/login")
    } catch (error) {
        ElNotification({
            title: "Error", 
            message: "Create user failed!",
            type: "error",
        })
        console.error(error)
    }
}

const checkInput: () => boolean = () => {
    isEnterValue.value[0] = !user.value.email
    isEnterValue.value[1] = !user.value.name
    isEnterValue.value[2] = !user.value.password
    isEnterValue.value[3] = !rePassword.value
    return !isEnterValue.value.some((value) => value === true)
}
</script>

<template>
    <div class="login-container">
        <div class="login-container__form">
            <h1 class="login-container__form__title">Sign up</h1>
            <div class="login-container__form__content">
                <div>
                    <el-input v-model="user.email" validate-event type="email" placeholder="Your Email" class="login-container__form__content__input" />
                    <span class="login-container__form__content__error" v-show="isEnterValue[0]">Please enter your name</span>
                </div>
                <div>
                    <el-input v-model="user.name" placeholder="Your name" class="login-container__form__content__input" />
                    <span class="login-container__form__content__error" v-show="isEnterValue[1]">Please enter your name</span>
                </div>
                <div>
                    <el-input v-model="user.password" type="password" placeholder="Your password" show-password class="login-container__form__content__input" />
                    <span class="login-container__form__content__error" v-show="isEnterValue[2]">Please enter your password</span>
                </div>
                <div>
                    <el-input v-model="rePassword" type="password" placeholder="Confirm Your password" show-password class="login-container__form__content__input" />
                    <span class="login-container__form__content__error" v-show="isEnterValue[3]">Please enter your confirm password</span>
                </div>
                <span class="login-container__form__content__error" v-show="isMatchPassword">The entered passwords do not match. Try again.</span>
                <el-button @click="signUp" class="login-container__form__content__submit" type="primary">Sign up</el-button>
                <div class="login-container__form__content__login">
                    <span>Already have an account?</span>
                    <el-link type="primary" href="/login">Sign in</el-link>
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
            &__login {
                span {
                    font-size: 12px;
                    padding-right: 8px;
                }
            }
            &__error {
                font-size: 12px;
                color: red;
            }
        }
    }
}
</style>
