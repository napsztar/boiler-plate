import {
    LOGIN_USER, REGISTER_USER,AUTH_USER
} from "../_actions/types";

export default function (state={},action){
    switch (action.type){
        case LOGIN_USER:
            return {...state,loginSuccess:action.payload}
            break;

        case REGISTER_USER:
            return {...state,register:action.payload}
        break;
        case AUTH_USER:
            return {...state,userData:action.payload} // userData인 이유는 서버에서 유저 정보가 오기때문
            break;
        default:
           return state;
    }
}