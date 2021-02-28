import React, { Component } from "react";
import logo from "../Assets/Images/logojastip.png"
import sukses from "../Assets/Images/success.png"
 
export default class TrxFail extends Component {
  render() {
    return (
      <div className="section-failed">
        <img src={logo} alt="" />
        <div className="text-success">
        <img src={sukses} className="logo-sukses" width="5%" alt="" /> <br/><br/>
            Pembayaran Gagal</div>
      </div>
    );
  }
}
