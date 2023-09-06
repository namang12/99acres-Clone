import React, { useState } from "react";
import "./LoginForm.css";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/User/UserSlice";

const initialState = {
  userName: "",
  email: "",
  password: "",
  contactNo: "",
};

const SignUpForm = ({ closeModal, switchToLogin }) => {
  const [values, setValues] = useState(initialState);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, email, password, contactNo } = values;
    if (!email || !password || !contactNo || !userName) {
      enqueueSnackbar("Please fill out all fields", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      return;
    }
    dispatch(registerUser({ userName, email, password, contactNo }));
    switchToLogin();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  console.log(values);

  return (
    <div>
      <div className="card">
        <div className="row g-1">
          <div className="col custom-widthh" style={{ width: "258px" }}>
            <div className="h-100 d-flex justify-content-center align-items-center">
              <div className="py-4 px-3">
                <form onSubmit={handleSubmit}>
                  <h4>
                    <u>REGISTER</u>
                  </h4>
                  <div className="row g-2 mt-1">
                    <div className="col-md-12">
                      <div className="input-field">
                        <input
                          name="userName"
                          className="form-control"
                          type="text"
                          value={values.userName}
                          onChange={handleChange}
                          id="input1"
                          required
                        />
                        <label htmlFor="input1">Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <div className="input-field">
                        <input
                          name="email"
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
                          className="form-control"
                          value={values.password}
                          onChange={handleChange}
                          type="Password"
                          id="input4"
                          required
                        />
                        <label htmlFor="input4">Password</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-12">
                      <div className="input-field">
                        <input
                          name="contactNo"
                          className="form-control"
                          value={values.contactNo}
                          onChange={handleChange}
                          id="input5"
                          required
                        />
                        <label htmlFor="input5">Mobile Number</label>
                      </div>
                    </div>
                  </div>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <span style={{ fontSize: "13px", color: "white" }}>dj</span>
                  <span style={{ fontSize: "13px" }}>
                    I agree to be contacted by 99acres for similar properties or
                    related services via WhatsApp & e-mail.
                  </span>
                  <div className="row mt-2">
                    <div className="col-md-12">
                      <button
                        className="btn btn-primary w-100 signup-button"
                        type="submit"
                      >
                        SIGN UP
                      </button>
                    </div>
                  </div>
                </form>
                <div className="member mt-1">
                  <span>Already a member?</span>
                  <span
                    className="switch-link"
                    onClick={switchToLogin}
                    style={{ color: "blue" }}
                  >
                    <u>Sign in here.</u>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 custom-width" style={{ width: "260px" }}>
            <div className="right-side-content" style={{ width: "260px" }}>
              <div
                className="content d-flex flex-column"
                style={{ marginTop: "-180px" }}
              >
                <h1>99acres</h1>
                <h6>
                  Create an account to <br />
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

export default SignUpForm;
