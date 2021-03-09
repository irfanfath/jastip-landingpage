import React, { Component } from "react";
import axios from "axios";
import logo from "../Assets/Images/logojastip.png"

export default class Question extends Component {
    state = {
        nama: "",
        email: "",
        no_ponsel: "",
        pesan: ""
    }

    handleSubmit = () => {
        const data = {
            "nama" : this.state.nama,
            "email" : this.state.email,
            "no_ponsel" : this.state.no_ponsel,
            "pesan": this.state.pesan
        }
        axios.post("https://api.jastipinaja.co.id/admin/question", data, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if(res.status === 200){
                alert("Pertanyaan anda berhasil dikirim")
            }else {
                alert("Terjadi kesalahan, silahkan coba kembali")
            }
        })
    }

    render(){
        return(
            <div className="section">
                <img src={logo} alt="" />
                    <h2 className="section-title">Question</h2>
                        <input className="input-question" type="text" placeholder="Full Name" onChange={(e) => this.setState({nama: e.target.value})} />
                        <br/>
                        <input className="input-question" type="text" placeholder="Email Address" onChange={(e) => this.setState({email: e.target.value})} />
                        <br/>
                        <input className="input-question" type="number" placeholder="Phone Number" onChange={(e) => this.setState({no_ponsel: e.target.value})} />
                        <br/>
                        <textarea className="input-question"type="text" placeholder="Message" onChange={(e) => this.setState({pesan: e.target.value})}/>
                        <br/>
                        <button className="button-question" onClick={this.handleSubmit}>Submit</button>
                <div>Any Question? <a href="mailto:jastipinaja@aldeoz.com">Email us</a></div>
                <div>jastipinaja@aldeoz.com</div>
            </div>
        )
    }
}