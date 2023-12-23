<template>
  <div class="main-container">
    <div class="container-search">
      <div class="input-search">
        <input type="text" v-model="keySearch" placeholder="Search Job.." />
      </div>
      <!-- <div class="select-province">
        <el-select v-model="selectedProvince" placeholder="Select">
          <el-option
            v-for="item in provinces"
            :key="item.code"
            :value="item.name"
          />
        </el-select>
        <div class="container-button">
          <button >Tìm kiếm</button>
        </div>
      </div> -->
    </div>
    <div>
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
  </div>
</template>
<script setup lang="ts">
import { ref, onBeforeMount, computed } from "vue";
import axios from "axios";
import type { IJob, IPronvince } from "../../../types/auth";
import { getJobAll } from "../../../services/user.service";
import JobList from "../joblist/index.vue";

onBeforeMount(async() => {
  await getProvinces();
  await getListJob();
});

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
  return searchedAndFilteredJobs.value
    .slice(start, end)
});
const searchedAndFilteredJobs = computed(() => {
  return listJob.value.filter((job) => {
    return (
      (job.Title.toLowerCase().includes(keySearch.value.toLowerCase())) ||
      (job.Place.toLowerCase().includes(keySearch.value.toLowerCase())) ||
      (job.Company_Name.toLowerCase().includes(keySearch.value.toLowerCase())) ||
      (job.Salary.toLowerCase().includes(keySearch.value.toLowerCase())) ||
      (job.Level.toLowerCase().includes(keySearch.value.toLowerCase()))
    );
  });
});

const handlePageChange = (page: number) => {
  currentPage.value = page;
};
</script>
<style scoped>
.main-container {
  padding-bottom: 30px;
  margin: 0;
}
.container-search {
  display: flex;
  gap: 20%;
  align-items: center;
  padding-top: 50px;
  padding-left: 250px;
  padding-bottom: 30px;
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
}
</style>
