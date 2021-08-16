import React, { Component } from "react";
import './style.css'
import {
  Card,
  Typography,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

import { NavLink } from 'react-router-dom'

class CourseItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc} = this.props.item;
    return (
      <Card >
        <CardActionArea>
          <CardMedia
            style={{height: '200px'}}
            image={hinhAnh}
            title="Contemplative Reptile"
          />
          <CardContent style = {{height:'90px'}}>
            <Typography gutterBottom variant="h6" component="h2">
              {tenKhoaHoc}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {moTa.substr(0,50) + '...'}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <NavLink to={`/detail/${maKhoaHoc}` }>
            <Button className="btn" size="small" variant="contained" color="primary">
              Xem Chi Tiết
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    );
  }
}

export default CourseItem
