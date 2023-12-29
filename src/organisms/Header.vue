<script setup lang="ts">
import { onMounted, ref, watch } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "../stores/auth"

defineProps<{}>()
const router = useRouter()
const authStore = useAuthStore()

const goToLogin: () => void = () => {
    router.push("/login")
}
const goToDashBoard: () => void = () => {
    router.push("/dashboard")
}
const goToJob: () => void = () => {
    router.push("/mainjob")
}
const goToUser: () => void = () => {
    router.push("/user")
}
const goToRegister: () => void = () => {
    router.push("/register")
}

const isVisble = ref<boolean>(false)
const toggleMenu = (): void => {
    isVisble.value = !isVisble.value
}
const isLogin = ref<boolean | undefined>(false)

const logout: () => Promise<void> = async () => {
    try {
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        authStore.setAuthStore({
            user: {
                email: "",
                password: "",
            },
            isLoggedIn: false,
        })
        router.push("/login")
    } catch (error) {
        console.error(error)
    }
}
isLogin.value = authStore.getIsLoggedIn()
</script>

<template>
    <div class="nav-container">
        <div class="nav-container__body">
            <div class="logo-job"> 
                <img src="../images/logoFE.png" alt="Việc làm">
            </div>
            <div class="nav-container__body__action" v-if="!authStore.getIsLoggedIn()">
                <el-button type="primary" @click="goToLogin">Login</el-button>
                <el-button type="primary" @click="goToRegister" plain>Register</el-button>
                <el-button type="primary" @click="goToJob" plain>List job</el-button>
            </div>
            <div class="nav-container__body__info" v-else>
                <div class="avatar-flex">
                    <img :src="authStore.getAvatar()" alt="avatar">
                <p>{{ authStore.getUserName() }}</p>
                </div>
                    <div class="dropdown">
                        <button class="dropbtn">Menu <el-icon><CaretBottom /></el-icon></button>
                            <div class="dropdown-content">
                                <a @click="goToJob()">Việc làm</a>
                                <a @click="goToUser()">Tài khoản</a>
                                <a @click="logout()" >Đăng xuất</a>
                            </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ebeef5;
    background-color: #483AA0;

    &__body {
        width: 100%;
        max-width: 1440px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 20px;

        &__logo {
            font-size: 1.5rem;
            font-weight: 700;
            // @include gradient-text;
            color: $color-danger;
        }

        &__action {
            display: flex;
        }
        &__info {
            display: flex;
            align-items: center;
            gap: 5px;
            &__icon-right {
                cursor: pointer;
                &:hover {
                    transform: translateX(10px);
                    transition: all 0.2s linear;
                }
            }
        }
    }
}
.menu-main {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    font-size: 12px;
    background-color: #483AA0;
    color: white;
    padding: 19px;
}
.menu-main:hover{
    background-color: #292069;
}
.menu-main span {
    padding-right: 4px;
}
.logo-job img {
    width: 150px;
    height: 50px;

}
.nav-container__body__info img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.nav-container__body__info p {
    font-size: 12px;
    color: white;
}
.avatar-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 12px 5px;
    cursor: pointer;
}
.avatar-flex:hover {
    background-color: #292069;
    text-align: center;
}
.dropbtn {
  background-color: #483AA0;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
.dropbtn:hover {
    background-color: #292069;
}

.dropdown {
  position: relative;
  display: inline-block;
  font-size: 12px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  top: 95%;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  cursor: pointer;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
