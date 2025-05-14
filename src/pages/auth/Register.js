import React, { useState, useEffect } from "react";
import Api from "../../Requests/Api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { PhoneInput } from "react-international-phone";
import { useLocation } from "react-router-dom";
import "react-international-phone/style.css";
import 'react-phone-input-2/lib/style.css';
import '../../index.css'
const Register = () => {
   const [isChecked, setIsChecked] = useState(false);

   const toggleCheckbox = () => {
      setIsChecked(!isChecked);
   };

  const [formData, setFormData] = useState({
    sponsor: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
    countryCode: "",
    country: "",
  });
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sponsorCode = params.get("sponsor");
    if (sponsorCode) {
      setFormData((prevData) => ({ ...prevData, sponsor: sponsorCode }));
    }
  }, [location.search]);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleRegister = async () => {
    if (formData.password !== formData.password_confirmation) {
      toast.error("Passwords do not match");
      return;
    }


    try {
      const res = await Api.post("/register", {
        sponsor: formData.sponsor,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        countryCode: formData.countryCode,
      });
      if (res.status === 201) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Registration failed");
    }
  };


  return (
    <div class="uni-body pages-login-login">
      <uni-app class="uni-app--maxwidth">
        <uni-page data-page="pages/login/login">
          <uni-page-wrapper>
            <uni-page-body>
              <uni-view data-v-2b56ecaf="" class="page">
                <uni-view data-v-2b56ecaf="" class="ellipse"></uni-view>
                <uni-view data-v-2b56ecaf="" class="service">
                  <uni-text class="fas fa-headphones"
                    data-v-45a6b600=""
                    data-v-2b56ecaf=""

                    style={{ color: "rgb(0, 0, 0)", fontSize: "20px" }}
                  ></uni-text>
                </uni-view>
                <uni-view data-v-2b56ecaf="" class="language">
                  <img style={{filter: 'brightness(0) invert(0)'}}
                    data-v-2b56ecaf=""
                    src="/static/img/icon-lang.png"
                    alt=""
                  />
                </uni-view>
                <uni-view data-v-2b56ecaf="" class="welcome">
                  Welcome Back!
                </uni-view>
                <uni-view data-v-2b56ecaf="" class="welcome-tips">
                  Good to see you here! Add your account details to continue{" "}
                </uni-view>
                <uni-view data-v-2b56ecaf="" class="input-box">
                  <uni-view data-v-2b56ecaf="" class="input-layer">
                    <uni-view data-v-2b56ecaf="" class="input-title">
                      Name
                    </uni-view>
                    <uni-view
                      data-v-30449abe=""
                      data-v-2b56ecaf=""
                      class="uni-easyinput"
                    >
                      <uni-view
                        data-v-30449abe=""
                        class="uni-easyinput__content is-input-border "
                        style={{
                          borderColor: "rgb(22, 191, 179)",
                          backgroundColor: "unset",
                        }}
                      >
                        <uni-view data-v-30449abe="" class="content-clear-icon">
                          <img
                            data-v-30449abe=""
                            src="/static/img/user.png"
                            alt=""
                          />
                        </uni-view>{" "}
                        <uni-input
                          data-v-30449abe=""
                          class="uni-easyinput__content-input"
                          style={{ paddingLeft: "10px" }}
                        >
                          <div class="uni-input-wrapper">
                            <input
                              maxlength="140"

                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name"

                              type="text"
                              name="name"
                              required
                              class="uni-input-input"
                            />
                          </div>
                        </uni-input>
                        <uni-text
                          data-v-45a6b600=""
                          data-v-30449abe=""
                          class="uni-icons content-clear-icon "
                          style={{
                            color: "rgb(192, 196, 204)",
                            fontSize: "24px",
                          }}
                        >
                          <span></span>
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>
                  <uni-view data-v-2b56ecaf="" class="input-layer">
                    <uni-view data-v-2b56ecaf="" class="input-title">
                      Invitation Code
                    </uni-view>
                    <uni-view
                      data-v-30449abe=""
                      data-v-2b56ecaf=""
                      class="uni-easyinput"
                    >
                      <uni-view
                        data-v-30449abe=""
                        class="uni-easyinput__content is-input-border "
                        style={{
                          borderColor: "rgb(22, 191, 179)",
                          backgroundColor: "unset",
                        }}
                      >
                        <uni-view data-v-30449abe="" class="content-clear-icon">
                          <img
                            data-v-30449abe=""
                            src="/static/img/user.png"
                            alt=""
                          />
                        </uni-view>{" "}
                        <uni-input
                          data-v-30449abe=""
                          class="uni-easyinput__content-input"
                          style={{ paddingLeft: "10px" }}
                        >
                          <div class="uni-input-wrapper">
                            <input
                              maxLength="140"

                              type="text"
                              name="sponsor"
                              value={formData.sponsor}
                              onChange={handleChange}

                              class="uni-input-input"
                              required

                              placeholder="Enter your Sponsor"
                            />
                          </div>
                        </uni-input>
                        <uni-text
                          data-v-45a6b600=""
                          data-v-30449abe=""
                          class="uni-icons content-clear-icon "
                          style={{
                            color: "rgb(192, 196, 204)",
                            fontSize: "24px",
                          }}
                        >
                          <span></span>
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  <uni-view data-v-2b56ecaf="" class="input-layer">
                    <uni-view data-v-2b56ecaf="" class="input-title">
                      Mobile
                    </uni-view>
                    <uni-view
                      data-v-30449abe=""
                      data-v-2b56ecaf=""
                      class="uni-easyinput"
                    >
                      <uni-view
                        data-v-30449abe=""
                        class="uni-easyinput__content is-input-border "
                        style={{
                          borderColor: "rgb(22, 191, 179)",
                          backgroundColor: "unset",
                        }}
                      >
                        <uni-view data-v-30449abe="" class="content-clear-icon">
                          <div class="relative flex items-center bg-[rgb(78_78_78_/_40%)]  rounded-l-xl px-2 h-[53px] text-white text-base min-w-[85px]">
                            <PhoneInput
                              defaultCountry="IN"
                              value={formData.countryCode}
                              onChange={(value, meta) => {
                                setFormData({
                                  ...formData,
                                  countryCode: meta.country.dialCode,
                                  country: meta.country.iso2.toUpperCase(),
                                });
                              }}
                              inputClassName="!opacity-0 !w-0"
                              containerClassName="!absolute !left-0 !top-0 w-full h-full"
                              buttonClassName="!h-full !bg-transparent !border-none z-10 !pl-1 !pr-1"
                            />
                            {/* <span className="ml-[-15px] z-0">+{formData.countryCode}</span> */}
                          </div>
                        </uni-view>{" "}
                        <uni-input
                          data-v-30449abe=""
                          class="uni-easyinput__content-input"
                          style={{ paddingLeft: "10px" }}
                        >
                          <div class="uni-input-wrapper">
                            <input
                              maxLength="140"

                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}

                              class="uni-input-input"
                              required

                              placeholder="Enter your Phone Number"
                            />
                          </div>
                        </uni-input>
                        <uni-text
                          data-v-45a6b600=""
                          data-v-30449abe=""
                          class="uni-icons content-clear-icon "
                          style={{
                            color: "rgb(192, 196, 204)",
                            fontSize: "24px",
                          }}
                        >
                          <span></span>
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  <uni-view data-v-2b56ecaf="" class="input-layer">
                    <uni-view data-v-2b56ecaf="" class="input-title">
                      Email
                    </uni-view>
                    <uni-view
                      data-v-30449abe=""
                      data-v-2b56ecaf=""
                      class="uni-easyinput"
                    >
                      <uni-view
                        data-v-30449abe=""
                        class="uni-easyinput__content is-input-border "
                        style={{
                          borderColor: "rgb(22, 191, 179)",
                          backgroundColor: "unset",
                        }}
                      >
                        <uni-view data-v-30449abe="" class="content-clear-icon">
                          <img
                            data-v-30449abe=""
                            src="/static/img/email-fill.png"
                            alt=""
                          />
                        </uni-view>{" "}
                        <uni-input
                          data-v-30449abe=""
                          class="uni-easyinput__content-input"
                          style={{ paddingLeft: "10px" }}
                        >
                          <div class="uni-input-wrapper">
                            <input
                              maxlength="140"

                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"

                              type="email"
                              name="email"
                              required
                              class="uni-input-input"
                            />
                          </div>
                        </uni-input>
                        <uni-text
                          data-v-45a6b600=""
                          data-v-30449abe=""
                          class="uni-icons content-clear-icon "
                          style={{
                            color: "rgb(192, 196, 204)",
                            fontSize: "24px",
                          }}
                        >
                          <span></span>
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  <uni-view data-v-2b56ecaf="" class="input-layer">
                    <uni-view data-v-2b56ecaf="" class="input-title">
                      Password
                    </uni-view>
                    <uni-view
                      data-v-30449abe=""
                      data-v-2b56ecaf=""
                      class="uni-easyinput"
                    >
                      <uni-view
                        data-v-30449abe=""
                        class="uni-easyinput__content is-input-border "
                        style={{
                          borderColor: "rgb(22, 191, 179)",
                          backgroundColor: "unset",
                        }}
                      >
                        <uni-view data-v-30449abe="" class="content-clear-icon">
                          <img
                            data-v-30449abe=""
                            src="/static/img/lock.png"
                            alt=""
                          />
                        </uni-view>{" "}
                        <uni-input
                          data-v-30449abe=""
                          class="uni-easyinput__content-input"
                          style={{ paddingLeft: "10px" }}
                        >
                          <div class="uni-input-wrapper">
                            <input
                              maxlength="140"
                              step=""
                              enterkeyhint="done"

                              type="password"
                              value={formData.password}
                              onChange={handleChange}
                              name="password"
                              placeholder="Enter your password"
                              required
                              class="uni-input-input"
                            />
                          </div>
                        </uni-input>
                        <uni-text
                          data-v-45a6b600=""
                          data-v-30449abe=""
                          class="uni-icons content-clear-icon "
                          style={{
                            color: "rgb(192, 196, 204)",
                            fontSize: "24px",
                          }}
                        >
                          <span></span>
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  <uni-view data-v-2b56ecaf="" class="input-layer">
                    <uni-view data-v-2b56ecaf="" class="input-title">
                      Confirm Password{" "}
                    </uni-view>
                    <uni-view
                      data-v-30449abe=""
                      data-v-2b56ecaf=""
                      class="uni-easyinput"
                    >
                      <uni-view
                        data-v-30449abe=""
                        class="uni-easyinput__content is-input-border "
                        style={{
                          borderColor: "rgb(22, 191, 179)",
                          backgroundColor: "unset",
                        }}
                      >
                        <uni-view data-v-30449abe="" class="content-clear-icon">
                          <img
                            data-v-30449abe=""
                            src="/static/img/lock.png"
                            alt=""
                          />
                        </uni-view>{" "}
                        <uni-input
                          data-v-30449abe=""
                          class="uni-easyinput__content-input"
                          style={{ paddingLeft: "10px" }}
                        >
                          <div class="uni-input-wrapper">
                            {/* <div
                              class="uni-input-placeholder uni-easyinput__placeholder-class"
                              data-v-30449abe=""
                              data-v-2b56ecaf=""
                              style={{ display: "none" }}
                            >
                              Please Enter password
                            </div> */}
                            <input
                              maxlength="140"
                              step=""
                              enterkeyhint="done"

                              type="password"
                              name="password_confirmation"

                              value={formData.password_confirmation}
                              onChange={handleChange}

                              required
                              class="uni-input-input"
                              placeholder="Enter your c_password"

                            />
                          </div>
                        </uni-input>
                        <uni-text
                          data-v-45a6b600=""
                          data-v-30449abe=""
                          class="uni-icons content-clear-icon "
                          style={{
                            color: "rgb(192, 196, 204)",
                            fontSize: "24px",
                          }}
                        >
                          <span></span>
                        </uni-text>
                      </uni-view>
                    </uni-view>
                  </uni-view>

                  <uni-view
                    data-v-90aab294=""
                    class="check-box"
                    style={{ marginTop: '10px' }}
                  >
                    <uni-checkbox-group data-v-90aab294="">
                      <uni-label
                        data-v-90aab294=""
                        class="warning-text uni-label-pointer"
                      >
                        <uni-checkbox
                          data-v-90aab294=""
                          style={{ transform: 'scale(0.7)', cursor: 'pointer' }}
         onClick={toggleCheckbox}
                        >
                          <div class="uni-checkbox-wrapper">
                            <div class={`uni-checkbox-input ${isChecked ? 'uni-checkbox-input-checked' : 'uni-checkbox-input-unchecked'}`}
                          style={{ color: 'rgb(0, 0, 0)' }}
                            ></div>
                          </div>
                        </uni-checkbox>
                        <uni-text data-v-90aab294="" class="agreement-tips">
                          <span>
                            I have read and agree to the following agreement:
                          </span>
                        </uni-text>
                        {/* <uni-text data-v-90aab294="" class="agreement">
                          <span>"AML/CFT Policy"</span>
                        </uni-text>
                        ,
                        <uni-text data-v-90aab294="" class="agreement">
                          <span>"Synero STAR LLC User Agreement"</span>
                        </uni-text> */}
                      </uni-label>
                    </uni-checkbox-group>
                  </uni-view>

                  <button
                    data-v-2b56ecaf=""
                    class="login"
                    style={{ width: "100%" }}
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                  

                  <uni-view data-v-2b56ecaf="" class="register">
                    Don't have an account?
                    <Link to="/login" style={{ textDecorationLine: 'none' }}><uni-view data-v-2b56ecaf="" class="create">Log in</uni-view></Link>
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