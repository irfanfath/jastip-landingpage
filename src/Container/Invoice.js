import React, { Component } from "react";
import Address from "../Component/Invoice/Address";
import Header from "../Component/Invoice/Header";
import List from "../Component/Invoice/List";
import axios from "axios";
import ListMerc from "../Component/Invoice/ListMerc";

export default class Invoice extends Component {
    state = {
        post: [],
        postTrx: [],
        listProduct: []
    }

    getPostAPI = () => {
        let id = this.props.match.params.idtrx
        axios.get(`https://api.jastipinaja.co.id/admin/get_transaction_list/transaksi/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        })
        .then((result)=>{
            this.setState({
                post: result.data.data,
                postTrx: result.data.data[0].transaction_items
            }, () => {
                var arr = []
                this.state.postTrx.forEach((data) => {
                    const obj = {
                        name: data.product.nama_produk,
                        quantity: data.quantity,
                        unitPrice: data.product.harga_produk,
                      }
                    arr.push(obj)
                })
                this.setState({listProduct: arr})
            })
        })
    } 
  
    componentDidMount(){
        this.getPostAPI();
    }
  
    render(){
        var dataRow = {}
        if (this.state.post.length > 0) {
            dataRow = {
                date: this.state.post[0].settlement_time,
                number: this.state.post[0].id_transaksi.substring(24,36),
                recipient: {
                    displayName: this.state.post[0].users_merchant[0].nama_lengkap,
                    addressLine: this.state.post[0].users_merchant[0].alamat_lengkap
                },
                emitter: {
                    displayName: this.state.post[0].users[0].nama_lengkap,
                    addressLine: this.state.post[0].alamat_tujuan
                },
                list: this.state.listProduct,
                tax: this.state.post[0].ongkir,
                fee: this.state.post[0].biaya_layanan
            }
        }
          
        return(
            <>
            <div className="Invoice-merc">
                {this.state.post && <Header date={dataRow.date} number={dataRow.number} />}
                {this.state.post && <Address recipient={dataRow.recipient} emitter={dataRow.emitter} />}
                {this.state.post.length > 0 && <ListMerc list={dataRow.list} tax={dataRow.tax} fee={dataRow.fee} />}
            </div>
            <div className="Invoice">
                {this.state.post && <Header date={dataRow.date} number={dataRow.number} />}
                {this.state.post.length > 0 && <List list={dataRow.list} tax={dataRow.tax} fee={dataRow.fee} />}
            </div>
            </>
        )
    }
}