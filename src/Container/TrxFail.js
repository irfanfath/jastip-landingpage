import React, { Component } from "react";
import logo from "../Assets/Images/logojastip.png"
import sukses from "../Assets/Images/failed.png"
 
export default class TrxFail extends Component {
    handleMove = () => {
        this.props.history.push('/question')
    }
    
  render() {
    return (
      <div className="section-failed">
        <img src={logo} alt="" />
        <div className="text-success">
        <img src={sukses} className="logo-sukses" width="5%" alt="" /> <br/><br/>
            Transaksi Anda Gagal, Silahkan Hubungi Admin Kami</div>
            <button className="button-question" onClick={this.handleMove}>Hubungi admin</button>
      </div>
    );
  }
}
