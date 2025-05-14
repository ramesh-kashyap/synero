import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Api from "../../Requests/Api";
const Team = () => {
    const navigate = useNavigate(); 
    const copyToClipboard = () => {
        const textToCopy = document.getElementById('textToCopy').innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Copied to clipboard!');
        });
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
    <div class="uni-body pages-user-team">
      <uni-app class="uni-app--maxwidth">
        <uni-page data-page="pages/user/team">
          <uni-page-wrapper>
            <uni-page-body>
              <uni-view data-v-1011963f="" class="page">
                <uni-view data-v-1011963f="" class="ellipse"></uni-view>
              
                <uni-view data-v-1011963f="" class="top-box">
                  <uni-view data-v-636c600c="" data-v-1011963f="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <uni-view data-v-35b9a113="" data-v-1011963f="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                      <Link to="/profile">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

                        <uni-view data-v-1011963f="" class="back"><img data-v-1011963f="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)' }} /></uni-view>
                      </Link>

                    </uni-view>
                    <uni-view data-v-35b9a113="" data-v-1011963f="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                      <uni-view data-v-1011963f="" class="page-title">My Team</uni-view>
                    </uni-view>
                    <uni-view data-v-35b9a113="" data-v-1011963f="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view>
                  </uni-view>
                </uni-view>


              
                <uni-view data-v-1011963f="" class="four-group">
                  <uni-view data-v-1011963f="" class="item">
                    <img data-v-1011963f="" src="/static/img/team-people.png" alt="" style={{filter:'brightness(0.72) invert(0)'}} />
                    <uni-view data-v-1011963f="" class="value">{income.data?.totalTeam}<span data-v-1011963f="" style={{ fontSize: '14px' }}></span></uni-view>
                    <uni-view data-v-1011963f="" class="title">Team Members</uni-view>
                  </uni-view>
                  <uni-view data-v-1011963f="" class="item">
                    <img data-v-1011963f="" src="/static/img/team-money.png" alt=""style={{filter:'brightness(0.72) invert(0)'}} />
                    <uni-view data-v-1011963f="" class="value">{income.data?.ActivetotalTeam}</uni-view>
                    <uni-view data-v-1011963f="" class="title">Total Valid</uni-view>
                  </uni-view>
                </uni-view>



                {/* <uni-view data-v-1011963f="" class="commission-box">
                  <uni-view data-v-1011963f="" class="left">
                    <uni-view data-v-1011963f="" class="value">0</uni-view>
                    <uni-view data-v-1011963f="" class="title">Can receive commission</uni-view>
                  </uni-view>
                  <uni-view data-v-1011963f="" class="receive-btn">Receive</uni-view>
                </uni-view> */}



                
                <uni-view data-v-1011963f="" class="user-title">Generation Data</uni-view>
                <uni-view data-v-1011963f="" class="member-list">
                  <uni-view data-v-1011963f="" class="member-item"style={{backgroundColor:'rgb(255 255 255)'}}>
                    <uni-view data-v-1011963f="" class="first">
                      <uni-view data-v-1011963f="" class="left">
                        <uni-view data-v-1011963f="" class="ava-box">
                          <img data-v-1011963f="" src="/static/img/image.png" alt=""/>
                            <uni-view data-v-1011963f="" class="name-box">
                              {/* <uni-view data-v-1011963f="" class="name">arshadkhanllc11</uni-view> */}
                              <uni-view data-v-1011963f="" class="uid"style={{color:'rgb(64 64 64)'}}>First generation data</uni-view>
                            </uni-view>
                        </uni-view>
                        {/* <uni-view data-v-1011963f="" class="time">First generation data</uni-view> */}
                      </uni-view>
                      <uni-view data-v-1011963f="" class="right">
                      <a onClick={() => navigate("/level?selected_level=1")}>
                      <uni-view data-v-1011963f="" class="receive-btn">View List</uni-view>
                      </a>
                        {/* <uni-view data-v-1011963f="" class="value">{income.data?.gen_team1balance || 0}</uni-view> */}
                        {/* <uni-view data-v-1011963f="" class="title">Position Amount</uni-view> */}
                      </uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="h-line"style={{backgroundColor:'#bfbfbf'}}></uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Downline Members</uni-view>
                      <uni-view data-v-1011963f="" class="value">{income.data?.gen_team1total ||0}/{income.data?.active_gen_team1total ||0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Total Deposit</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team1Recharge || 0} </uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Total Withdrawal</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team1Withdraw || 0} </uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Team Commission</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team1Earning || 0} </uni-view>
                    </uni-view>

                  </uni-view>
                </uni-view>

                <uni-view data-v-1011963f="" class="member-list">
                  <uni-view data-v-1011963f="" class="member-item"style={{backgroundColor:'rgb(255 255 255)'}}>
                    <uni-view data-v-1011963f="" class="first">
                      <uni-view data-v-1011963f="" class="left">
                        <uni-view data-v-1011963f="" class="ava-box">
                          <img data-v-1011963f="" src="/static/img/image.png" alt=""/>
                            <uni-view data-v-1011963f="" class="name-box">
                              {/* <uni-view data-v-1011963f="" class="name">arshadkhanllc11</uni-view> */}
                              <uni-view data-v-1011963f="" class="uid"style={{color:'rgb(78 76 76)'}}>Second generation data</uni-view>
                            </uni-view>
                        </uni-view>
                        {/* <uni-view data-v-1011963f="" class="time">First generation data</uni-view> */}
                      </uni-view>
                      <uni-view data-v-1011963f="" class="right">
                      <a onClick={() => navigate("/level?selected_level=2")}>
                      <uni-view data-v-1011963f="" class="receive-btn">View List</uni-view></a>
                        {/* <uni-view data-v-1011963f="" class="value">{income.data?.gen_team1balance || 0}</uni-view> */}
                        {/* <uni-view data-v-1011963f="" class="title">Position Amount</uni-view> */}
                      </uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="h-line"style={{backgroundColor:'#bfbfbf'}}></uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Downline Members</uni-view>
                      <uni-view data-v-1011963f="" class="value">{income.data?.gen_team2total ||0}/{income.data?.active_gen_team2total ||0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Total Deposit</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team2Recharge || 0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Total Withdrawal</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team2Withdraw || 0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Team Commission</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team2Earning || 0} </uni-view>
                    </uni-view>

                  </uni-view>
                </uni-view>
                <uni-view data-v-1011963f="" class="member-list">
                  <uni-view data-v-1011963f="" class="member-item"style={{backgroundColor:'rgb(255 255 255)'}}>
                    <uni-view data-v-1011963f="" class="first">
                      <uni-view data-v-1011963f="" class="left">
                        <uni-view data-v-1011963f="" class="ava-box">
                          <img data-v-1011963f="" src="/static/img/image.png" alt=""/>
                            <uni-view data-v-1011963f="" class="name-box">
                              {/* <uni-view data-v-1011963f="" class="name">arshadkhanllc11</uni-view> */}
                              <uni-view data-v-1011963f="" class="uid"style={{color:'rgb(78 76 76)'}}>Third  generation data </uni-view>
                            </uni-view>
                        </uni-view>
                        {/* <uni-view data-v-1011963f="" class="time">First generation data</uni-view> */}
                      </uni-view>
                      <uni-view data-v-1011963f="" class="right">
                      <a onClick={() => navigate("/level?selected_level=3")}>
                      <uni-view data-v-1011963f="" class="receive-btn">View List</uni-view></a>
                        {/* <uni-view data-v-1011963f="" class="value">{income.data?.gen_team1balance || 0}</uni-view> */}
                        {/* <uni-view data-v-1011963f="" class="title">Position Amount</uni-view> */}
                      </uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="h-line"style={{backgroundColor:'#bfbfbf'}}></uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Downline Members</uni-view>
                      <uni-view data-v-1011963f="" class="value">{income.data?.gen_team3total ||0}/{income.data?.active_gen_team3total ||0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Total Deposit</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team3Recharge || 0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Total Withdrawal</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team3Withdraw || 0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Team Commission</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team3Earning || 0} </uni-view>
                    </uni-view>

                  </uni-view>
                </uni-view>
                <uni-view data-v-1011963f="" class="member-list">
                  <uni-view data-v-1011963f="" class="member-item"style={{backgroundColor:'rgb(255 255 255)'}}>
                    <uni-view data-v-1011963f="" class="first">
                      <uni-view data-v-1011963f="" class="left">
                        <uni-view data-v-1011963f="" class="ava-box">
                          <img data-v-1011963f="" src="/static/img/image.png" alt=""/>
                            <uni-view data-v-1011963f="" class="name-box">
                              {/* <uni-view data-v-1011963f="" class="name">arshadkhanllc11</uni-view> */}
                              <uni-view data-v-1011963f="" class="uid"style={{color:'rgb(78 76 76)'}}>Fourth  generation data</uni-view>
                            </uni-view>
                        </uni-view>
                        {/* <uni-view data-v-1011963f="" class="time">First generation data</uni-view> */}
                      </uni-view>
                      <uni-view data-v-1011963f="" class="right">
                      <a onClick={() => navigate("/level?selected_level=4")}>
                      <uni-view data-v-1011963f="" class="receive-btn">View List</uni-view></a>
                        {/* <uni-view data-v-1011963f="" class="value">{income.data?.gen_team1balance || 0}</uni-view> */}
                        {/* <uni-view data-v-1011963f="" class="title">Position Amount</uni-view> */}
                      </uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="h-line"style={{backgroundColor:'#bfbfbf'}}></uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Downline Members</uni-view>
                      <uni-view data-v-1011963f="" class="value">{income.data?.gen_team4total ||0}/{income.data?.active_gen_team4total ||0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Total Deposit</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team4Recharge || 0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Total Withdrawal</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team4Withdraw || 0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Team Commission</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team4Earning || 0} </uni-view>
                    </uni-view>

                  </uni-view>
                </uni-view>
                <uni-view data-v-1011963f="" class="member-list">
                  <uni-view data-v-1011963f="" class="member-item"style={{backgroundColor:'rgb(255 255 255)'}}>
                    <uni-view data-v-1011963f="" class="first">
                      <uni-view data-v-1011963f="" class="left">
                        <uni-view data-v-1011963f="" class="ava-box">
                          <img data-v-1011963f="" src="/static/img/image.png" alt=""/>
                            <uni-view data-v-1011963f="" class="name-box">
                              {/* <uni-view data-v-1011963f="" class="name">arshadkhanllc11</uni-view> */}
                              <uni-view data-v-1011963f="" class="uid"style={{color:'rgb(78 76 76)'}}>Fifth  generation data</uni-view>
                            </uni-view>
                        </uni-view>
                        {/* <uni-view data-v-1011963f="" class="time">First generation data</uni-view> */}
                      </uni-view>
                      <uni-view data-v-1011963f="" class="right">
                      <a onClick={() => navigate("/level?selected_level=5")}>
                      <uni-view data-v-1011963f="" class="receive-btn">View List</uni-view></a>
                        {/* <uni-view data-v-1011963f="" class="value">{income.data?.gen_team1balance || 0}</uni-view> */}
                        {/* <uni-view data-v-1011963f="" class="title">Position Amount</uni-view> */}
                      </uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="h-line"style={{backgroundColor:'#bfbfbf'}}></uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Downline Members</uni-view>
                      <uni-view data-v-1011963f="" class="value">{income.data?.gen_team5total ||0}/{income.data?.active_gen_team5total ||0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Total Deposit</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team5Recharge || 0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Total Withdrawal</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team5Withdraw || 0}</uni-view>
                    </uni-view>
                    <uni-view data-v-1011963f="" class="layout">
                      <uni-view data-v-1011963f="" class="title">Team Commission</uni-view>
                      <uni-view data-v-1011963f="" class="value">${income.data?.gen_team5Earning || 0} </uni-view>
                    </uni-view>

                  </uni-view>
                </uni-view>


                <uni-view data-v-1011963f="" class="member-list" style={{ display: 'none',filter:'brightness(0.72) invert(0)'  }}>
                  <uni-view data-v-1011963f="" class="nodata"><img data-v-1011963f="" src="/static/img/noteam.png" alt="" />No Data</uni-view>
                </uni-view>
              </uni-view>
            </uni-page-body>
          </uni-page-wrapper>
        </uni-page>
      </uni-app>
    </div>
  );
};

export default Team;