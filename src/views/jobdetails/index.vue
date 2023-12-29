<template>
  <div v-if="showSidebar" class="fixed-sidebar">
    <div class="nuxt-link-side-bar">
      <div class="focus-link">
        <li><a @click="scrollToSection('information')">Thông tin chung</a></li>
      </div>
      <li><a href="#" @click="scrollToSection('decription')">Mô tả</a></li>
      <li>
        <a href="#" @click="scrollToSection('required')">Yêu cầu công việc</a>
      </li>
      <li><a href="#" @click="scrollToSection('benefit')">Quyền lợi</a></li>
      <li><a href="#" @click="scrollToSection('location')">Địa điểm</a></li>
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
        <img :src="jobdetail?.Source_Picture" alt="#" />
        <div class="title-job-right">
          <h3>{{ jobdetail?.Title }}</h3>
          <p>{{ jobdetail?.Company_Name }}</p>
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
          <p class="blue-text">Mức lương : {{ jobdetail?.Salary }}</p>
        </div>
        <div class="title-icon">
          <div class="icon">
            <el-icon><LocationFilled /></el-icon>
          </div>
          <p>Khu vực truyển : {{ jobdetail?.City }}</p>
        </div>
        <div class="title-icon">
          <div class="icon">
            <el-icon><Calendar /></el-icon>
          </div>
          <p>Hạn nộp hồ sơ : {{ jobdetail?.Deadline }}</p>
        </div>
      </div>
      <!--  -->
      <div class="nuxt-link" id="nuxt-link">
        <div class="focus-link">
          <li>
            <a @click="scrollToSection('information')">Thông tin chung</a>
          </li>
        </div>
        <li><a href="#" @click="scrollToSection('decription')">Mô tả</a></li>
        <li>
          <a href="#" @click="scrollToSection('required')">Yêu cầu công việc</a>
        </li>
        <li><a href="#" @click="scrollToSection('benefit')">Quyền lợi</a></li>
        <li><a href="#" @click="scrollToSection('location')">Địa điểm</a></li>
      </div>
      <!--  -->
      <div class="information" id="information">
        <h2>Thông tin chung</h2>
        <div class="box-information">
          <div class="row-1">
            <div class="column">
              <div class="icon-column">
                <el-icon><Calendar /></el-icon>
              </div>
              <div class="text-column">
                <p>Ngày đăng</p>
                <p>{{ jobdetail?.Time }}</p>
              </div>
            </div>
            <div class="column">
              <div class="icon-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style="fill: rgb(6, 56, 158); transform: ; msfilter: "
                >
                  <path
                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.293 14.707L11 12.414V6h2v5.586l3.707 3.707-1.414 1.414z"
                  ></path>
                </svg>
              </div>
              <div class="text-column">
                <p>Thời gian thử việc</p>
                <p>{{ jobdetail?.Probation_Time }}</p>
              </div>
            </div>
            <div class="column">
              <div class="icon-column">
                <el-icon><Medal /></el-icon>
              </div>
              <div class="text-column">
                <p>Cấp bậc</p>
                <p>{{ jobdetail?.Level }}</p>
              </div>
            </div>
          </div>
          <div class="row-2">
            <div class="column">
              <div class="icon-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  max-height="20"
                  viewBox="0 0 15 16"
                >
                  <path
                    fill="currentColor"
                    d="M7.5 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m0-4C6.67 3 6 3.67 6 4.5S6.67 6 7.5 6S9 5.33 9 4.5S8.33 3 7.5 3"
                  />
                  <path
                    fill="currentColor"
                    d="M13.5 11c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5-.22.5-.5A2.5 2.5 0 0 0 11.5 7h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.83 0 1.5-.67 1.5-1.5S11.33 3 10.5 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5A2.5 2.5 0 0 1 13 4.5c0 .62-.22 1.18-.6 1.62c1.49.4 2.6 1.76 2.6 3.38c0 .83-.67 1.5-1.5 1.5m-12 0C.67 11 0 10.33 0 9.5c0-1.62 1.1-2.98 2.6-3.38c-.37-.44-.6-1-.6-1.62A2.5 2.5 0 0 1 4.5 2c.28 0 .5.22.5.5s-.22.5-.5.5C3.67 3 3 3.67 3 4.5S3.67 6 4.5 6c.28 0 .5.22.5.5s-.22.5-.5.5h-1A2.5 2.5 0 0 0 1 9.5c0 .28.22.5.5.5s.5.22.5.5s-.22.5-.5.5m9 3h-6c-.83 0-1.5-.67-1.5-1.5v-1C3 9.57 4.57 8 6.5 8h2c1.93 0 3.5 1.57 3.5 3.5v1c0 .83-.67 1.5-1.5 1.5m-4-5A2.5 2.5 0 0 0 4 11.5v1c0 .28.22.5.5.5h6c.28 0 .5-.22.5-.5v-1A2.5 2.5 0 0 0 8.5 9z"
                  />
                </svg>
              </div>
              <div class="text-column">
                <p>Số lượng tuyển</p>
                <p>{{ jobdetail?.Number_Employee }}</p>
              </div>
            </div>
            <div class="column">
              <div class="icon-column">
                <el-icon><Compass /></el-icon>
              </div>
              <div class="text-column">
                <p>Hình thức làm việc</p>
                <p>{{ jobdetail?.Work_Way }}</p>
              </div>
            </div>
            <div class="column">
              <div class="icon-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  max-height="24"
                  viewBox="0 0 48 48"
                >
                  <g
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M17.546 15.48a7 7 0 1 0 4.372 5.454a1 1 0 1 1 1.977-.304a9 9 0 1 1-5.622-7.014a1 1 0 1 1-.727 1.863"
                    />
                    <path d="M14 39v-8a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0" />
                    <path
                      d="M11 34a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m17.902-18.737a7 7 0 0 0-8.853 7.562a1 1 0 1 1-1.986.236a9 9 0 1 1 5.375 7.204a1 1 0 0 1 .791-1.837a7 7 0 1 0 4.673-13.165"
                    />
                    <path
                      d="M32.793 17.207a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.414 1.414l-7.5 7.5a1 1 0 0 1-1.414 0"
                    />
                    <path
                      d="M40.924 15a1 1 0 0 1-.987-1.013l.05-3.974l-3.974.05a1 1 0 1 1-.026-2l6.026-.076l-.076 6.026a1 1 0 0 1-1.013.987"
                    />
                  </g>
                </svg>
              </div>
              <div class="text-column">
                <p>Giới tính</p>
                <p>{{ jobdetail?.Sexual }}</p>
              </div>
            </div>
          </div>
          <div class="row-3">
            <div class="column">
              <div class="icon-column">
                <el-icon><User /></el-icon>
              </div>
              <div class="text-column">
                <p>Dộ tuổi</p>
                <p>{{ jobdetail?.Age }}</p>
              </div>
            </div>
            <div class="column">
              <div class="icon-column">
                <el-icon><Suitcase /></el-icon>
              </div>
              <div class="text-column">
                <p>Yêu cầu bằng cấp</p>
                <p>{{ jobdetail?.Education }}</p>
              </div>
            </div>
            <div class="column">
              <div class="icon-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  max-height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m0-2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4M5 13.28l2.45 1.49l-.65-2.81L9 10.08l-2.89-.25L5 7.19L3.87 9.83L1 10.08l2.18 1.88l-.68 2.81z"
                  />
                </svg>
              </div>
              <div class="text-column">
                <p>Yêu cầu kinh nghiệm</p>
                <p>{{ jobdetail?.Experience }}</p>
              </div>
            </div>
          </div>
          <div class="row-4">
            <div class="column">
              <div class="icon-column">
                <el-icon><SuitcaseLine /></el-icon>
              </div>
              <div class="text-column">
                <p>Ngành nghề</p>
                <p>{{ jobdetail?.Job }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="decription" id="decription">
        <h2>Mô tả công việc</h2>
        <p v-html="formatTextSkill(jobdetail?.Description)"></p>
      </div>
      <div class="required" id="required">
        <h2>Yêu cầu công việc</h2>
        <p v-html="formatTextSkill(jobdetail?.Requirement)"></p>
      </div>
      <div class="benefit" id="benefit">
        <h2>Quyền lợi</h2>
        <p v-html="formatTextSkill(jobdetail?.Right)"></p>
      </div>
      <div class="location" id="location">
        <h2>Địa điểm làm việc</h2>
        <p>{{ jobdetail?.Place }}</p>
      </div>
    </div>
  </div>
  <div class="button-back">
    <button @click="backListJob">Trở về</button>
    <button @click="checkLogin">Gửi mail</button>
    <PopupSendMail
    v-if="IsvisibleSendMail"
    @closePopup = "closePopup"
    />
    <PopupNotify
    v-if="IsvisibleNotify"
    @close-popup="closePopupNotify"
    />
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, onBeforeMount, computed, onMounted, onUnmounted } from "vue";
import { getJobID } from "../../services/user.service";
import type { IJob } from "../../types/auth";
import PopupSendMail from "../popup/popupsendMail.vue";
import PopupNotify from "../popup/popupNoti.vue";
import { useAuthStore } from "../../stores/auth"


const route = useRoute();
const router = useRouter();
onBeforeMount(() => {
  getJobDetail();
});
const backListJob = () => {
  router.push("/mainjob");
};
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
const IsvisibleSendMail = ref(false)
const IsvisibleNotify = ref(false)
const closePopup = () => {
  IsvisibleSendMail.value = false
}
const auth = useAuthStore()
const checkLogin = () => {
  if(auth.state.isLoggedIn === true) {
    IsvisibleNotify.value = false
    IsvisibleSendMail.value = true
    console.log("check1",IsvisibleSendMail.value)
  } else {
    IsvisibleNotify.value = true
    console.log("check2",IsvisibleSendMail.value)
  }
}
const closePopupNotify = ():void => {
  IsvisibleNotify.value = false
}

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
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<style scoped>
.container-job-detail {
  margin: 0;
  overflow-x: hidden;
  margin: 50px 280px;
  border-radius: 16px;
  box-shadow: 5px 5px 5px 5px rgb(0, 0, 0, 0.2);
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
  align-items: center;
  gap: 20px;
  padding-top: 10px;
  margin-left: 45px;
}
.title-job-right {
  margin-top: 10px;
}
.title-job-right p {
  font-size: 14px;
  color: #64748b;
}
.title-job img {
  left: 23%;
  width: 100px;
  height: 100px;
  border-radius: 16px;
}
.center-job-title {
  padding-top: 20px;
  font-size: 14px;
}
.icon {
  font-size: 20px;
  color: #3a89ee;
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
  box-shadow: 5px 5px 5px 5px rgb(108, 117, 125, 0.5);
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
  display: flex;
  gap: 20px;
}
.button-back button {
  padding: 10px 20px;
  background-color: #2563eb;
  border-radius: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
}
.button-back button:hover {
  background-color: #07379e;
}
.information {
  margin-left: 45px;
  padding-right: 45px;
}
.information h2 {
  padding: 40px 0;
}
.box-information {
  padding: 20px 0;
  background-color: #f6f3fd;
  border-radius: 8px;
}
.icon-column {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #07379e;
  font-size: 20px;
}
.row-1 {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #b7b0e3;
}
.row-2 {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #b7b0e3;
}
.row-3 {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #b7b0e3;
}
.row-4 {
  padding: 20px 20px 0 20px;
}
.column {
  display: flex;
  gap: 10px;
}
.text-column p:nth-child(1) {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}
.text-column p:nth-child(2) {
  font-size: 12px;
  font-weight: 500;
}
.decription {
  margin-left: 45px;
  padding-right: 45px;
}
.decription h2 {
  padding: 40px 0;
}
.decription p {
  font-size: 14px;
  color: #64748b;
}
.required {
  margin-left: 45px;
  padding-right: 45px;
}
.required h2 {
  padding: 40px 0;
}
.required p {
  font-size: 14px;
  color: #64748b;
}
.benefit {
  margin-left: 45px;
  padding-right: 45px;
}
.benefit p {
  font-size: 14px;
  color: #64748b;
}
.benefit h2 {
  padding: 40px 0;
}
.location {
  margin-left: 45px;
  padding-right: 45px;
  padding-bottom: 30px;
}
.location h2 {
  padding: 40px 0 20px 0;
}
.location p {
  font-size: 14px;
  color: #64748b;
}
</style>
