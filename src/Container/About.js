import React, { Component } from "react";
import apple from "../Assets/Images/apple1.png"
import android from "../Assets/Images/android.png"
import hp from "../Assets/Images/splash1.png"
 
export default class About extends Component {
    handleTac = () => {
        this.props.history.push('/tac')
    }

    handleFAQ = () => {
        this.props.history.push('/faq')
    }

    handlePrv = () => {
        this.props.history.push('/privacy')
    }

    handleAbt = () => {
        this.props.history.push('/about')
    }

  render() {
    return (
    <>
      <div className="header-small">
        <div className="font-header">
            <div className="margin-font" onClick={this.handleFAQ}>FAQ</div>
            <div className="margin-font" onClick={this.handleTac}>Term and condition</div>
            <div className="margin-font" onClick={this.handlePrv}>Privacy policy</div>
            <div className="margin-font" onClick={this.handleAbt}>About Us</div>
        </div>
        
      </div>
      <div className="centered hero-section">
          <div className="w-container">
            <div className="hero-subheading">Rindu makanan daerah kamu?</div>
            <h1 className="hero-heading">JastipinAja!</h1>
            <img className="app-store" src={apple} alt="" />
            <img className="play-store" src={android} alt="" />
          </div>
          <img className="icon-phone" src={hp} alt="" />
      </div>
      <div className="section">
          <div className="w-container">
              <div className="section-title-group">
                  <h2 className="centered section-heading">About Us</h2>
              </div>
              <div className="pricing-card-wrapper w-col w-col-12">
                    <div className="pricing-card">
                        <h2 className="price">Head Office</h2>
                        <div className="pricing-divider"></div>
                        <div className="w-layout-grid pricing-features-grid">
                            <div className="pricing-feature">
                                <div className="pricing-text">Aldeoz Building Jl. Warung Jati Barat No 39, RT.1/RW.9, Kalibata, Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740</div>
                                <br/>
                                <div className="pricing-text">Email: JastipinAja@aldeoz.com</div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
        <footer className="footer">
            <div className="footer-row"></div>
                <div className="container flex">
                    <div className="copyright-block">
                        <div className="copyright-text">© 2021 - JastipinAja!</div>
                        <div className="copyright-text">
                        JastipinAja! dioperasikan oleh PT.Anjana Nata Alam yang terdaftar pada Kementrian Hukum dan HAM Republik Indonesia.
                        </div>
                    </div>
                </div>
        </footer>
    </>
    );
  }
}
