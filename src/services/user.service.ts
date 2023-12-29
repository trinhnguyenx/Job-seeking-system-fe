import axiosApiInstance from "../api"
import { ILogin,ISignUp, ISendMail, IUpdate } from "../types/user"
import { IJob } from "../types/auth"
import axios from "axios"
axios.defaults.URL = import.meta.env.VITE_API_URL

export const refreshAccessToken = async (): Promise<any> => {
    const refresh_token = localStorage.getItem("refresh_token")
    const data = {
        refresh_token: refresh_token,
    }
    return await axios.post("/auth/refresh", data)
}
export const getJobAll = async () => {
    return await axiosApiInstance.get("/app/dataCrawl")
}
export const getJobID = async (id: string) => {
    return await axiosApiInstance.get(`/app/dataCrawl/${id}`)
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
export const sendMailApi = async (data: ISendMail) => {
    return await axiosApiInstance.post("/auth/sendMail", data )
}
export const updateInfo = async (data: IUpdate) => {
    return await axiosApiInstance.put(`/users/me`, data)
}

