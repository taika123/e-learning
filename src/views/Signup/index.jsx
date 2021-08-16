import { Container, TextField, Button, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { Fragment } from "react";
// import Header from "../../components/Header";
import styles from "./style";
import axios from 'axios';
import Layout from "../../HOC/Layout";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        formValue: {
            taiKhoan:'',
            matKhau:'',
            hoTen:'',
            soDT:'',
            email:'',
            maNhom:'GP01'
        }
    };
  }

  handleChange = (e) => {
    // console.log(e.target.value,e.target.name)
    this.setState({
        formValue: {
            ...this.state.formValue,
            [e.target.name]: e.target.value
        }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.formValue)
    axios({
        method: 'POST',
        url:'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
        data:this.state.formValue,

    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error({...err})
    });
  }

  handleSetDefault = (e) => {
    this.setState({
        formValue: {
            taiKhoan:'aloalo',
            matKhau:'123',
            hoTen:'123',
            soDT:'123',
            email:'123@gmail.com',
            maNhom:'GP01'
        }
    })
  }

  render() {
    const { formInput } = this.props.classes;
    return (
      <Layout>
        <Fragment>
        <Container maxWidth="sm">
          <h1>Đăng Ký</h1>
          <form onSubmit={this.handleSubmit}>
            <div className={formInput}>
              <TextField 
                //set giá trị value của form khi đưa dữ liệu lên input
                value={this.state.formValue.taiKhoan} 
                name="taiKhoan" onChange={this.handleChange} fullWidth label="Tài khoản" variant="outlined" />
            </div>
            <div className={formInput}>
              <TextField value={this.state.formValue.matKhau} name="matKhau" onChange={this.handleChange} fullWidth label="Mật khẩu" variant="outlined" />
            </div>
            <div className={formInput}>
              <TextField value={this.state.formValue.hoTen} name="hoTen" onChange={this.handleChange} fullWidth label="Họ Tên" variant="outlined" />
            </div>
            <div className={formInput}>
              <TextField value={this.state.formValue.email} name="email" onChange={this.handleChange} fullWidth label="Email" variant="outlined" />
            </div>
            <div className={formInput}>
              <TextField value={this.state.formValue.soDT} name="soDT" onChange={this.handleChange} fullWidth label="Số ĐT" variant="outlined" />
            </div>
            <div>
              <Button type="submit" variant="contained" color="primary">
                Đăng Ký
              </Button>
              <Button style={{marginLeft: 10}} type="button" variant="contained" color="secondary" onClick={this.handleSetDefault}>
                Set default user
              </Button>
            </div>
          </form>
        </Container>
      </Fragment>
      </Layout>
    );
  }
}

export default withStyles(styles)(index);
