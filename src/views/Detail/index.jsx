import React, { Component } from "react";
import { fetchCourse } from "../../store/actions/course";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
// import Header from "../../components/Header";
import Layout from "../../HOC/Layout";

class index extends Component {
  render() {
    const { maKhoaHoc, hinhAnh, tenKhoaHoc, moTa } = this.props.detail || {};
    console.log(this.props.detail);
    console.log(hinhAnh);
    // console.log(this.props.detail)
    return (
      <Layout>
        <div>
          <h1 align="center">Detail Page</h1>
          <Card align="center">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {tenKhoaHoc}
              </Typography>
              <Typography variant="h6" component="h2">
                {maKhoaHoc}
              </Typography>
              <Typography color="textSecondary">
                <img src={hinhAnh} alt="courseDetail" />
              </Typography>
              <Typography variant="body2" component="p">
                {moTa}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{ margin: "0 auto" }}
                size="small"
                variant="outlined"
                color="primary"
              >
                Mua Ngay
              </Button>
            </CardActions>
          </Card>
        </div>
      </Layout>
    );
  }

  componentDidMount() {
    //lấy tham số id từ trên url xuống bằng props "match" => hàm match chỉ hoạt động trên Route
    const courseId = this.props.match.params.id;
    //console.log(this.props.match.params)
    this.props.dispatch(fetchCourse(courseId));

    //1.tạo dữ liệu mới trên store coursesDetail

    //2.tạo async action fetchCourses()

    //3.dispatch async action

    //4.lên reducer , xử lý action (action creator, tạo type)

    //5. ở component Detail , connect lên store, lấy courseDetail

    //6.Hiện hình, tên khóa, mô tả, tên người tạo
  }
}
const mapStateToProps = (state) => ({
  detail: state.course.courseDetail,
});

export default connect(mapStateToProps)(index);
