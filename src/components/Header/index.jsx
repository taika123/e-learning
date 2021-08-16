import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import {styles} from "./style";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles,
} from "@material-ui/core";
import { ImportContacts } from "@material-ui/icons";
import {connect} from 'react-redux'

// import ImportContacts from '@material-ui/icons/ImportContacts';

class index extends Component {
  render() {
    const {title, navLink, activeNavLink} = this.props.classes
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ImportContacts />
            </IconButton>
            <Typography className={title} variant="h6">
              E-Learning
            </Typography>
            <NavLink activenavlink={activeNavLink} className={navLink} exact to="/">
              Home
            </NavLink>
            {this.props.me ? (<span className={`${navLink} ${activeNavLink}`}>Hello, {`${this.props.me.hoTen}`}</span> ): (
                <Fragment>
                  <NavLink activenavlink={activeNavLink} className={navLink} to="/signin">
                    Sign In
                  </NavLink>
                  <NavLink activenavlink={activeNavLink} className={navLink} to="/signup">
                    Sign Up
                  </NavLink>
                </Fragment>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    me: state.me
})

export default connect(mapStateToProps)(withStyles(styles)(index))