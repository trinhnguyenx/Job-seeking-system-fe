import axiosApiInstance from "../api"
import { IUser, ILogin,ISignUp } from "../types/user"
import axios from "axios"
axios.defaults.URL = import.meta.env.VITE_API_URL

export const refreshAccessToken = async (): Promise<any> => {
    const refresh_token = localStorage.getItem("refresh_token")
    const data = {
        refresh_token: refresh_token,
    }
    return await axios.post("/auth/refresh", data)
}
export const loginApi = async (data: ILogin) => {
    return await axiosApiInstance.post("/auth/login", data)
}
export const registerApi = async (data: ISignUp) => {
    return await axiosApiInstance.post("/auth/register", data)
}
export const getInfo = async () => {
    return await axiosApiInstance.get("/users/me")
}
export const getInfoAll = async () => {
    return await axiosApiInstance.get("/users/")
}
export const getJobAll = async () => {
    return await axiosApiInstance.get("/app/dataCrawl")
}
