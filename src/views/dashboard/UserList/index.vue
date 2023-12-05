<template>
  <div class="container-list">
    <div class="container-search">
      <div class="container-left">
        <h1>List User</h1>
        <span class="input-search">
          <el-icon class="icon-search"><Search /></el-icon>
          <input
            type="text"
            v-model="keySearch"
            placeholder="Enter title, description..."
          />
        </span>
      </div>
      <div class="button-create">
        <button>Create User</button>
      </div>
    </div>
    <div class="container-card">
      <div>
        <div class="row-title-card">
          <table class="">
            <th class="" v-for="(column, index) in tableColumns" :key="index">
              {{ column }}
            </th>
          </table>
        </div>
        <div v-for="user in filteredUsers" :key="user.id">
          <UserCard :user="user" />
        </div>
      </div>
    </div>
      <div class="pagination">
        <el-pagination 
        background layout="prev, pager, next" 
        :total="listUser.length"
        :page-size="pageSize"
        :current-page.sync="currentPage"
        @current-change="handlePageChange"
         />
      </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import UserCard from "../UserCard/index.vue";
import { ElNotification } from "element-plus";
import { getInfoAll } from "@/services/user.service";
import type { IUser } from "@/types/user";

const router = useRouter();
const tableColumns = ref(["Avatar", "Name", "Email", "CreateAt", "UpdateAt"]);

const listUser = ref<Array<IUser>>([]);
const getListUser = async (): Promise<void> => {
  try {
    const res = await getInfoAll();
    ElNotification({
      title: "Success",
      message: "Get All form success",
      type: "success",
    });
    listUser.value = res.data;
  } catch (error) {
    console.log("error", error);
  }
};

onBeforeMount(() => {
  getListUser();
});

const keySearch = ref<string>("");
const pageSize = ref(8);
const currentPage = ref(1);

const filteredUsers = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
  return listUser.value.slice(start, end).filter(
    (user) =>
      user.email.toLowerCase().includes(keySearch.value.toLowerCase()) ||
      user.name.toLowerCase().includes(keySearch.value.toLowerCase()) ||
      user.created_at.toLowerCase().includes(keySearch.value.toLowerCase()) ||
      user.updated_at.toLowerCase().includes(keySearch.value.toLowerCase())
  );
});
const handlePageChange = (page:number) => {
  currentPage.value = page;
};
</script>
<style lang="scss" scoped>
.container-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.input-search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-card {
  width: 100%;
  height: 100%;
  display: grid;
  font-size: 14px;
}
.row-title-card table {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  align-items: center;
  background-color: #f2f3f4;
  padding: 15px;
  padding-left: 30px;
  border-radius: 16px;
}
.container-search {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  gap: 30px;
  margin-top: 20px;
  margin-left: 20px;
}
.container-left {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.input-search {
  position: relative;
  border: 1px solid #b7b8bb;
  border-radius: 6px;
  padding: 7px 10px 7px 30px;
}
.input-search input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
}
.input-search .icon-search {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 0;
}
.button-create button {
  padding: 10px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
}
.pagination {
    display: flex;
    justify-content: right;
}
</style>
