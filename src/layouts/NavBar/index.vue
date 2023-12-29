<script setup lang="ts">
import { useRouter } from "vue-router"

    const router = useRouter()
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
</script>
<template>
    <div class="container-navbar-left">
        <div class="ava-nav-left">
            <img src="../../images/logodashboard.png" alt="Logo">
        </div>
        <div class="list-dashboard">    
            <div class="dashboard" @click="goToJob()">
                    <span class="icon"><el-icon><Operation /></el-icon></span>
                    <a >Thông tin việc làm</a>
            </div>
            <div class="dashboard" @click="goToUser()">
                    <span class="icon"><el-icon><Odometer /></el-icon></span>
                    <a >Thông tin tài khoản</a>
            </div>
            <div class="dashboard" @click="goToDashBoard()">
                    <span class="icon"><el-icon><User /></el-icon></span>
                    <a >Quản lí người dùng</a>
            </div>
        </div>  
    </div>
</template>
<style lang="scss" scoped>
.container-navbar-left {
    max-width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #e0e0e0; 
    align-items: center;
    gap: 20px;
    padding: 15px;
}
.ava-nav-left img {
    max-width: 200px;
    max-height: 200px;
}
.container-navbar-left a {
  text-decoration: none;
  font-size: 14px;
  color: gray;
}
.dashboard .icon {
    text-align: center;
    padding-right: 10px;
}
.dashboard .icon:hover {
    cursor: pointer;
}
.dashboard {
    padding: 20px;
    cursor: pointer;
}
.dashboard:hover {
    background-color: #e0e0e0;
}

</style>