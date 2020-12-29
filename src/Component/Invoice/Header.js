import React from 'react';
import logoSrc from "../../Assets/Images/logojastip.png";

function Header({ date, number }) {
  return (
    <div className="Header clearfix">
      <div className="Header-logo">
        <img src={logoSrc} alt="Logo" />
      </div>

      <div className="Header-right clearfix">
        <div className="Header-title">
          Transaction No #{number}
        </div>
        <div className="Header-date">
        {(new Date(date).toDateString())}
        </div>
      </div>
    </div>
  );
}

export default Header;