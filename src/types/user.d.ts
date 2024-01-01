export interface IUser {
    id: string
    name: string
    password: string
    email: string
    updated_at: string
    created_at: string
    avatar: string
}
export interface ILogin {
    name?: string
    email: string
    password: string 
    avatar?: string,
    age?: number
}
export interface ISignUp {
    name: string
    email: string
    password: string 
    avatar: string,
    age: number
}
export interface IAuthState {
    user: ILogin
    isLoggedIn?: boolean
    isAdmin: boolean
}
export interface ISendMail {
    mailTo: string
    link: string
}
export interface IUpdate {
    name?: string
    avatar?: string
    age?: number
    email?: string
}



