import React, { Component } from "react";
import Header from "../../components/Header";

export default class Layout extends Component {
  render() {
    return (
      <div
        style={{
          background: "#a9a9a9",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header />
        {this.props.children}
        <div
          style={{textAlign: "center",background: "yellow", height: 30, marginTop: 20}}
          >
          Footer
        </div>
      </div>
    );
  }
}
