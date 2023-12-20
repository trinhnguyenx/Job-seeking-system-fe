<template>
  <div>
    <div class="container-search">
      <div class="input-search">
        <input type="text" v-model="keySearch" placeholder="Search Job.." />
      </div>
      <div class="select-province">
        <select v-model="selectedProvince">
          <option
            v-for="province in provinces"
            :key="province.code"
            :value="province.name"
          >
            {{ province.name }}
          </option>
        </select>
        <div class="container-button">
          <button>Tìm kiếm</button>
        </div>
      </div>
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
        :total="listJob.length"
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

onBeforeMount(() => {
  getProvinces();
  getListJob();
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
    console.log(listJob.value);
  } catch (error) {
    console.log("error", error);
  }
};
const keySearch = ref("");
const pageSize = ref(10);
const currentPage = ref(1);
const filteredJobs = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return listJob.value
    .slice(start, end)
    .filter(
      (job) =>
        job.Title.toLowerCase().includes(keySearch.value.toLowerCase()) ||
        job.Location.toLowerCase().includes(keySearch.value.toLowerCase()) ||
        job.Company.toLowerCase().includes(keySearch.value.toLowerCase()) ||
        job.Salary.toLowerCase().includes(keySearch.value.toLowerCase()) ||
        job.Level.toLowerCase().includes(keySearch.value.toLowerCase())
    );
});
const handlePageChange = (page: number) => {
  currentPage.value = page;
};
</script>
<style scoped>
.container-search {
  display: flex;
  justify-content: center;
  gap: 30%;
  align-items: center;
  padding-top: 50px;
  padding-left: 250px;
}
.input-search input {
  padding: 10px 30px;
  outline: none;
  border-radius: 14px;
}
.select-province {
  display: flex;
  gap: 25px;
}
.select-province select {
  padding: 5px 30px;
  outline: none;
  cursor: pointer;
}
.container-button button {
  padding: 5px 30px;
}
.pagination {
  display: flex;
  justify-content: right;
}
</style>
