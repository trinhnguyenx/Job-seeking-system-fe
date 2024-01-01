<template>
  <div class="popup-overlay">
    <div class="popup-container">
      <h2>Update Job</h2>
      <div class="input-group">
        <label for="input1">Title</label>
        <input id="input1" type="text" v-model="updateJobS.Title" />
      </div>
      <div class="input-group">
        <label for="input2">Company</label>
        <input id="input2" type="text" v-model="updateJobS.Company_Name" />
      </div>
      <div class="input-group">
        <label for="input3">Location</label>
        <input id="input3" type="text" v-model="updateJobS.Place" />
      </div>
      <div class="input-group">
        <label for="input4">Salary</label>
        <input id="input4" type="text" v-model="updateJobS.Salary" />
      </div>
      <div class="input-group">
        <label for="input5">Level</label>
        <input id="input5" type="text" v-model="updateJobS.Level" />
      </div>
      <div class="button-popup">
        <button @click="handleUpdate">Update</button>
        <button @click="emits('close-popup')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount,watch } from "vue";
import type { IJob, IJobUpdate } from "@/types/auth";
import { useRoute, useRouter } from "vue-router";
import { getJobID, updateJob } from "@/services/user.service";
import { ElNotification } from "element-plus";

const emits = defineEmits<{
	(e: "close-popup"): void;
}>();
const props = defineProps<{
    idChoose: string
}>()
const jobUpdate = ref<IJobUpdate>();

onBeforeMount( async() => {
  await getJobtoUpdate();
});

const updateJobS = ref<IJobUpdate>({
  Title: jobUpdate.value?.Title,
  Company_Name: jobUpdate.value?.Company_Name,
  Place: jobUpdate.value?.Place,
  Salary: jobUpdate.value?.Salary,
  Level: jobUpdate.value?.Level
});
watch(jobUpdate, (newValue) => {
  if (newValue) {
    updateJobS.value = {
      Title: newValue.Title || '',
      Company_Name: newValue.Company_Name || '',
      Place: newValue.Place || '',
      Salary: newValue.Salary || '',
      Level: newValue.Level ||''
    };
  }
});
const getJobtoUpdate = async (): Promise<void> => {
  try {
    const res = await getJobID(props.idChoose);
    jobUpdate.value = res.data;
  } catch (error) {
    console.log("error", error);
  }
};

const handleUpdate = async (): Promise<void> => {
  try {
    if (jobUpdate.value) {
        await updateJob(props.idChoose, updateJobS.value);
    }
    emits('close-popup')
    ElNotification({
        title: "Success",
        message: "Update succesfully!",
        type: "success",
      });
  } catch (error) {
    console.log("Error updating job", error);
    ElNotification({
      title: "Error",
      message: "Update Failed!",
      type: "error",
    });
  }
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
.popup-container h2 {
    padding-bottom: 30px;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.button-popup {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
