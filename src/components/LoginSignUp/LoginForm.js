import React, { useState } from "react";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/User/UserSlice";
import { useSnackbar } from "notistack";

const initialState = {
  email: "",
  password: "",
};

const LoginForm = ({ closeModal, switchToSignUp }) => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      enqueueSnackbar("Please fill out all fields", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      return;
    }
    dispatch(loginUser({ email, password }));
    closeModal();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <div className="card">
        <div className="row">
          <div className="col custom-widthh" style={{ width: "249px" }}>
            {/* Updated col-md-4 to col-md-6 */}
            <div
              className="h-100 d-flex justify-content-center align-items-center"
              style={{ width: "100%" }}
            >
              <div className="py-4 px-3" style={{ width: "100%" }}>
                <form onSubmit={handleSubmit}>
                  <h4>
                    <u>LOGIN</u>
                  </h4>
                  <div style={{ width: "20px", height: "20px" }}></div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <div className="input-field">
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          id="input3"
                          value={values.email}
                          onChange={handleChange}
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
                          name="password"
                          type="password"
                          className="form-control"
                          id="input4"
                          value={values.password}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="input4">Password</label>
                      </div>
                    </div>
                  </div>
                  <span
                    className=""
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    Forgot password ?
                    {/* <span style={{ color: "white" }}>
                      kfm3;offojfoFM3;FM3;FFO43FOL4KGFO3f
                    </span> */}
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
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    <u style={{ textDecoration: "none" }}>Sign Up</u>
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
