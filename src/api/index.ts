import axios from "axios"
import { refreshAccessToken } from "../services/user.service"

const axiosApiInstance = axios.create()
// set base api
axiosApiInstance.defaults.baseURL = import.meta.env.VITE_API_URL
// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
    async (config: any) => {
        const access_token = localStorage.getItem("access_token")
        config.headers = {
            Authorization: `Bearer ${access_token}`,
            Accept: "application/json",
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
    (response) => {
        return response
    },
    async function (error) {
        const originalRequest = error.config
        if (error.response.status === 403 && !originalRequest._retry && originalRequest.url !== "/auth/refresh" && originalRequest.url !== "/auth/login") {
            originalRequest._retry = true
            try {
                const token = await refreshAccessToken()
                localStorage.setItem("access_token", token.access_token)
                localStorage.setItem("refresh_token", token.refresh_token)
                axios.defaults.headers.common["Authorization"] = "Bearer " + token.data.access_token
                return axiosApiInstance(originalRequest)
            } catch (error) {
                console.log(error, "ERROR", originalRequest.url)
                localStorage.clear()
                window.location.href = "/login"
            }   
        }
        return Promise.reject(error)
    }
)
export default axiosApiInstance
