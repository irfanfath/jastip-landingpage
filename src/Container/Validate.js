import React, { Component } from "react";
import logo from "../Assets/Images/logojastip.png"
import axios from "axios"
 
export default class Validate extends Component {
    state = {
        post: []
    }

    getPostAPI = () => {
        let id = this.props.match.params.validId
        axios.get(`https://api.jastipinaja.co.id/auth/forgot_password/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
        .then((result)=>{
            if(result.data.statusCode === 200){
                this.props.history.push(`/forgot/${id}`)
            } else {
                alert("Verifikasi Gagal")
            }
        }).catch(() => {
            alert("Proses Validasi Gagal")
            this.props.history.push("/failed")
        })
    } 

    componentDidMount(){
        this.getPostAPI()
    }

  render() {
    return (
          <div className="section">
            <img src={logo} alt="" />
            <h5>Harap Tunggu...</h5>
          </div>
    );
  }
}
