import React, { Component } from "react";
import logo from "../Assets/Images/logojastip.png"
import sukses from "../Assets/Images/failed.png"
 
export default class TrxWait extends Component {    
  render() {
    return (
      <div className="section-failed">
        <img src={logo} alt="" />
        <div className="text-success">
        <img src={sukses} className="logo-sukses" width="5%" alt="" /> <br/><br/>
            Transaksi Belum Selesai, Silahkan Lakukan Pembayaran</div>
      </div>
    );
  }
}
