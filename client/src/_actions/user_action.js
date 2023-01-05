import axios from "axios";
import {LOGIN_USER,REGISTER_USER,AUTH_USER} from "./types";

export function loginUser(dataToSubmit){
    const request = axios.post('/api/users/login',dataToSubmit)
        .then(response=>
                response.data)

    return{
        type:"LOGIN_USER",
        payload:request

    }
}

export function registerUser(dataToSubmit){ // dataToSubmit 바디부분
    const request = axios.post('/api/users/register',dataToSubmit)
        .then(response=>
            response.data)

    return{
        type:"REGISTER_USER",
        payload:request

    }
}

export function auth(){ // 위 소스와 다르게 바디부분이 필요 없으므로 empty
    const request = axios.get('/api/users/auth')
        .then(response=>
            response.data)

    return{
        type:"AUTH_USER",
        payload:request

    }
}