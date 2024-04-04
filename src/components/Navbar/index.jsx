import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom" style={{ backgroundColor: "#ffffff", width: "100%" }}>
      <div className="container-fluid">
        <div className="col-6">
          <a className="navbar-brand" href="#" style={{ color: "#212529", fontSize: "20px", fontFamily: "Roboto, sans-serif" }}>Simple Header</a>
        </div>
        <div className="col text-end">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="col text-end collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a className="nav-link" href="#" style={{ color: "#0D6EFD", fontSize: "16px", fontFamily: "Roboto, sans-serif" }} 
                onMouseEnter={(e) => { e.target.style.color = "#ffffff"; e.target.style.backgroundColor = "#0D6EFD"; e.target.style.borderRadius = "4px"; }}
                onMouseLeave={(e) => { e.target.style.color = "#0D6EFD"; e.target.style.backgroundColor = "transparent"; e.target.style.borderRadius = "0"; }}>Home</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#" style={{ color: "#0D6EFD", fontSize: "16px", fontFamily: "Roboto, sans-serif" }} 
                onMouseEnter={(e) => { e.target.style.color = "#ffffff"; e.target.style.backgroundColor = "#0D6EFD"; e.target.style.borderRadius = "4px"; }}
                onMouseLeave={(e) => { e.target.style.color = "#0D6EFD"; e.target.style.backgroundColor = "transparent"; e.target.style.borderRadius = "0"; }}>Features</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#" style={{ color: "#0D6EFD", fontSize: "16px", fontFamily: "Roboto, sans-serif" }} 
                onMouseEnter={(e) => { e.target.style.color = "#ffffff"; e.target.style.backgroundColor = "#0D6EFD"; e.target.style.borderRadius = "4px"; }}
                onMouseLeave={(e) => { e.target.style.color = "#0D6EFD"; e.target.style.backgroundColor = "transparent"; e.target.style.borderRadius = "0"; }}>Pricing</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#" style={{ color: "#0D6EFD", fontSize: "16px", fontFamily: "Roboto, sans-serif" }} 
                onMouseEnter={(e) => { e.target.style.color = "#ffffff"; e.target.style.backgroundColor = "#0D6EFD"; e.target.style.borderRadius = "4px"; }}
                onMouseLeave={(e) => { e.target.style.color = "#0D6EFD"; e.target.style.backgroundColor = "transparent"; e.target.style.borderRadius = "0"; }}>FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "#0D6EFD", fontSize: "16px", fontFamily: "Roboto, sans-serif" }} 
                onMouseEnter={(e) => { e.target.style.color = "#ffffff"; e.target.style.backgroundColor = "#0D6EFD"; e.target.style.borderRadius = "4px"; }}
                onMouseLeave={(e) => { e.target.style.color = "#0D6EFD"; e.target.style.backgroundColor = "transparent"; e.target.style.borderRadius = "0"; }}>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
