import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import Modal from "react-responsive-modal";
import "./LoginForm.css";

const LoginForm = ({ closeModal, switchToSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    closeModal();
  };

  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="col custom-widthh" style={{ width: "249px" }}>
            {/* Updated col-md-4 to col-md-6 */}
            <div className="h-100 d-flex justify-content-center align-items-center">
              <div className="py-4 px-3">
                <form onSubmit={handleSubmit}>
                  <h4>
                    <u>LOGIN</u>
                  </h4>
                  <div style={{ width: "20px", height: "20px" }}></div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <div className="input-field">
                        <input
                          className="form-control"
                          id="input3"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label htmlFor="input3">Email</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-12">
                      <div className="input-field">
                        <input
                          className="form-control"
                          id="input4"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label htmlFor="input4">Password</label>
                      </div>
                    </div>
                  </div>
                  <span className="" style={{ color: "blue" }}>
                    Forgot password ?
                    <span style={{ color: "white" }}>
                      kfm3;offojfoFM3;FM3;FFO43FOL4KGFO3f
                    </span>
                  </span>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <button className="btn btn-primary w-100 signup-button">
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
                <div className="member mt-1">
                  <span>Don't have an account? </span>
                  <span
                    className="switch-link"
                    onClick={switchToSignUp}
                    style={{ color: "blue" }}
                  >
                    <u>Sign Up!</u>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 custom-width" style={{ width: "300px" }}>
            {/* New col-md-4 */}
            <div className="right-side-content" style={{ width: "300px" }}>
              <div
                className="content d-flex flex-column"
                style={{ marginTop: "-180px" }}
              >
                <h1>99acres</h1>
                <h6>
                  Login to your account to <br />
                  unlock these benefits
                </h6>
                <ul typeof="circle">
                  <li>Get latest updates about Properties and Projects.</li>
                  <li>Access millions of advertiser details in one click.</li>
                  <li>Get market information, reports and price trends.</li>
                  <li>Advertise your property for free!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
