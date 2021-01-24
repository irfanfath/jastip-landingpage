import React, { Component } from "react";
import logo from "../Assets/Images/logojastip.png"
import failed from "../Assets/Images/failed.png"
 
export default class Failed extends Component {
  render() {
    return (
      <div className="section">
        <img src={logo} alt="" />
        <div className="text-success">
        <img src={failed} className="logo-sukses" width="5%" alt="" /> <br/><br/>
            Gagal Merubah Password</div>
      </div>
    );
  }
}
