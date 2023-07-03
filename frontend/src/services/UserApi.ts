import axios from "axios";

const baseURL = `http://localhost:4000/api/user`;
export function AddUser(data:any) {
    return axios.post(baseURL, data)    
}
export function UpdateUser(id:number, data: any) {
    return axios.put(`${baseURL}/${id}`)    
}
export function DeleteUser(id:number) {
    return axios.delete(`${baseURL}/${id}`)    
}
export function ListUser() {
    return axios.get(baseURL)    
}
