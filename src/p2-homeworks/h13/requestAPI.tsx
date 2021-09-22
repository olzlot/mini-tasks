import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})

export const requestApi = {
    post(body: boolean) {
       return axiosInstance.post<any>('', { 'success': body })
    }
}