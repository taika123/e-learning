import React, { Component } from "react";
// import Header from '../../components/Header'
import { Container, Grid, Typography } from "@material-ui/core";
import CourseItem from "../../components/CourseItem";
import { fetchCourses } from "../../store/actions/course";
import { connect } from "react-redux";
import Layout from "../../HOC/Layout";

class index extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Danh Sách Khóa Học
          </Typography>

          <Container maxWidth="lg">
            <Grid container spacing={2}>
              {this.props.courses.map((item, index) => {
                return (
                  <Grid key={index} xs={12} sm={6} md={3} item>
                    <CourseItem item={item} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
      </Layout>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourses);
  }
}

const mapStateToProps = (state) => ({
  courses: state.course.courseList,
});

export default connect(mapStateToProps)(index);
