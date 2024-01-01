<template>
    <div class="error-page">
      <h1>403 Forbidden</h1>
      <p>Xin lỗi, bạn không có quyền truy cập trang này.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Error403',
  });
  </script>
  
  <style scoped>
  .error-page {
    text-align: center;
    padding: 50px;
  }
  </style>