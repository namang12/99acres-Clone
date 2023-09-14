import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-PP">
      <div className="section">
        <div className="div-component-logo">
          <div className="link-nnares-logo" onClick={() => navigate("/")}/>
        </div>
      </div>
    </div>
  );
};
