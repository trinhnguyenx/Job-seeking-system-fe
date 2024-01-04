<template>
  <div class="container-listjob">
    <div class="card-listjob" @click="toJobDetail(job?.id)">
      <div class="img-card">
        <img :src="job.Source_Picture" alt="image" />
      </div>
      <div class="text-card">
        <h3>{{ job?.Title || "No Title" }}</h3>
        <p class="company">{{ job?.Company_Name || "No Company" }}</p>
        <p class="location">{{ job?.Place || "No Location" }}</p>
        <span class="salary">{{ job?.Salary || "No Salary" }} |</span>
        <span>{{ job?.Level || "No Level" }}</span>
      </div>
    </div>
    <div class="button-edit" v-if="isAdmin">
      <button @click ="handleOpenPopup(job?.id)">Edit</button>
    </div>
    <popupUpdate
    v-if="isOpen"
    @close-popup="handleClosePopup"
    :idChoose="idChooseUpdate"
    />
  </div>
</template>
<script setup lang="ts">
import type { IJob } from "@/types/auth";
import { useRouter } from "vue-router";
import {ref, onMounted} from 'vue'
import { useAuthStore } from "@/stores/auth"
import popupUpdate from "@/views/popup/popupUpdate.vue"


const props = defineProps<{
  job: IJob;
}>();
onMounted(() => {
  handleCheckAuth()
})
const isOpen = ref<boolean>(false)
const idChooseUpdate = ref('')
const handleOpenPopup = (id: string) => {
  isOpen.value = true
  idChooseUpdate.value = id
}
const handleClosePopup = () => {
  isOpen.value = false
  idChooseUpdate.value = ""
}
const router = useRouter();
const toJobDetail = (idChoose: string) => {
  router.push(`/mainjob/${idChoose}`)
}
const auth = useAuthStore()
const isAdmin = ref<boolean>(false)
const handleCheckAuth = () => {
    isAdmin.value = auth.getIsAdmin();
    return false;
};
</script>
<style scoped>
.container-listjob {
  display: flex;
  gap: 20px;
}
.img-card img {
  width: 80px;
  height: 80px;
}
.img-card {
  float: left;
}
.card-listjob {
  display: grid;
  grid-template-columns: 100px 350px;
  gap: 50px;
  background-color: #f5fcfe;
  padding: 30px 15px;
  border-radius: 15px;
  border: 1px solid rgb(2, 105, 219, 0.2);
  cursor: pointer;
  z-index: 1;
}
.card-listjob:hover {
  transition: all 0.5s ease;
  box-shadow: 5px 5px 5px 0px rgb(2, 105, 219, 0.5);
}
.container-listjob {
  padding: 15px 250px 15px 0;
  display: grid;
  grid-template-columns: auto 100px;
}
.text-card .company {
  color: #343a40;
  font-size: 14px;
  padding-top: 3px;
}
.text-card .location {
  color: #9aa3ac;
  font-size: 12px;
  padding-top: 3px;
}
.text-card span {
  color: #343a40;
  font-size: 12px;
  padding-top: 3px;
}
.salary {
  color: #4a9bef !important;
  font-weight: 600;
}
.button-edit {
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-edit button {
  padding: 5px 20px;
  border: none;
  background-color: #4A9BEF;
  color: white;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3 ease-in-out;
}
.button-edit button:hover {
  background-color: #175597;
}
</style>
