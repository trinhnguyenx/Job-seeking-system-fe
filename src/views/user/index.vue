<template>
  <div class="container">
    <NavBar />
    <div class="container-right">
      <div class="nav-user">
        <div class="text-nav-user">
          Xin chào,<b>{{ dataInfo?.name }}</b>
        </div>
      </div>
      <div class="box-infor">
        <div class="infor">
          <div class="infor-register" @click="handleClickInfor">
            <div v-if="isArrowUp">
              <el-icon><ArrowDown /></el-icon>
            </div>
            <div v-if="!isArrowUp">
              <el-icon><ArrowUp /></el-icon>
            </div>
            <div><span>Thông tin đăng ký</span></div>
          </div>
          <div class="arrowupdown" v-if="isArrowUp">
            <div class="email">
              <label>Email</label>
              <div class="input-email">
                <input type="text" v-model="updateI.email" />
                <div class="icon-input">
                  <el-icon><CircleCheckFilled /></el-icon>
                </div>
              </div>
            </div>
            <div class="button-edit">
              <button @click="handleUpdate()">
                <el-icon><EditPen /></el-icon>
                <span>Sửa email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-box-private">
        <div class="box-infor-private">
          <h3>Thông tin cá nhân</h3>
          <div class="box-image">
            <img src="http://www.gravatar.com/avatar/?d=mp" alt="avatar" />
          </div>
          <div class="border"></div>
          <div class="flex-input">
            <div class="name">
              <label>Họ và tên</label>
              <input v-model="updateI.name" type="text" />
            </div>
            <div class="age">
              <label>Tuổi</label>
              <input type="text" v-model="updateI.age" />
            </div>
          </div>
          <div class="button-edit-infor">
            <button @click="handleUpdate()">
              <el-icon><Edit /></el-icon><span> Cập nhật </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../../stores/auth";
import NavBar from "../../layouts/NavBar/index.vue";
import { ref, onBeforeMount, watch } from "vue";
import { updateInfo, getInfo } from "@/services/user.service";
import { IUpdate, ILogin } from "@/types/user";
import { ElNotification } from "element-plus";

onBeforeMount(async () => {
  await handleGetInfo();
});
const auth = useAuthStore();
const isArrowUp = ref(false);
const dataInfo = ref<ILogin>();

watch(dataInfo, (newValue) => {
  if (newValue) {
    updateI.value = {
      name: newValue.name || "",
      age: newValue.age || 0,
      avatar: newValue.avatar || "",
      email: newValue.email || "",
    };
  }
});
const handleGetInfo = async () => {
  try {
    const res = await getInfo();
    dataInfo.value = res["data"];
    console.log(dataInfo.value);
  } catch (error) {
    console.log(error);
  }
};
const updateI = ref<IUpdate>({
  name: dataInfo.value?.name,
  age: dataInfo.value?.age,
  avatar: dataInfo.value?.avatar,
  email: dataInfo.value?.email,
});
const handleClickInfor = () => {
  isArrowUp.value = !isArrowUp.value;
};

const handleUpdate = async () => {
  try {
    await updateInfo(updateI.value);
    ElNotification({
      title: "Success",
      message: "Update succesfully!",
      type: "success",
    });
  } catch (error) {
    ElNotification({
      title: "Error",
      message: "Update failed!",
      type: "error",
    });
    console.error(error);
  }
};
// const getListJob = async (): Promise<void> => {
//             try {
//                 const res = await getInfo();
//                 updateI.name = res.data.name;
//                 updateI.email = res.data.email;
//                 updateI.age = res.data.age;
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };
// }
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 250px auto;
  overflow-x: hidden;
}
.nav-user {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0;
  box-shadow: 2px 2px 2px 0px rgb(0, 0, 0, 0.2);
}
.text-nav-user {
  padding-left: 30px;
}
.box-infor {
  width: 100%;
  padding: 0 30px;
}
.infor {
  transition: all 0.5s ease-in-out;
}
.infor-register {
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.2);
  padding-left: 30px;
  cursor: pointer;
}
.infor-register span {
  margin-left: 5px;
}
.arrowupdown {
  gap: 50px;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.2);
  padding-left: 30px;
}
.email {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
}
.email label {
  font-size: 14px;
}
.email input {
  padding: 5px;
  outline: none;
  width: 350px;
}
.input-email {
    position: relative;

}
.icon-input {
  position: absolute;
  top: 20%;
  left: 80%;
  color: #3a91ee;
  z-index: 1;
}
.button-edit {
  margin-right: 100px;
}
.button-edit button {
  padding: 7px 20px;
  background-color: #f1ecf6;
  border: none;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.button-edit button:hover {
  background-color: #afa8e0;
}
.container-box-private {
  width: 100%;
  padding: 0 30px;
}
.box-infor-private {
  width: 100%;
  height: auto;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.2);
  padding-left: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-right: 30px;
  padding-bottom: 50px;
}
.box-image img {
  border-radius: 50%;
}
.border {
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid black;
}
.flex-input {
  display: flex;
  gap: 60px;
}
.flex-input input {
  padding: 5px;
  position: relative;
  outline: none;
  width: 450px;
}
.flex-input label {
  padding-right: 15px;
  font-weight: 700;
  font-size: 14px;
}
.name {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.age {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.button-edit-infor button {
  padding: 7px 20px;
  background-color: #f1ecf6;
  border: none;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 80px;
}
.button-edit-infor button:hover {
  background-color: #afa8e0;
}
</style>
