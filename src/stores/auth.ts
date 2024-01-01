import { IAuthState } from "@/types/user"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useAuthStore = defineStore("auth", () => {
    const state = ref<IAuthState>({
        user: {
            email: "",
            password: "",
            avatar: ""
        },
        isLoggedIn: false,
        isAdmin: false
    })

    const setAuthStore = (data: IAuthState) => {
        state.value = data
    }

    const getUserName = () => {
        return state.value.user.name
    }
    const getEmail = () => {
        return state.value.user.email
    }
    const getAvatar = () => { 
        return state.value.user.avatar
    }
    const getAge = () => {
        return state.value.user.age
    }

    const getIsLoggedIn = () => {
        return state.value.isLoggedIn
    }
    const getIsAdmin = () => {
        return state.value.isAdmin
    }
    return {
        state,
        setAuthStore,
        getUserName,
        getIsLoggedIn,
        getEmail,
        getAvatar,
        getAge,
        getIsAdmin
    }
})