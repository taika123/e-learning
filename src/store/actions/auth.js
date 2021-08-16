// import axios from 'axios';
import {createAction} from './index'
import { actionType } from "../actions/type";
import { request } from '../../api/request';

export const signIn = (userLogin, callback) => {
    return (dispatch) => {
        request ({
            method:'POST',
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: userLogin,
        })
        .then (res => {
            console.log(res.data);
            dispatch(createAction(actionType.SET_ME, res.data))
            localStorage.setItem('a', res.data.accessToken);
            callback();
        })
        .catch (err => {
            console.log({...err}, err.response.data)
            alert(err.response.data)
        })
    }
}

export const fetchMe = async (dispatch) => {
    try {
        const res = await request({
            method:'POST',
            url:"https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
            // headers:{
            //     Authorization: 'Bearer' + localStorage.getItem('a')
            // }
        })
        // console.log(res)
        dispatch(createAction(actionType.SET_ME,res.data))
    }
    catch(err) {
        console.log(err)
    }
    
}