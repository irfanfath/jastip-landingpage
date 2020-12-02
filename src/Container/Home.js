import React, { Component } from "react";
import apple from "../Assets/Images/apple1.png"
import android from "../Assets/Images/android.png"
import hp from "../Assets/Images/hp.png"
 
class Home extends Component {
  render() {
    return (
    <>
      <div className="centered hero-section">
          <div className="w-container">
            <div className="hero-subheading">Rindu makanan daerah kamu?</div>
            <h1 className="hero-heading">JastipinAja</h1>
            <img className="app-store" src={apple} alt="" width="21%" />
            <img className="app-store" src={android} alt="" width="27%" />
          </div>
          <img className="icon-phone" src={hp} alt="" />
      </div>
      <div className="section">
          <div className="w-container">
              <div className="section-title-group">
                  <h2 className="centered section-heading">Gimana Caranya?</h2>
                  <div className="center section-subheading">Caranya Gampang Kok</div>
              </div>
              <div className="w-row">
                  <div className="w-col w-col-4">
                      <div className="white-box">
                          <img className="grid-image" src="http://uploads.webflow.com/551bfa383f9283057b14ce65/551c04db488e81037b9ea452_feather-15-white.svg" alt="" />
                          <h3>Unduh Aplikasinya</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                      </div>
                  </div>
                  <div className="w-col w-col-4">
                      <div className="white-box">
                          <img className="grid-image" src="http://uploads.webflow.com/551bfa383f9283057b14ce65/551c0532488e81037b9ea4bd_feather2-17-white.svg" width="210" alt="" />
                          <h3>Register Akun Kamu</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                      </div>
                  </div>
                  <div className="w-col w-col-4">
                      <div className="white-box">
                          <img className="grid-image" src="http://uploads.webflow.com/551bfa383f9283057b14ce65/551c0542488e81037b9ea4c1_feather2-22-white.svg" alt="" />
                          <h3>Enjoy Jastip</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                      </div>
                  </div>
              </div>
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
                                sizes="(max-width: 479px) 85vw, (max-width: 767px) 88vw, (max-width: 991px) 324px, 430px"
                                src="http://uploads.webflow.com/551bfa383f9283057b14ce65/551c06cc488e81037b9ea59d_city-scape.jpg"
                                srcSet="
                                    http://uploads.webflow.com/551bfa383f9283057b14ce65/551c06cc488e81037b9ea59d_city-scape-p-500x334.jpeg   500w,
                                    http://uploads.webflow.com/551bfa383f9283057b14ce65/551c06cc488e81037b9ea59d_city-scape-p-800x534.jpeg   800w,
                                    http://uploads.webflow.com/551bfa383f9283057b14ce65/551c06cc488e81037b9ea59d_city-scape-p-1080x721.jpeg 1080w,
                                    http://uploads.webflow.com/551bfa383f9283057b14ce65/551c06cc488e81037b9ea59d_city-scape.jpg             1300w
                                "
                                alt=""
                            />
                            <h3 className="white-text">SERVICES one</h3>
                            <p className="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
                            <div className="hollow-button">Learn more</div>
                        </div>
                    </div>
                    <div className="w-col w-col-6">
                        <div className="transparent white-box">
                            <img
                                className="fullwidth-image"
                                sizes="(max-width: 479px) 85vw, (max-width: 767px) 88vw, (max-width: 991px) 324px, 430px"
                                src="http://uploads.webflow.com/551bfa383f9283057b14ce65/551c0a7c488e81037b9ea709_photo-1416400639808-f41f0c149b09.jpg"
                                srcSet="
                                    http://uploads.webflow.com/551bfa383f9283057b14ce65/551c0a7c488e81037b9ea709_photo-1416400639808-f41f0c149b09-p-500x334.jpeg   500w,
                                    http://uploads.webflow.com/551bfa383f9283057b14ce65/551c0a7c488e81037b9ea709_photo-1416400639808-f41f0c149b09-p-800x534.jpeg   800w,
                                    http://uploads.webflow.com/551bfa383f9283057b14ce65/551c0a7c488e81037b9ea709_photo-1416400639808-f41f0c149b09-p-1080x721.jpeg 1080w,
                                    http://uploads.webflow.com/551bfa383f9283057b14ce65/551c0a7c488e81037b9ea709_photo-1416400639808-f41f0c149b09.jpg             1300w
                                "
                                alt=""
                            />
                            <h3 className="white-text">SERVICES two</h3>
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