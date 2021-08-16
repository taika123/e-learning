// import axios from 'axios'
import {createAction} from '.'
import { request } from '../../api/request'
import { actionType } from './type'

export const fetchCourses = (dispatch) => {
    //side-effect: hành động nhằm thay đổi 1 state nằm ngoài scope của function
    request({
        method: 'GET',
        url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
    })
    .then((res) => {
        dispatch(createAction(actionType.SET_COURSES,res.data))
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
}

export const fetchCourse = (id) => {
    return (dispatch) => {
        request({
            method: 'GET',
            url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc',
            params:{
                maKhoaHoc: id,
            },
            // if add id on body => data (body)
        })
        .then((res) => {
            dispatch(createAction(actionType.SET_DETAIL,res.data))
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}