<template>
  <div class="reset-container">
    <h2>Đặt lại mật khẩu</h2>

    <div v-if="error" class="error-message">{{ error }}</div>

    <div class="input-group">
      <label for="new-password">Mật khẩu mới:</label>
      <input
        type="password"
        id="new-password"
        v-model="newPassword"
        placeholder="Nhập mật khẩu mới của bạn"
      />
    </div>
    <div class="input-group">
      <label for="confirm-password">Nhập lại mật khẩu:</label>
      <input
        type="password"
        id="confirm-password"
        v-model="confirmPassword"
        placeholder="Nhập lại mật khẩu mới"
      />
    </div>

    <button @click="handleResetPass">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { jwtDecode } from "jwt-decode";
import { ElNotification } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import { resetpassword } from "../../services/user.service";
import { IResetPass } from "../../types/user";

const route = useRoute();
const router = useRouter();
const error = ref("");
const newPassword = ref("");
const confirmPassword = ref("");
const handleResetPass = async () => {
  try {
    const currentTime = Math.floor(Date.now() / 1000);
    const tokenQuery = route.query.token;
    if (typeof tokenQuery === "string") {
      const decodedToken = jwtDecode(tokenQuery) as IResetPass;
      const email = decodedToken.email;
      const exp = decodedToken.exp;
      const iat = decodedToken.iat;
      console.log(decodedToken.email);
      if (newPassword.value !== confirmPassword.value) {
        error.value = "Mật khẩu không đúng";
      } else if (exp > currentTime) {
        try {
          await resetpassword(email, confirmPassword.value);
          ElNotification({
            title: "Success",
            message: "Reset password success !",
            type: "success",
          });
          router.push("/login");
        } catch {
          console.log(error);
          ElNotification({
            title: "Error",
            message: "Email not found !",
            type: "error",
          });
        }
      }
    } else {
      error.value = "Token đã hết hạn!";
    }
  } catch (err) {
    console.log(err);
    error.value = "Đã có lỗi xảy ra!";
  }
};
</script>

<style scoped>
.reset-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
}

input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-bottom: 15px;
  text-align: center;
}
</style>
