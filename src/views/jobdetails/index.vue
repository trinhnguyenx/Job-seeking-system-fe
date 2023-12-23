<template>
    <div v-if="showSidebar" class="fixed-sidebar">
        <div class="nuxt-link-side-bar">
        <div class="focus-link">
          <li><a @click="scrollToSection('information')">Thông tin chung</a></li>
        </div>
        <li><a href="#" @click="scrollToSection('decription')">Mô tả</a></li>
        <li><a href="#" @click="scrollToSection('required')">Yêu cầu công việc</a></li>
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
            <el-icon><Medal /></el-icon>
          </div>
          <p>{{ jobdetail?.Level }}</p>
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
          <li><a @click="scrollToSection('information')">Thông tin chung</a></li>
        </div>
        <li><a href="#" @click="scrollToSection('decription')">Mô tả</a></li>
        <li><a href="#" @click="scrollToSection('required')">Yêu cầu công việc</a></li>
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
                <p>18/12/2023</p>
              </div>
            </div>
            <div class="column">
              <div class="icon-column">
                <el-icon><Calendar /></el-icon>
              </div>
              <div class="text-column">
                <p>Thời gian thử việc</p>
                <p>2 tháng</p>
              </div>
            </div>
            <div class="column">
              <div class="icon-column">
                <el-icon><Medal /></el-icon>
              </div>
              <div class="text-column">
                <p>Cấp bậc</p>
                <p>{{ jobdetail?.Level}}</p>
              </div>
            </div>
          </div>
          <div class="row-2">
            <div class="column">
              <div class="icon-column">
                <el-icon><UserFilled /></el-icon>
              </div>
              <div class="text-column">
                <p>Số lượng tuyển</p>
                <p>{{ jobdetail?.Number_Employee}}</p>
              </div>
            </div>
            <div class="column">
              <div class="icon-column">
                <el-icon><Compass /></el-icon>
              </div>
              <div class="text-column">
                <p>Hình thức làm việc</p>
                <p>Toàn thời gian</p>
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
                <p>20 - 27 tuổi</p>
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
                <el-icon><Comment /></el-icon>
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
        <p v-html = "formatText(jobdetail?.Description)"></p>
      </div>
      <div class="required" id="required">
        <h2>Yêu cầu công việc</h2>
        <p v-html = "formatText(jobdetail?.Requirement)"></p>
      </div>
      <div class="benefit" id="benefit">
        <h2>Quyền lợi</h2>
        <p v-html="formatTextSkill(text)">
        </p>
      </div>
      <div class="location" id="location">
        <h2>Địa điểm làm việc</h2>
        <p>{{ jobdetail?.Place }}</p>
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
const text = "- Được tham gia đầy đủ chế độ bảo hiểm theo quy định của pháp luật.- Môi trường điều kiện làm việc hiện đại, chuyên nghiệp, năng động, thân thiện.- Được tạo điều kiện tốt để nhân viên phát huy năng lực.- Được hưởng đầy đủ các chế độ đãi ngộ với người lao động theo Luật Lao động Việt Nam.- Lương thưởng theo tình hình sản xuất của công ty."
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
.information {
  margin-left: 45px;
  padding-right: 45px;
}
.information h2 {
  padding: 40px 0;
}
.box-information {
  padding: 20px 0;
  background-color: #F6F3FD;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #b7b0e3;
}
.row-2 {
  display: flex;
  align-items: center;
  gap: 110px;
  padding: 20px;
  border-bottom: 1px solid #b7b0e3;
}
.row-3 {
  display: flex;
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
