import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="section">
        <div className="link-nnares-logo" onClick={() => navigate("/")} />
        {/* <div className="div-component">
          <div className="div-pagecomponent-8">
            <div className="pseudo-5" />
            <span className="material-symbols-rounded account-icon">
              account_circle
            </span>
            <div className="pseudo-4" />
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
