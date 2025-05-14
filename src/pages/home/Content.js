import React, { useState } from "react";
import Api from "../../Requests/Api";

const Register = () => {
  const [user, setUser] = useState({
    sponsor: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [clickedField, setClickedField] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleClickInput = (field) => {
    setClickedField(field);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (clickedField) {
      setUser((prev) => ({
        ...prev,
        [clickedField]: value,
      }));
    }
  };

  const handleRegister = async () => {
    setMessage("");
    setError("");

    if (user.password !== user.password_confirmation) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await Api.post("/register", {
        sponsor: user.sponsor,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
      });

      setMessage("✅ Registration successful!");
      setUser({
        sponsor: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
      setClickedField("");
    } catch (error) {
      const res = error.response?.data;
      if (res?.errors) {
        const firstError = Object.values(res.errors)[0][0];
        setError(firstError);
      } else {
        setError("Something went wrong.");
      }
    }
  };

  return (
    <div className="uni-body pages-login-login">
      <uni-app class="uni-app--maxwidth">
        <uni-page data-page="pages/login/login">
          <uni-page-wrapper>
            <uni-page-body>
              <uni-view class="page">
                <uni-view class="ellipse"></uni-view>

                <uni-view class="welcome">Welcome!</uni-view>
                <uni-view class="welcome-tips">Enter details to register</uni-view>

                <uni-view class="input-box">
                  {/* Sponsor */}
                  <uni-view class="input-layer">
                    <uni-view class="input-title">Sponsor</uni-view>
                    <uni-view class="uni-easyinput">
                      <uni-view class="uni-easyinput__content is-input-border">
                        <div className="uni-input-wrapper">
                          <input
                            type="text"
                            value={user.sponsor}
                            onClick={() => handleClickInput("sponsor")}
                            onChange={handleChange}
                            placeholder="Sponsor"
                            className="uni-input-input"
                          />
                        </div>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  {/* Email */}
                  <uni-view class="input-layer">
                    <uni-view class="input-title">Email</uni-view>
                    <uni-view class="uni-easyinput">
                      <uni-view class="uni-easyinput__content is-input-border">
                        <div className="uni-input-wrapper">
                          <input
                            type="email"
                            value={user.email}
                            onClick={() => handleClickInput("email")}
                            onChange={handleChange}
                            placeholder="Email"
                            className="uni-input-input"
                          />
                        </div>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  {/* Password */}
                  <uni-view class="input-layer">
                    <uni-view class="input-title">Password</uni-view>
                    <uni-view class="uni-easyinput">
                      <uni-view class="uni-easyinput__content is-input-border">
                        <div className="uni-input-wrapper">
                          <input
                            type="password"
                            value={user.password}
                            onClick={() => handleClickInput("password")}
                            onChange={handleChange}
                            placeholder="Password"
                            className="uni-input-input"
                          />
                        </div>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  {/* Confirm Password */}
                  <uni-view class="input-layer">
                    <uni-view class="input-title">Confirm Password</uni-view>
                    <uni-view class="uni-easyinput">
                      <uni-view class="uni-easyinput__content is-input-border">
                        <div className="uni-input-wrapper">
                          <input
                            type="password"
                            value={user.password_confirmation}
                            onClick={() => handleClickInput("password_confirmation")}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="uni-input-input"
                          />
                        </div>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  {/* Register Button */}
                  <button className="login" onClick={handleRegister}>
                    Register
                  </button>

                  {/* Feedback */}
                  {message && <p style={{ color: "green" }}>{message}</p>}
                  {error && <p style={{ color: "red" }}>{error}</p>}

                  <uni-view class="register">
                    Already have an account? <uni-view class="create">Login</uni-view>
                  </uni-view>
                </uni-view>
              </uni-view>
            </uni-page-body>
          </uni-page-wrapper>
        </uni-page>
      </uni-app>
    </div>
  );
};

export default Register;
