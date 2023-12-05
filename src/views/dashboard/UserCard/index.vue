<template>
    <div class="container-Card">
        <div class="table-list-user" >
            <div class="data-avatar">
                <img :src="user.avatar" alt="">
            </div>
            <div class="data-name">
                {{ user.name }}
            </div>
            <div class="data-email">
                {{user.email }}
            </div>
            <div class="data-createAt">
                {{new Date( user.created_at).toLocaleDateString() }}
            </div>
            <div class="data-updateAt">
                {{ new Date( user.updated_at).toLocaleDateString() }}
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue"
import type { IUser} from "@/types/user"

const props = defineProps<{
    user: IUser
}>()
</script>
<style lang="scss" scoped>
.container-Card {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    align-items: center;
    background: #ffffff;
}
.button-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.button-action {
    padding-top: 15px;
}
.button-action button {
    padding: 5px 20px 5px 5px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
}
.button-action {
    position: relative;
}
.button-action button:hover {
    background-color: aquamarine;
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
    margin-left: 20px;
    display: grid;
    grid-template-columns: 200px 200px 200px 200px 200px;
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
