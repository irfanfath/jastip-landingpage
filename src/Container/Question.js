import React, { Component } from "react";
import axios from "axios";

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
                alert("berhasil menambahkan data")
            }else {
                alert("gagal menambahkan data")
            }
            this.props.history.push('/')
        })
    }

    render(){
        return(
            <div id="FAQ" className="section">
                <div className="block-content">
                    <h2 className="section-title">Term Of Condition</h2>
                        <input type="text" onChange={(e) => this.setState({nama: e.target.value})} />
                        <br/>
                        <input type="text" onChange={(e) => this.setState({email: e.target.value})} />
                        <br/>
                        <input type="number" onChange={(e) => this.setState({no_ponsel: e.target.value})} />
                        <br/>
                        <input type="text" onChange={(e) => this.setState({pesan: e.target.value})}/>
                        <br/>
                        <button onClick={this.handleSubmit}>Submit</button>
                    <div>Can&#x27;t find an answer? <a href="mailto:knez.milos3@gmail.com">Email us</a></div>
                </div>
            </div>
        )
    }
}