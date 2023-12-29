<template>
    <div  class="popup-wrapper">
      <div class="overlay"></div>
      <div class="popup-content">
        <div>
            <h2>Vui lòng đăng nhập !</h2>
        </div>
        <div class="box-button">
            <button @click="gotoLogin">OK</button>
            <button @click="emits('closePopup')">Cancel</button>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const gotoLogin = () => {
    router.push('/login')
}
  
  const emits = defineEmits<{
	(e: "closePopup"): void;
}>();
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
    width: 300px;
    height: 250px;
    background-color: #fff;
    z-index: 9003;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
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
}

  </style>
  