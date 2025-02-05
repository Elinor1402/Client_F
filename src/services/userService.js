import axios from 'axios'
import {getToken} from '../Utils/Common';

const api = axios.create({
    
    baseURL: 'http://localhost:8080/api',
    headers: {
		'Content-Type': 'application/json',
        'Accept': 'application/json',  
	}
})


export const insertUser = payload => api.post(`/user`, payload,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

export const getAllUsers = () => api.get(`/users`,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

export const deleteUserById = id => api.delete(`/user/${id}`,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

export const getUserById = id => api.get(`/user/${id}`,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

export const registerUser = payload => api.post('/register', payload,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

export const LoginUser = payload => api.post('/login', payload,{headers: {
    'Authorization': 'Bearer '.concat(getToken())}})

// export const Authuser= payload => api.get(`/token`)
export const FileUpload = payload => api.post('/uploadfile',payload)

export const FilesUpload = (payload, directory) => api.post('/uploadfiles',payload, {params:{directory}})

export const GetAllFiles = directory => api.get('/getfiles', {params:{directory}})

const apis = {
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
    registerUser,
    LoginUser,
    FilesUpload,
    FileUpload,
    GetAllFiles,

}

export default apis