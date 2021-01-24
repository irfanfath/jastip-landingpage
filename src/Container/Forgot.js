import React, { Component } from "react";
import logo from "../Assets/Images/logojastip.png"
import axios from "axios"
 
export default class Forgot extends Component {
    state = {
        post: [],
        password: "",
        newpass: "",
        repass: "",
    }
    
    getPostAPI = () => {
        let id = this.props.match.params.verifId
        axios.get(`https://api.jastipinaja.co.id/auth/forgot_password/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
        .then((result)=>{
            if(result.data.statusCode === 200){
                alert("Silahkan Masukan Password Baru")
            } else {
                alert("Verifikasi Gagal")
            }
        }).catch(() => {
            window.open("about:blank", "_self");
            window.close();
        })
    } 

    handleUpdate = (id) => {
        let pass = ""
        if(this.state.newpass === this.state.repass){
            pass = this.state.repass
            const payload = {
                "password" : pass
            }
            const data = payload
            axios.patch(`https://api.jastipinaja.co.id/auth/forgot_password/111`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                if(res.status === 200){
                    alert("berhasil ganti password")
                    window.open("about:blank", "_self");
                    window.close();
                }else {
                    alert("gagal ganti password")
                }
            })
        } else {
            alert("Password Tidak Sesuai")
        }   
    }
    

    componentDidMount(){
        this.getPostAPI()
    }

  render() {
    return (
    <>
          <div className="w-forgot">
              <div className="forgot-form">
                    <div className="forgot-card">
                    <img src={logo} alt="" />
                        <div className="pricing-divider"></div>
                        <div className="layout-forgot">
                            <input type="password" className="footer-input w-input" placeholder="Password Baru" id="newpass" required=""  onChange={(e) => this.setState({newpass: e.target.value})} />
                            <input type="password" className="footer-input w-input" placeholder="Ulangi Password" id="repass" required=""  onChange={(e) => this.setState({repass: e.target.value})} />
                        </div>
                        <button className="button-forgot" onClick={this.handleUpdate}>Submit</button>
                    </div>
                </div>
          </div>
    </>
    );
  }
}
