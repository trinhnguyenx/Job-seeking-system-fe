<template>
  <div id="app">
    <h1>Yêu cầu đặt lại mật khẩu</h1>
    <div class="loader" v-if="isLoading"></div>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Enter email:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="example@gmail.com"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElNotification } from "element-plus";
import { forgotpassword } from "@/services/user.service";
import { useRoute, useRouter } from "vue-router";

const email = ref("");
const isLoading = ref<boolean>(false);
const router = useRouter()

const submitForm = async () => {
  isLoading.value = true;
  try {
    await forgotpassword(email.value);
    ElNotification({
      title: "Success",
      message: "Vui lòng kiểm tra email để lấy lại mật khẩu!",
      type: "success",
    });
    router.push('/login')
  } catch (error) {
    console.log(error);
    ElNotification({
      title: "Error",
      message: "Email not found !",
      type: "error",
    });
  } finally {
    isLoading.value = false;
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding-top: 60px;
}
h1 {
  margin-bottom: 50px;
  margin-left: 20px;
}
.form-group {
  margin-bottom: 20px;
}
label {
  padding-right: 20px;
}
input {
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 100px;
}
button:hover {
  background-color: #0056b3;
}
.loader {
    position: absolute;
    top: 40%;
    left: 50%;
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db; 
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>

