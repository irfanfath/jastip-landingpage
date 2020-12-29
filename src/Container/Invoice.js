import React, { Component } from "react";
import Address from "../Component/Invoice/Address";
import Header from "../Component/Invoice/Header";
import List from "../Component/Invoice/List";

export default class Invoice extends Component {
    render(){
        const data = {
            date: new Date().toISOString(),
            number: 3853,
            recipient: {
              displayName: 'Irfan Fathurrahman',
              addressLine: 'Jl Bandung, Antapani, Bandung',
            },
            emitter: {
              displayName: 'JastipinAja',
              addressLine: 'Jl. Jakarta, DKI Jakarta',
            },
            list: [
              {
                name: 'Daily weather report',
                quantity: 34,
                unitPrice: 320,
              },
              {
                name: 'Email delivery service',
                quantity: 34,
                unitPrice: 15,
              },
              {
                name: 'Weather report custom design setup',
                quantity: 1,
                unitPrice: 98000,
              },
            ],
            tax: 0.23,
        };
          
        return(
            <div className="Invoice">
                <Header date={data.date} number={data.number} />
                <Address recipient={data.recipient} emitter={data.emitter} />
                <List list={data.list} tax={data.tax} />
            </div>
        )
    }
}