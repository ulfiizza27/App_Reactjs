import React from 'react';
import Navbar from "../../components/Navbar";
import Banner from "../../assets/img/gambar.png";
import "./style.css";
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid content-section" style={{ backgroundColor: "#37517E", color: "#ffffff", padding: "50px" }}>
        <div className="row align-items-center justify-content-center" style={{ height: "80vh" }}>
          <div className="col-5 text-left">
            <h2 style={{ fontFamily: "Jost, sans-serif", fontSize: "44px", fontWeight: "bold" }}>Better Solutions For Your Business</h2>
            <p style={{ fontFamily: "Jost, sans-serif", fontSize: "20px", fontWeight: 500, color: "rgba(255, 255, 255, 0.6)" }}>We are a team of talented designers making websites with Bootstrap.</p>
            <Link to="/createProduct" className="btn btn-custom">Get Started</Link>
            <button class="btn btn-custom">Watch Video</button>
          </div>
          <div className="col-6 text-end image-container">
            <img src={Banner} alt="Gambar" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container-fluid newsletter-section" style={{ backgroundColor: "#F3F5FA", padding: "50px", fontFamily: "Jost, sans-serif", fontSize: "24px" }}>
        <div className="row">
          <div className="col text-center">
            <h2 style={{ color: "#37517E", fontWeight: "bold" }}>Join Our Newsletter</h2>
            <p style={{ color: "#444444" }}>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form className="d-flex justify-content-center">
                <div className="form-group mb-0 d-flex align-items-center">
                    <input type="text" className="form-control long-input" style={{ borderRadius: "50px", flex: "1", marginRight: "10px", width: '500px' }} />
                    <button type="submit" className="btn btn-primary btn-subscribe" style={{ backgroundColor: "#47B2E4", borderRadius: "50px" }}>Subscribe</button>
                </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div className="row">
          <div className="col-3">
            <h3 className="text-center me-5" style={{ color: "#37517E", fontSize: "28px", fontFamily: "Jost, sans-serif", fontWeight: "bold" }}>ARSHA</h3>
            <p className="text-left" style={{ color: "#5E5E5E", marginLeft: "100px" }}>A108 Adam Street<br />New York, NY 535022<br />United States</p>
            <p className="text-left bold" style={{ color: "#5E5E5E", marginLeft: "100px" }}><strong>Phone:</strong> +1 5589 55488 55<br /><strong>Email:</strong> info@example.co</p>
          </div>
          <div className="col-3 text-center">
            <h3 className="me-2" style={{ color: "#37517E", fontSize: "28px", fontFamily: "Jost, sans-serif", fontWeight: "bold" }}>Useful Links</h3>
            <ul className="link-list" style={{ listStyleType: "none", padding: 0, textAlign: "left" }}>
                <li><a href="#" >Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy</a></li>
            </ul>
          </div>
          <div className="col-3 text-center">
            <h3 className="me-2" style={{ color: "#37517E", fontSize: "28px", fontFamily: "Jost, sans-serif", fontWeight: "bold" }}>Our Services</h3>
            <ul className="service-list" style={{ listStyleType: "none", padding: 0, textAlign: "left" }}>
                <li><a href="#" >Web Design</a></li>
                <li><a href="#" >Web Development</a></li>
                <li><a href="#" >Product Management</a></li>
                <li><a href="#" >Marketing</a></li>
                <li><a href="#" >Graphic Design</a></li>
            </ul>
          </div>

          <div className="col-3 text-center">
            <h3 className="me-2" style={{ color: "#37517E", fontSize: "28px", fontFamily: "Jost, sans-serif", fontWeight: "bold" }}>Our Social Networks</h3>
            <p className="social-text">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div className="circle-container">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ backgroundColor: "#37517E", color: "#ffffff", padding: "25px", height: "81px" }}>
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-6">
              <p>&copy; Copyright <strong>Arsha</strong>. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-end">
              <p>Designed by <span style={{ color: "#47B2E4" }}>BootstrapMade</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}