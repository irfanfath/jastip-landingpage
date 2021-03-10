import React, { Component } from "react";
import apple from "../Assets/Images/apple1.png"
import android from "../Assets/Images/android.png"
import hp from "../Assets/Images/splash1.png"
import hpstep from "../Assets/Images/Gabung.png"
import hp2 from "../Assets/Images/Splash2.png"
import Step from "../Component/Step";
import merchant from "../Assets/Images/merchant.jpg"
import jastiper from "../Assets/Images/jastiper.jpg"
 
class Home extends Component {
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

    handleAppstore = () => {
        window.open("https://apps.apple.com/us/app/jastipinaja/id1555013354")
    }

    handlePlaystore = () => {
        window.open("https://play.google.com/store/apps/details?id=com.jastip")
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
            <img className="app-store" src={apple} alt="" onClick={this.handleAppstore} />
            <img className="play-store" src={android} alt="" onClick={this.handlePlaystore} />
          </div>
          <img className="icon-phone" src={hp} alt="" />
      </div>
      <div className="section">
          <div className="w-container">
              <div className="section-title-group">
                  <h2 className="centered section-heading">Gimana Caranya?</h2>
                  <div className="center section-subheading">Caranya Gampang Kok</div>
              </div>
              <div className="margin-step">
                  <div className="w-step">
                    <div className="hero-step">Unduh Aplikasinya</div>
                    <p>Unduh Aplikasi JastipinAja! di App Store (IOS) atau Play Store (Android)</p>
                    <img className="app-store" src={apple} alt="" onClick={this.handleAppstore}/>
                    <img className="play-store" src={android} alt="" onClick={this.handlePlaystore} />
                  </div>
                  <div className="w-step">
                    <img className="w-step-img" src={hpstep} alt="" />
                  </div>
              </div>
              <div className="margin-step">
                  <div className="w-step">
                    <img className="w-step-img"  src={hp} alt="" />
                  </div>
                  <div className="w-step">
                    <div className="hero-step">Registrasi Akun Kamu</div>
                    <p>Silahkan Registrasi Akun Dan Lengkapi Seluruh Data Kamu</p>
                  </div>
              </div>
              <Step title="Enjoy Jastip" gambar={hp2} desc="Temukan Makanan Yang Kamu Rindukan" />
          </div>
      </div>
      <div className="accent section">
            <div className="w-container">
                <div className="section-title-group">
                    <h2 className="centered section-heading white">Informasi</h2>
                    <div className="center off-white section-subheading">Informasi lanjut bagi anda yang ingin bergabung bersama kami</div>
                </div>
                <div className="w-row">
                <div className="w-col w-col-6">
                        <div className="transparent white-box">
                            <img
                                className="fullwidth-image"
                                src={jastiper}
                                alt=""
                            />
                            <h3 className="white-text">Customer</h3>
                            <p className="white-text">Buat para customer yang rindu makanan daerah yuk JastipinAja!</p>
                        </div>
                    </div>
                    <div className="w-col w-col-6">
                        <div className="transparent white-box">
                            <img
                                className="fullwidth-image"
                                src={merchant}
                                alt=""
                            />
                            <h3 className="white-text">Merchant</h3>
                            <p className="white-text">Buat kamu para pelaku usaha (pemilik restaurant, rumah makan, warung makan) atau yang berminat buka usaha jastip mari bergabung menjadi mitra Merchant kami.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <footer className="footer">
            <div className="footer-row"></div>
                <div className="container flex">
                    <div className="copyright-block">
                    {/* <div className="copyright-text left">Head Office</div>
                    <div className="copyright-block">
                        <p className="copyright-text left">Aldeoz Building Jl. Warung Jati Barat No 39, RT.1/RW.9, Kalibata, Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740</p>
                    </div> */}
                        <div className="copyright-text">© 2021 - JastipinAja!</div>
                        <div className="copyright-text">
                        JastipinAja! dioperasikan oleh PT.Anjana Nata Alam yang terdaftar pada Kementrian Hukum dan HAM Republik Indonesia.
                        </div>
                    </div>
                    {/* <div className="copyright-block right">
                        <div onClick={this.handleFAQ} className="copyright-text right">FAQ</div><div onClick={this.hanleTOC} className="copyright-text right">Term And condition</div><div onClick={this.handlePrv} className="copyright-text right">Privacy policy</div>
                    </div> */}
                </div>
        </footer>

    </>
    );
  }
}
 
export default Home;