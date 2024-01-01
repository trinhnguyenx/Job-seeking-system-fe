import { useAuthStore } from "./auth"
import { getInfo } from "@/services/user.service"
import {jwtDecode} from 'jwt-decode';


export const initAuthStore = async () => {
    const authStore = useAuthStore()
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
        const decodedToken = jwtDecode(accessToken) as { role: string };
        const roles = decodedToken.role;
            if(roles === "admin"){
                const { data } = await getInfo()
                authStore.setAuthStore({
                    user: data,
                    isLoggedIn: true,
                    isAdmin: true
                })
            } else {
                const { data } = await getInfo()
                authStore.setAuthStore({
                    user: data,
                    isLoggedIn: true,
                    isAdmin: false
                })
            }
        
        console.log("initAuthStore", authStore.getIsLoggedIn(), authStore.getIsAdmin())
    }
}