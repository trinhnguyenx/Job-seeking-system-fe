<template>
  <div class="container-Card">
    <div class="table-list-user">
      <div class="data-avatar">
        <img :src="user.avatar" alt="" />
      </div>
      <div class="data-name">
        {{ user.name }}
      </div>
      <div class="data-email">
        {{ user.email }}
      </div>
      <div class="data-createAt">
        {{ new Date(user.created_at).toLocaleDateString() }}
      </div>
      <div class="data-updateAt">
        {{ new Date(user.updated_at).toLocaleDateString() }}
      </div>
      <el-popconfirm
        width="250"
        confirm-button-text="OK"
        cancel-button-text="No, Thanks"
        :icon="InfoFilled"
        icon-color="#626AEF"
        title="Are you sure to delete this?"
        @confirm="handleDelete(user.id)"
      >
        <template #reference>
          <el-button>Delete</el-button>
        </template>
      </el-popconfirm>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import type { IUser } from "@/types/user";
import { InfoFilled } from "@element-plus/icons-vue";
import { deleteAPI } from "@/services/user.service";
import { ElNotification } from "element-plus";

const props = defineProps<{
  user: IUser;
}>();
const emits = defineEmits<{
    (e: "idtoParent", data: string): void;
}>()
const idChooseDelete = ref('')
const handleDelete = async (id: string) => {
    idChooseDelete.value = id
  try {
    await deleteAPI(id);
    ElNotification({
      title: "Success",
      message: "Delete success",
      type: "success",
    });
  } catch (error) {
    console.log(error);
    ElNotification({
      title: "Error",
      message: "Delete failed!",
      type: "error",
    });
  }
};
</script>
<style lang="scss" scoped>
.container-Card {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  align-items: center;
  background: #ffffff;
}
.icon-action-up {
  position: absolute;
  right: 5.5%;
}
.icon-action-down {
  position: absolute;
  right: 5.5%;
}
.table-list-user {
  display: grid;
  margin-right: 25px;
  grid-template-columns: 200px 200px 200px 200px 150px auto;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #f2f3f4;
  border-bottom: 1px solid #f2f3f4;
  padding: 5px;
  text-align: center;
}
.data-email {
  text-align: center;
}
.data-name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.data-avatar img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
