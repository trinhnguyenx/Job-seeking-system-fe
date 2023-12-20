<template>
  <div class="container-job-detail">
    <div class="box-detail">
      <div class="title-img">
        <img
          src="https://dxwd4tssreb4w.cloudfront.net/web/images/default_banner_2.svg"
          alt="#"
        />
      </div>
      <!--  -->
      <div class="title-job">
        <img src="http://www.gravatar.com/avatar/?d=mp" alt="#" />
        <div class="title-job-right">
          <h3>{{ jobdetail?.Title }}</h3>
          <p>{{ jobdetail?.Company }}</p>
        </div>
      </div>
      <!--  -->
      <div class="center-job-title">
        <div class="title-icon">
          <div class="icon">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.25 7.847c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652zm1.5 5.001v3.304c.936-.255 1.5-.974 1.5-1.652c0-.678-.564-1.397-1.5-1.652"
            />
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75"
              clip-rule="evenodd"
            />
          </svg>
          </div>
          <p class="blue-text">{{ jobdetail?.Salary }}</p>
        </div>
        <div class="title-icon">
          <div class="icon">
            <el-icon><Suitcase /></el-icon>
          </div>
          <p>{{ jobdetail?.YOE }}</p>
        </div>
        <div class="title-icon">
          <div class="icon">
            <el-icon><Calendar /></el-icon>
          </div>
          <p> Ngày đăng tuyển {{ jobdetail?.Posting_date }}</p>
        </div>
      </div>
      <!--  -->
      <div class="nuxt-link">
        <div class="focus-link">
          <li><Nuxt-link to="#">Mô tả</Nuxt-link></li>
        </div>
        <li><Nuxt-link to="#">Quyền lợi</Nuxt-link></li>
        <li><Nuxt-link to="#">Kỹ năng yêu cầu</Nuxt-link></li>
        <li><Nuxt-link to="#">Chi tiết công việc</Nuxt-link></li>
        <li><Nuxt-link to="#">Liên hệ</Nuxt-link></li>
        <li><Nuxt-link to="#">Về Công ty</Nuxt-link></li>
      </div>
      <!--  -->
      <!-- <div class="detail-job">
        {{ formatText(jobdetail?.Describe_job) }}
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onBeforeMount } from "vue";
import { getJobID } from "../../services/user.service";
import type { IJob } from "../../types/auth";

const route = useRoute();
onBeforeMount(() => {
  getJobDetail();
});
const jobdetail = ref<IJob | null>(null);

const getJobDetail = async (): Promise<void> => {
  try {
    const id = route.params.id;
    const res = await getJobID(id.toString());
    jobdetail.value = res.data;
    console.log(jobdetail.value, "ddd", id.toString());
  } catch (error) {
    console.log("error", error);
  }
};
// const formatText = (inputText: any) => {
//     return inputText.replace(/\. /g, '.\n');
// }
</script>
<style scoped>
  .container-job-detail {
    margin: 0;
    overflow-x: hidden;
    margin: 50px 280px;
    border-radius: 16px;
    box-shadow: 5px 5px 5px 0px rgb(0,0,0, 0.5);


  }
  .box-detail {
    width: 100%;
    height: 100%;
  }
  .title-img {
    width: 100%;
    z-index: 100;
  }
  .title-job {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 10px;
    margin-right: 100px;
  }
  .title-job-right {
    margin-top: 10px;
    margin-right: 100px;
  }
  .title-job-right p {
    font-size: 14px;
  }
  .title-job img {
    left: 23%;
    width: 90px;
    height: 90px;
    border-radius: 16px;
    
  }
  .center-job-title {
    padding-top: 20px;
    font-size: 14px;
    
  }
  .icon {
    font-size: 16px;
    font-family: sans-serif;
  }
  .title-icon {
    display: flex;
    margin-left: 50px;
    gap: 20px;
    padding-top: 10px;
  }
  .blue-text {
    color: #0269DB ;
  }
  .nuxt-link {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    list-style-type: none;
    font-size: 14px;
    color: #64748B;
    padding-top: 50px;
    margin-left: 40px;
    padding: 10px;
    border-bottom: 1px solid black;
  }
  .nuxt-link li:hover {
    color: #0269DB ;
    cursor: pointer;
  }
  .focus-link {
    color: #0269DB ;
  }
  
</style>
