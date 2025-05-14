import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";
import { useAuth } from "../../components/AuthContext";

import Api from "../../Requests/Api";
import Level from "../../pages/team/Level";

const NodeDetails = () => {
  const [serverc, setServerC] = useState('');
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  
  useEffect(()=>{
    fetchserve();
  })

  const fetchserve = async () => {
    try {
      const response = await Api.get(`/serverc`); // Pass a refid if 
      console.log(response.data);
      if (response.data?.success) {
        setServerC(response.data.totalIncome ||0);      
      }
    } catch (error) {
      console.error("Something went wrong fetching the wallet:", error);
    }
  };

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);
  
  const fetchUserDetails = async () => {
    try {
      const response = await Api.get('/user');
      setUserDetails(response.data); // This should be your user object
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

    const [income, setIncome] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        fetchteam();
    }, []);


    const fetchteam = async () => {        
        try {            
            const response =await Api.get('/team');
            if(response.data){
              setIncome(response.data);
            } 
            // console.log(response.data)
        } catch (err) {
            setError(err.response?.data?.error || "Error fetching income");
        }
    };

  return (

    <div class="uni-body pages-user-user">
      <uni-app class="uni-app--maxwidth">
        <uni-page data-page="pages/user/user">
          <uni-page-wrapper>
            <uni-page-body>
              <uni-view data-v-3dcfa33c="" class="page">
                <uni-view data-v-3dcfa33c="" class="ellipse">
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="top-box">
                  <uni-view data-v-636c600c="" data-v-3dcfa33c="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <uni-view data-v-35b9a113="" data-v-3dcfa33c="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                      <Link to="/dashboard"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           >

                        <uni-view data-v-1011963f="" class="back"><img data-v-1011963f="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)' }} /></uni-view>
                      </Link>                    </uni-view>
                    <uni-view data-v-35b9a113="" data-v-3dcfa33c="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                      <uni-view data-v-3dcfa33c="" class="page-title">Profile</uni-view>
                    </uni-view>
                    <uni-view data-v-35b9a113="" data-v-3dcfa33c="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                      <Link to="/setting">
                        <uni-view data-v-3dcfa33c="" class="set"><img data-v-3dcfa33c="" src="/static/img/setting.png" alt="" style={{ width: '35px',filter:'brightness(0.72) invert(0) ' }} /></uni-view>

                      </Link>
                    </uni-view>
                  </uni-view>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="ava-box"style={{backgroundImage: "url('../static/img/b.png')", borderRadius:20, height:180}}>
                  <div style={{marginTop:-15}}>
                  <uni-view data-v-3dcfa33c="" class="ava">
                    <img data-v-3dcfa33c="" src="../fav.png" alt="" />
                    </uni-view>
                    <uni-view >
                      <uni-view
                        data-v-3dcfa33c="" class="nickname">{userDetails?.name}</uni-view>
                      <uni-view data-v-3dcfa33c="" class="uid">Username: {userDetails?.username}</uni-view>

                    </uni-view>
                  </div>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="two-group">
                  <uni-view data-v-3dcfa33c="" class="item">                    
                    <Link to="/server-commission" style={{ textDecorationLine: 'none',filter:'brightness(0.72) invert(0)' }}>
                    <uni-view data-v-3dcfa33c="" class="title">Server Commission</uni-view>
                    <uni-view data-v-3dcfa33c="" translate="no" class="value"><img data-v-3dcfa33c="" src="/static/img/db.png" alt="" />$ {serverc}</uni-view>
                    </Link>

                  </uni-view>

                  <uni-view data-v-3dcfa33c="" class="item"> <Link to="/Team" style={{ textDecorationLine: 'none',filter:'brightness(0.72) invert(0)' }}>
                    <uni-view data-v-3dcfa33c="" class="title">My Team</uni-view>
                    <uni-view data-v-3dcfa33c="" class="value"><img data-v-3dcfa33c="" src="/static/img/people.png" alt="" />{income.data?.totalTeam}<span data-v-3dcfa33c="" style={{ fontSize: '14px', fontWeight: '400', marginLeft: '3px' }}>({income.data?.ActivetotalTeam}Activated)</span></uni-view>
                  </Link>

                  </uni-view>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="email-box"style={{ backgroundColor: 'hsl(180deg 11.11% 98.24%)' }} >
                  <uni-view data-v-3dcfa33c="" class="title" style={{ color: '#898989' }}>Email Address</uni-view>
                  <uni-view data-v-3dcfa33c="" class="value">**{userDetails?.email}</uni-view>
                </uni-view>
                 <Link to="/Refer"style={{ textDecorationLine: 'none' }}>
                <uni-view data-v-3dcfa33c="" class="invite-box">

                  <img data-v-3dcfa33c="" src="/static/img/iinvite.png" alt="" style={{filter: 'brightness(0.72) invert(0)'}}/>
                  <uni-view data-v-3dcfa33c="" class="invite">
                    <uni-view data-v-3dcfa33c="" class="title">Invite Friends!</uni-view>
                    <uni-view data-v-3dcfa33c="" class="text">Invite friends and earn referral commission</uni-view>
                  </uni-view>
                </uni-view>
                </Link>

                {/* <uni-view data-v-3dcfa33c="" class="kyc-box"><Link to="/Kyc"style={{ textDecorationLine: 'none' }}>
                  <uni-view data-v-3dcfa33c="" class="value"><img data-v-3dcfa33c="" src="/static/img/warn.png" alt="" />KYC Certification</uni-view>
                  <uni-view data-v-3dcfa33c="" class="title">Your account is not verified yet please add add your personal details to verify</uni-view>
                  <uni-view data-v-3dcfa33c="" class="go-kyc">Verify Now</uni-view>
                  </Link>
                </uni-view> */}
               <Link to="/Wallet" style={{ textDecorationLine: 'none' }}>
                <uni-view data-v-3dcfa33c="" class="invite-box">
                  <img data-v-3dcfa33c="" src="/static/img/iwallet.png" alt="" />
                  <uni-view data-v-3dcfa33c="" class="invite">
                    <uni-view data-v-3dcfa33c="" class="title">Wallet</uni-view>
                    <uni-view data-v-3dcfa33c="" class="text">Manage wallet addresses and bank cards</uni-view>
                  </uni-view>
                </uni-view>
                </Link>
                <uni-view data-v-3dcfa33c="" class="invite-box">
                  <img data-v-3dcfa33c="" src="/static/img/isupport.png" alt="" />
                  <uni-view data-v-3dcfa33c="" class="invite">
                    <uni-view data-v-3dcfa33c="" class="title">Service</uni-view>
                    <uni-view data-v-3dcfa33c="" class="text">If you have any questions, please contact the customer service team in time</uni-view>
                  </uni-view>
                </uni-view>
                <uni-view data-v-3dcfa33c="" class="logout" onClick={handleLogout}>Logout</uni-view>

              </uni-view>
            </uni-page-body>
          </uni-page-wrapper>
        </uni-page>



      </uni-app>
    </div>
  );
};

export default NodeDetails;
