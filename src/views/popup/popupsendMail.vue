<template>
  <div class="popup-wrapper">
    <div class="overlay"></div>
    <div class="popup-content">
      <div class="loader" v-if="isLoading"></div>
      <div>
        <h2> Send job to your email !</h2>
      </div>
      <div class="box-input">
        <label for="username">Họ và tên *</label>
        <input type="text" id="username" readonly :value="authStore.getUserName()">
        <label for="email">Email *</label>
        <input
          v-model = "sendMail.mailTo"
          type="text"
          id="email"
          placeholder="Enter your mail..."
        />
        <label for="phoneNumber">Phone Number *</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Enter phone number..."
        />
      </div>
      <div class="box-button">
            <button @click="handleSendMail">Send Mail</button>
            <button @click="emits('closePopup')">Cancel</button>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
import { ISendMail } from "@/types/user";
import { ElNotification } from "element-plus"
import { sendMailApi } from "@/services/user.service"


const authStore = useAuthStore();

const emits = defineEmits<{
  (e: "closePopup"): void;
}>();
const sendMail = ref<ISendMail>({
    mailTo: "",
    link: window.location.href
})
const isLoading = ref<boolean>(false)
const handleSendMail = async () => {
      isLoading.value = true
      console.log(sendMail.value.mailTo)
      try {
        await sendMailApi(sendMail.value)
        ElNotification({
            title: "Success",
            message: "Send mail succesfully!",
            type: "success",
        })
        emits('closePopup')
    } catch (error) {
        ElNotification({
            title: "Error", 
            message: "Send mail failed!",
            type: "error",
        })
        console.error(error)
        emits('closePopup')
    } finally {
        isLoading.value = false;
    }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9001;
}

.popup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9002; /* Đảm bảo popup luôn ở trên cùng */
}

.popup-content {
  position: relative;
  width: 500px;
  height: 370px;
  background-color: #fff;
  z-index: 9003;
  border-radius: 24px;
  padding: 20px;
}
.popup-content h2 {
  padding-bottom: 20px;
}
.box-input input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

.box-input input[readonly] {
  background-color: #f9f9f9;
  cursor: not-allowed;
  opacity: 0.7;
}
.box-input label {
  font-size: 14px;
  margin-bottom: 10px;
}
.box-button button {
    padding: 10px 20px;
    background-color: #2563eb;
    border-radius: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
  }
  .box-button button:hover {
    background-color: #07379e;
  }
  .box-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
}
.loader {
    position: absolute;
    top: 45%;
    left: 45%;
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
