<template>
    <div v-if="showSidebar" class="fixed-sidebar">
        <div class="nuxt-link-side-bar">
        <div class="focus-link">
          <li><a @click="scrollToSection('detail-job')">Mô tả</a></li>
        </div>
        <li><a href="#" @click="scrollToSection('job-benefit')">Quyền lợi</a></li>
        <li><a href="#" @click="scrollToSection('job-experience')">Kỹ năng yêu cầu</a></li>
        <li><a href="#" @click="scrollToSection('job-decription')">Chi tiết công việc</a></li>
        <li><a href="#" @click="scrollToSection('infor-contact')">Liên hệ</a></li>
        <li><a href="#" @click="scrollToSection('about-company')">Về Công ty</a></li>
      </div>
    </div>
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
          <p>Ngày đăng tuyển {{ jobdetail?.Posting_date }}</p>
        </div>
      </div>
      <!--  -->
      <div class="nuxt-link" id="nuxt-link">
        <div class="focus-link">
          <li><a @click="scrollToSection('detail-job')">Mô tả</a></li>
        </div>
        <li><a href="#" @click="scrollToSection('job-benefit')">Quyền lợi</a></li>
        <li><a href="#" @click="scrollToSection('job-experience')">Kỹ năng yêu cầu</a></li>
        <li><a href="#" @click="scrollToSection('job-decription')">Chi tiết công việc</a></li>
        <li><a href="#" @click="scrollToSection('infor-contact')">Liên hệ</a></li>
        <li><a href="#" @click="scrollToSection('about-company')">Về Công ty</a></li>
      </div>
      <!--  -->
      <div class="detail-job" id="detail-job">
        <h2>Mô tả công việc</h2>
        <p v-html="formatText(jobdetail?.Describe_job)"></p>
      </div>
      <!--  -->
      <div class="job-benefit" id="job-benefit">
        <h2>Phúc lợi</h2>
        <p>{{ jobdetail?.Benefits }}</p>
      </div>
      <!--  -->
      <div class="job-experience" id="job-experience">
        <h2>Kinh nghiệm / Kỹ năng</h2>
        <p v-html="formatTextSkill(jobdetail?.Skills)"></p>
      </div>
      <div id="title-decription"><h2 >Mô tả</h2></div>
      <div class="job-decription" id="job-decription">
          <div class="job-decription-left">
            <div class="job-row">
              <p class="job-row-flex">
                <p class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m6 20l1-4H3l.5-2h4l1-4h-4L5 8h4l1-4h2l-1 4h4l1-4h2l-1 4h4l-.5 2h-4l-1 4h4l-.5 2h-4l-1 4h-2l1-4H9l-1 4zm3.5-6h4l1-4h-4z"/></svg>
            </p>
            <p>Mã việc làm</p>
              </p>
            <p class="text-decription">{{ jobdetail?.ID_Job }}</p>
            </div>
            <div class="job-row">
              <div class="job-row-flex">
                <p class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M5.615 20q-.69 0-1.152-.462Q4 19.075 4 18.385V5.615q0-.69.463-1.152Q4.925 4 5.615 4h12.77q.69 0 1.152.463q.463.462.463 1.152v12.77q0 .69-.462 1.152q-.463.463-1.153.463zM12 16.615q.95 0 1.725-.55t1.075-1.45H19v-9q0-.269-.173-.442T18.385 5H5.615q-.269 0-.442.173T5 5.615v9h4.2q.3.9 1.075 1.45t1.725.55"/></svg>
              </p>
              <p>Loại công việc</p>
              </div>
              <p class="text-decription">{{ jobdetail?.Type }}</p>
            </div>
            <div class="job-row">
              <div class="job-row-flex">
              <p class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M6.632 2.447a2.5 2.5 0 0 1 2.736 0l5.406 3.534a.5.5 0 0 1 .006.833l-5.378 3.64a2.5 2.5 0 0 1-2.803 0L2 7.343V10.5a.5.5 0 1 1-1 0v-4c0-.016 0-.033.002-.05a.502.502 0 0 1 .224-.468zM3 11.499V9.226l3.038 2.057a3.5 3.5 0 0 0 3.924 0L13 9.226V11.5a.5.5 0 0 1-.119.324L12.5 11.5l.381.324l-.001.002l-.002.002l-.006.007l-.02.022a5.456 5.456 0 0 1-.323.324c-.22.203-.542.471-.958.74c-.83.536-2.049 1.08-3.57 1.08c-1.523 0-2.741-.544-3.572-1.08a7.09 7.09 0 0 1-.959-.74a5.419 5.419 0 0 1-.322-.324l-.02-.022l-.006-.007l-.002-.002l.38-.325c-.381.323-.38.324-.38.324A.503.503 0 0 1 3 11.5"/></svg>
            </p>
            <p>Học vấn </p>
            </div>
            <p class="text-decription">{{ jobdetail?.Education }}</p>
            </div>
          </div>
          <div class="job-decription-right">
            <div class="job-row">
              <div class="job-row-flex">
                <p class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M17.546 15.48a7 7 0 1 0 4.372 5.454a1 1 0 1 1 1.977-.304a9 9 0 1 1-5.622-7.014a1 1 0 1 1-.727 1.863"/><path d="M14 39v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0"/><path d="M11 34a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m17.902-18.737a7 7 0 0 0-8.853 7.562a1 1 0 1 1-1.986.236a9 9 0 1 1 5.375 7.204a1 1 0 0 1 .791-1.837a7 7 0 1 0 4.673-13.165"/><path d="M32.793 17.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.414 1.414l-7.5 7.5a1 1 0 0 1-1.414 0"/><path d="M40.924 15a1 1 0 0 1-.987-1.013l.05-3.974l-3.974.05a1 1 0 1 1-.026-2l6.026-.076l-.076 6.026a1 1 0 0 1-1.013.987"/></g></svg>
                </p>
                <p>Giới tính</p>
              </div>
              <p class="text-decription">{{ jobdetail?.Sex }}</p>
            </div>
            <div class="job-row">
              <div class="job-row-flex">
                <p class="icon">
                  <el-icon><User /></el-icon>
                </p>
                <p>Tuổi</p>
              </div>
              <p class="text-decription">{{ jobdetail?.Age }}</p>
            </div>
            <div class="job-row">
              <div class="job-row-flex">
                <p class="icon">
                  <el-icon><Grid /></el-icon>
                </p>
                <p>Ngành nghề</p>
              </div>
                <p class="text-decription">{{ jobdetail?.Career }}</p>
            </div>
          </div>
      </div>
      <!--  -->
      <div class="infor-contact" id="infor-contact">
        <h2>Thông tin liên hệ</h2>
        <div class="box-infor">
          <div class="infor-row">
            <div class="icon-row color-1">
              <el-icon><Avatar /></el-icon>
            </div>
            <div class="text-row">
            <span>{{jobdetail?.Contact_with }}</span>
            </div>
          </div>
          <div class="infor-row">
            <div class="icon-row color-2">
              <el-icon><Service /></el-icon>
            </div>
            <div class="text-row">
            <span>{{jobdetail?.Phone_number }}</span>
            </div>
          </div>
          <div class="infor-row">
            <div class="icon-row color-3">
              <el-icon><Location /></el-icon>
            </div>
            <div class="text-row">
            <span>{{jobdetail?.Location}}</span>
            </div>
          </div>
          <div class="infor-row">
            <div class="icon-row color-4">
              <el-icon><ChatLineSquare /></el-icon>
            </div>
            <div class="text-row">
            <span class="job-note">{{jobdetail?.Note }}</span>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="about-company" id="about-company">
        <h2>Về công ty</h2>
          <div>
             <a href="#">{{ jobdetail?.Company }}</a>
          </div>
      </div>
    </div>
  </div>
  <div class="button-back">
    <button @click="backListJob">Trở về</button>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onBeforeMount, computed ,onMounted, onUnmounted } from "vue";
import { getJobID } from "../../services/user.service";
import type { IJob } from "../../types/auth";

const route = useRoute();
const router = useRouter()
onBeforeMount(() => {
  getJobDetail();
});
const backListJob = () => {
  router.push("/mainjob")
}
const showSidebar = ref(false);

const jobdetail = ref<IJob | null>(null);
const getJobDetail = async (): Promise<void> => {
  try {
    const id = route.params.id;
    const res = await getJobID(id.toString());
    jobdetail.value = res.data;
  } catch (error) {
    console.log("error", error);
  }
};
const formatText = (data: any) => {
  if (typeof data !== "string" || !data) {
    return "";
  } else {
    const sentences = data.split(". ");
    const convertedText = sentences.join(".<br>");
    return convertedText;
  }
};
const formatTextSkill = (data: any): string => {
  if (typeof data !== "string" || !data) {
    return "";
  } else {
    const sentences = data.split("-");
    const updatedSentences = sentences.map((sentence, index) => {
      if (index === 1) { 
        return sentence.replace(".", " - ");
      }
      return sentence;
    });
    const convertedText = updatedSentences.join("<br>-");
    
    return convertedText;
  }
};
const scrollToSection = (sectionId: string): void => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
</script>
<style scoped>
.container-job-detail {
  margin: 0;
  overflow-x: hidden;
  margin: 50px 280px;
  border-radius: 16px;
  box-shadow: 5px 5px 5px 0px rgb(0, 0, 0, 0.5);
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
  color: #64748b;
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
}
.title-icon {
  display: flex;
  margin-left: 50px;
  gap: 20px;
  padding-top: 10px;
  color: #64748b;
}
.blue-text {
  color: #0269db;
}
.nuxt-link {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  list-style-type: none;
  font-size: 14px;
  color: #64748b;
  padding-top: 50px;
  margin-left: 40px;
  padding: 10px;
  border-bottom: 1px solid #64748b;
}
.nuxt-link-side-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 30px;
    padding: 10px;
    width: 100vw;
    box-shadow: 5px 5px 5px 5px rgb(108,117,125,0.5);

}
.nuxt-link-side-bar a {
  text-decoration: none;
  color: #64748b;
}
.active {
  color: #0269db;
}
.nuxt-link-side-bar a:hover {
  cursor: pointer;
}
.nuxt-link-side-bar li {
  list-style-type: none;
}
.nuxt-link a {
  text-decoration: none;
  color: #64748b;
}
.nuxt-link a:hover {
  color: #0269db !important ;
  cursor: pointer;
}
.focus-link a {
  color: #0269db !important;
}
.detail-job {
  margin-left: 45px;
}
.detail-job h2 {
  padding: 20px 0 ;
  color:  #0269db;
}
.detail-job p {
  font-size: 14px;
  color: #64748b;
}
.job-benefit h2 {
  padding: 20px 0 ;
  color:  #0269db;
}
.job-benefit {
  margin-left: 45px;
}
.job-benefit p {
  font-size: 14px;
  color: #64748b;
  margin-right: 40px;
}
.job-experience {
  margin-left: 45px;
}
.job-experience p {
  font-size: 14px;
  color: #64748b;
}
.job-experience h2 {
  padding-top: 20px;
  color:  #0269db;
}
.job-decription {
  display: grid;
  grid-template-columns: 300px 300px;
  justify-content: center;
  font-size: 14px;
  gap: 100px;
}
#title-decription h2 {
  padding-top: 20px;
  color:  #0269db;
  margin-left: 45px;
  padding-bottom: 20px;
}
.job-decription-left {
  background-color: #EFF6FD;
  padding: 20px;
  border-radius: 16px;

}
.job-decription-right {
  background-color: #EFF6FD;
  padding: 20px;
  border-radius: 16px;
}
.job-row-flex {
  display: flex;
  gap: 10px;
}
.text-decription {
  font-size: 14px;
  color: #334155;
  font-weight: 600;
  margin-left: 28px;
}
.infor-contact {
  margin-left: 45px;
  font-size: 14px;
}
.infor-contact h2 {
  padding-top: 20px;
  color:  #0269db;
  padding-bottom: 20px;
}
.box-infor {
  background-color: #EFF6FD;
  padding: 20px;
  border-radius: 8px;
  margin-right: 40px;
}
.infor-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
}
.color-1 {
  color: #EB4E77;
}
.color-2 {
  color: #2350D8;
}
.color-3 {
  color: #E95D55;
}
.color-4 {
  color: #5BB394;
}
.job-note {
  font-weight: 600;
  font-style: italic;
}
.about-company {
  margin-left: 45px;
  font-size: 14px;
  color: #334155;
  padding-bottom: 20px;
}
.about-company h2 {
  padding-top: 20px;
  color:  #0269db;
  padding-bottom: 10px;
}
.about-company a {
  color: black;
  font-size: 15px;
  text-decoration: none;
}
.about-company a:hover {
  text-decoration: underline;
}
.fixed-sidebar {
  position: fixed;
  top: 8%;
  left: 0%;
  background-color: #fff;
  z-index: 120;
}
.button-back {
  float: right;
  padding-bottom: 20px;
  padding-right: 50px;
}
.button-back button {
  padding: 10px 20px;
  background-color: #2563EB;
  border-radius: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
}
.button-back button:hover {
  background-color: #07379e ;
}
</style>
