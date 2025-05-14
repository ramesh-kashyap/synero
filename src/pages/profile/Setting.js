

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";
import { useAuth } from "../../components/AuthContext";

import Api from "../../Requests/Api";
import Level from "./Level";

const Setting = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    // const [userDetails, setUserDetails] = useState(null);
    // const token = localStorage.getItem('authToken'); // Retrieve token from localStorage

    // useEffect(() => {
    //     const fetchUserDetails = async () => {
    //         try {
    //             const response = await Api.get('/user', {
    //                 headers: {
    //                     'Authorization': `Bearer ${token}`
    //                 }
    //             });
    //             setUserDetails(response.data); // Save the response data in state
    //         } catch (error) {
    //             console.error("Error fetching user details:", error);
    //         }
    //     };

    //     if (token) {
    //         fetchUserDetails(); // Fetch user details if token exists
    //     }
    // }, [token]);
 const backClick = () => {
        navigate(-1); // 👈 Go back to the previous page in history
    };

    return (

        <div class="uni-body pages-user-settings" >
            <uni-app class="uni-app--maxwidth"><uni-page data-page="pages/user/settings">  <uni-page-wrapper><uni-page-body><uni-view data-v-c746edd2="" class="page"><uni-view data-v-c746edd2="" class="ellipse"></uni-view><uni-view data-v-c746edd2="" class="top-box"><uni-view data-v-636c600c="" data-v-c746edd2="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}><uni-view data-v-35b9a113="" data-v-c746edd2="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
               

                    <uni-view data-v-c746edd2="" class="back"onClick={backClick}><img data-v-c746edd2="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)' }} /></uni-view>

                
            </uni-view><uni-view data-v-35b9a113="" data-v-c746edd2="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <uni-view data-v-c746edd2="" class="page-title">Settings</uni-view></uni-view><uni-view data-v-35b9a113="" data-v-c746edd2="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view></uni-view></uni-view>
                <uni-view data-v-c746edd2="" class="list-box">


                    <Link to="/change-password" style={{
                        textDecoration: 'none',
                        color: 'inherit'
                    }}>

                        <uni-view data-v-c746edd2="" class="list-item">

                            <uni-view data-v-c746edd2="" class="imgbox"><img data-v-c746edd2="" src="/static/img/pen1.png" alt=""  style={{filter: 'brightness(0) invert(0)'}}/>
                                <uni-view data-v-c746edd2="" class="title">Change Password</uni-view>
                            </uni-view><uni-view data-v-c746edd2="" class="right"><img data-v-c746edd2="" src="{{asset('')}}static/img/in.png" alt="" /></uni-view>

                        </uni-view>
                    </Link>
                    <Link to="/faq" style={{
                        textDecoration: 'none',
                        color: 'inherit' // ya apna custom color e.g., 'black'
                    }}>

                        <uni-view data-v-c746edd2="" class="list-item"><uni-view data-v-c746edd2="" class="imgbox"><img data-v-c746edd2="" src="/static/img/faq.png" alt=""  style={{filter: 'brightness(1) invert(0.90)'}}/>
                            <uni-view data-v-c746edd2="" class="title">FAQ</uni-view></uni-view><uni-view data-v-c746edd2="" class="right"><img data-v-c746edd2="" src="{{asset('')}}static/img/in.png" alt=""  style={{filter: 'brightness(0) invert(0)'}}/></uni-view></uni-view>
                    </Link>

                    <Link to="/langauge" style={{
                        textDecoration: 'none',
                        color: 'inherit' // ya apna custom color e.g., 'black'
                    }}>

                        <uni-view data-v-c746edd2="" class="list-item"><uni-view data-v-c746edd2="" class="imgbox"><img data-v-c746edd2="" src="/static/img/lang.png" alt=""  style={{filter: 'brightness(0) invert(0)'}}/><uni-view data-v-c746edd2="" class="title">Language</uni-view></uni-view>
                            <uni-view data-v-c746edd2="" class="right"><img data-v-c746edd2="" src="{{asset('')}}static/img/in.png/" alt="" /></uni-view></uni-view>
                    </Link>

                </uni-view></uni-view></uni-page-body>
            </uni-page-wrapper></uni-page>

            </uni-app>

        </div>
    );
};

export default Setting;
