import React, { Component } from "react";
import apple from "../Assets/Images/apple1.png"
import android from "../Assets/Images/android.png"
import hp from "../Assets/Images/hp.png"
import hpstep from "../Assets/Images/hp-step.png"
import Step from "../Component/Step";
 
class Home extends Component {
  render() {
    return (
    <>
      <div className="centered hero-section">
          <div className="w-container">
            <div className="hero-subheading">Rindu makanan daerah kamu?</div>
            <h1 className="hero-heading">JastipinAja!!</h1>
            <img className="app-store" src={apple} alt="" />
            <img className="play-store" src={android} alt="" />
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
                    <p>Unduh Aplikasi JastipinAja di App Store (IOS) atau Play Store (Android)</p>
                    <img className="app-store" src={apple} alt="" />
                    <img className="play-store" src={android} alt="" />
                  </div>
                  <div className="w-step">
                    <img src={hpstep} alt=""  width="70%"/>
                  </div>
              </div>
              <div className="margin-step">
                  <div className="w-step">
                    <img src={hp} alt=""  width="30%"/>
                  </div>
                  <div className="w-step">
                    <div className="hero-step">Registrasi Akun Kamu</div>
                    <p>Silahkan Registrasi Akun Dan Lengkapi Seluruh Data Kamu</p>
                  </div>
              </div>
              <Step title="Enjoy Jastip" gambar={hpstep} desc="Temukan Makanan Yang Kamu Rindukan" />
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
                            {/* <img
                                className="fullwidth-image"
                                src="http://uploads.webflow.com/551bfa383f9283057b14ce65/551c06cc488e81037b9ea59d_city-scape.jpg"
                                alt=""
                            /> */}
                            <h3 className="white-text">Merchant</h3>
                            <p className="white-text">Buat kamu para pelaku usaha pemilik restaurant, rumah makan, warung makan atau yang berminat buka usaha jastip mari bergabung menjadi mitra Merchant kami.</p>
                        </div>
                    </div>
                    <div className="w-col w-col-6">
                        <div className="transparent white-box">
                            {/* <img
                                className="fullwidth-image"
                                src="http://uploads.webflow.com/551bfa383f9283057b14ce65/551c0a7c488e81037b9ea709_photo-1416400639808-f41f0c149b09.jpg"
                                alt=""
                            /> */}
                            <h3 className="white-text">Jastiper</h3>
                            <p className="white-text">Buat para Jastiper yang rindu makanan daerah yuk JastipinAja!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
  }
}
 
export default Home;