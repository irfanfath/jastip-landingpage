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
              <Step title="Unduh Aplikasinya" gambar={hpstep} />
              <div className="margin-step">
                  <div className="w-step">
                    <img src={hp} alt=""  width="30%"/>
                  </div>
                  <div className="w-step">
                    <div className="hero-step">Registrasi Akun Kamu</div>
                    <p>fewuiwfhnwfnwefnwifnweoi</p>
                  </div>
              </div>
              <Step title="Enjoy Jastip" gambar={hpstep} />
          </div>
      </div>
      <div className="accent section">
            <div className="w-container">
                <div className="section-title-group">
                    <h2 className="centered section-heading white">services</h2>
                    <div className="center off-white section-subheading">This is some text inside of a div block.</div>
                </div>
                <div className="w-row">
                    <div className="w-col w-col-6">
                        <div className="transparent white-box">
                            <img
                                className="fullwidth-image"
                                src="http://uploads.webflow.com/551bfa383f9283057b14ce65/551c06cc488e81037b9ea59d_city-scape.jpg"
                                alt=""
                            />
                            <h3 className="white-text">Merchant</h3>
                            <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                            <div className="hollow-button">Learn more</div>
                        </div>
                    </div>
                    <div className="w-col w-col-6">
                        <div className="transparent white-box">
                            <img
                                className="fullwidth-image"
                                src="http://uploads.webflow.com/551bfa383f9283057b14ce65/551c0a7c488e81037b9ea709_photo-1416400639808-f41f0c149b09.jpg"
                                alt=""
                            />
                            <h3 className="white-text">Jastiper</h3>
                            <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                            <div className="all-caps hollow-button">Learn more</div>
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