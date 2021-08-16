import { Button, Container, TextField } from "@material-ui/core";
import React, { Component } from "react";
// import Header from "../../components/Header";
import {signIn} from '../../store/actions/auth'
import {connect} from 'react-redux'
import Layout from '../../HOC/Layout'
class index extends Component {

  constructor (props) {
      super(props);
      this.state = {
            formValue:{
                taiKhoan:'',
                matKhau:''
            }
      }
  }

  handleID = (e) => {
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
        this.props.dispatch(signIn(this.state.formValue, () => {
            this.props.history.push('/')
        }))
  }

  handleSetDefault = (e) => {
    this.setState({
        formValue: {
            taiKhoan:'aloalo',
            matKhau:'123123',
        }
    })
  }

  render() {
    return (
      <Layout>
        <div>
          <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
          <Container maxWidth="sm">
            <form>
              <div style={{ marginBottom: 30 }}>
                <TextField onChange={this.handleID}
                  value={this.state.formValue.taiKhoan}
                  name="taiKhoan"
                  fullWidth
                  label="Tài khoản"
                  variant="outlined"
                />
              </div>
              <div style={{ marginBottom: 30 }}>
                <TextField
                  onChange={this.handleID}
                  value={this.state.formValue.matKhau}
                  name="matKhau"
                  fullWidth
                  label="Mật khẩu"
                  variant="outlined"
                />
              </div>

              <div>
                <Button onClick={this.handleSubmit} type="submit" variant="contained" color="primary">
                  Đăng Nhập
                </Button>
                <Button onClick={this.handleSetDefault} style={{marginLeft: 10}} type="button" variant="contained" color="secondary">
                  Set default User 
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </Layout>
    );
  }
}


export default connect()(index)