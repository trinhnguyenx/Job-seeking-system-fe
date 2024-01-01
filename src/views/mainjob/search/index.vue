<template>
  <div class="main-container">
    <div class="carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in listImages" :key="item">
          <h3 text="2xl" justify="center"><img :src="item" alt="" /></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container-box-search">
      <div class="list-search">
        <img src="src/images/img-1.webp" alt="" />
        <div class="text-row-2">
          <p>1,100</p>
          <span>jobs</span>
        </div>
        <p>Wholesale</p>
      </div>
      <div class="list-search">
        <img src="src/images/img-2.webp" alt="" />
        <div class="text-row-2">
          <p>2,400</p>
          <span>jobs</span>
        </div>
        <p>Business</p>
      </div>
      <div class="list-search">
        <img src="src/images/img-4.webp" alt="" />
        <div class="text-row-2">
          <p>750</p>
          <span>jobs</span>
        </div>
        <p>Wholesale</p>
      </div>
      <div class="list-search">
        <img src="src/images/img-5.webp" alt="" />
        <div class="text-row-2">
          <p>400</p>
          <span>jobs</span>
        </div>
        <p>Auditing</p>
      </div>
      <div class="list-search">
        <img src="src/images/img-6.webp" alt="" />
        <div class="text-row-2">
          <p>900</p>
          <span>jobs</span>
        </div>
        <p>Wholesale</p>
      </div>
      <div class="list-search">
        <img src="src/images/img-7.webp" alt="" />
        <div class="text-row-2">
          <p>950</p>
          <span>jobs</span>
        </div>
        <p>Wholesale</p>
      </div>
      <div class="list-search">
        <img src="src/images/img-8.webp" alt="" />
        <div class="text-row-2">
          <p>1,100</p>
          <span>jobs</span>
        </div>
        <p>Wholesale</p>
      </div>
      <div class="list-search">
        <img src="src/images/img-9.webp" alt="" />
        <p>All</p>
      </div>
    </div>
    <div class="container-search">
      <div class="input-search">
        <input type="text" v-model="keySearch" placeholder="Search Job.." />
      </div>
      <div class="input-search">
        <input type="text" v-model="keySearch" />
      </div>
      <div class="input-search-select">
        <el-select v-model="selectedProvince" placeholder="Select">
          <el-option
            v-for="item in provinces"
            :key="item.code"
            :value="item.name"
          />
        </el-select>
      </div>
      <div class="button-search">
        <button>
          <el-icon><Search /></el-icon><span>Tìm kiếm</span>
        </button>
      </div>
    </div>
    <div class="job-list-child">
      <div class="list-img-left">
        <img src="src/images/left-img-1.webp" alt="anh" />
        <img src="src/images/left-img-2.webp" alt="anh" />
        <img src="src/images/left-img-3.webp" alt="anh" />
        <img src="src/images/img-left-4.webp" alt="anh" />
        <img src="src/images/img-left-5.jpg" alt="anh" />
        <img src="src/images/left-img-6.webp" alt="anh" />
        <!-- <img src="src/images/left-img-7.jpg" alt="anh"> -->
      </div>
      <div v-for="(job, index) in filteredJobs" :key="index">
        <JobList :job="job" />
      </div>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalSearchedAndFilteredJobs"
        :page-size="pageSize"
        :current-page.sync="currentPage"
        @current-change="handlePageChange"
      />
    </div>
    <div class="footer"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onBeforeMount, computed } from "vue";
import axios from "axios";
import type { IJob, IPronvince } from "../../../types/auth";
import { getJobAll } from "../../../services/user.service";
import JobList from "../joblist/index.vue";

onBeforeMount(async () => {
  await getProvinces();
  await getListJob();
});
const listImages = [
  "src/images/carousel-1.webp",
  "src/images/carousel-2.webp",
  "src/images/carousel-3.webp",
  "src/images/carousel-4.webp",
];
const provinces = ref<Array<IPronvince>>([]);
const selectedProvince = ref("");
const getProvinces = async () => {
  try {
    const response = await axios.get("https://provinces.open-api.vn/api/");
    provinces.value = response.data;
  } catch (error) {
    console.error("Error fetching provinces:", error);
  }
};
const listJob = ref<Array<IJob>>([]);
const getListJob = async (): Promise<void> => {
  try {
    const res = await getJobAll();
    listJob.value = res.data;
  } catch (error) {
    console.log("error", error);
  }
};
const keySearch = ref("");
const pageSize = ref(10);
const currentPage = ref(1);
const totalSearchedAndFilteredJobs = computed(() => {
  return searchedAndFilteredJobs.value.length;
});
const filteredJobs = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return searchedAndFilteredJobs.value.slice(start, end);
});
const searchedAndFilteredJobs = computed(() => {
  return listJob.value.filter((job) => {
    return (
      job.Title.toLowerCase().includes(keySearch.value.toLowerCase()) ||
      job.Place.toLowerCase().includes(keySearch.value.toLowerCase()) ||
      job.Company_Name.toLowerCase().includes(keySearch.value.toLowerCase()) ||
      job.Salary.toLowerCase().includes(keySearch.value.toLowerCase()) ||
      job.Level.toLowerCase().includes(keySearch.value.toLowerCase())
    );
  });
});

const handlePageChange = (page: number) => {
  currentPage.value = page;
};
</script>
<style scoped>
.main-container {
  margin: 0;
  position: relative;
}
.container-search {
  display: flex;
  gap: 35px;
  align-items: center;
  position: absolute;
  z-index: 120;
  top: 6.7%;
  left: 7.5%;
}
.input-search input {
  padding: 12px;
  padding-right: 150px;
  outline: none;
  border-radius: 5px;
  border: none;
  z-index: 100;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.2);
}
.select-province {
  display: flex;
  gap: 100px;
}
.container-button button {
  padding: 7px 30px;
  background-color: #483aa0;
  border-radius: 16px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3 ease;
}
.container-button button:hover {
  background-color: #2911c7;
  cursor: pointer;
}
.pagination {
  display: flex;
  justify-content: right;
  margin-bottom: 120px;
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  z-index: 10;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  height: 200px;
  z-index: 10;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  height: 200px;
  z-index: 10;
}
.carousel img {
  height: 200px;
  width: 100%;
  z-index: 1;
}
.carousel {
  z-index: 1;
}
.container-box-search {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  gap: 61px;
  height: 200px;
  margin: 0px 100px;
  position: absolute;
  top: 6.5%;
  border-radius: 10px;
  box-shadow: 0px 8px 24px 0px #a09fc652;
  z-index: 100;
  padding: 0 30px;
}
.list-search {
  text-align: center;
  font-size: 13px;
  padding: 10px 15px;
  cursor: pointer;
  display: block;
  margin-top: 20px;
}
.list-search:hover {
  border: 1px solid #2911c7;
  border-radius: 16px;
  box-shadow: 0px 8px 24px 0px #a09fc652;
}
.list-search p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-search img {
  width: 35px;
  height: 35px;
}
.list-search .text-row-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.list-search .text-row-2 p {
  font-size: 16px;
  font-weight: 700;
  color: #3b91ee;
}
.text-row-2 span {
  color: #a7a6a9;
  font-size: 12px;
}
.button-search button {
  padding: 10px 30px;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: #2911c7;
  font-size: 14px;
  gap: 5px;
  border-radius: 8px;
  border: none;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.2);
  z-index: 120;
  cursor: pointer;
}
.button-search button:hover {
  background-color: #483aa0;
}
.job-list-child {
  margin-top: 100px;
  position: relative;
}
.list-img-left {
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  gap: 45px;
}
.list-img-left img {
  width: 400px;
  height: 300px;
  margin-top: 15px;
  border-radius: 16px;
}
.footer {
  padding: 60px;
  background-color: #2911c7;
  position: absolute;
  bottom: -8%;
  width: 100%;
}
</style>
