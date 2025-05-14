import React, { useState,useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Api from '../../Requests/Api';

const ServerCommission = () => {

 const [serverc, setServerC] = useState('');
 const [createdAt, setCreatedAt] = useState('');
 const [remarks, setRemarks] = useState('');
  useEffect(()=>{
    fetchserve();
  })

  const fetchserve = async () => {
    try {
      const response = await Api.get(`/serverc`); // Pass a refid if 
      console.log(response.data);
      if (response.data?.success) {
        const totalIncome = parseFloat(response.data.totalIncome || 0);
        setServerC(totalIncome.toFixed(4));   
        setCreatedAt(response.data.created_at || '');
        setRemarks(response.data.remarks || '');
      }
    } catch (error) {
      console.error("Something went wrong fetching the wallet:", error);
    }
  };
    return (

        <div class="uni-body pages-user-serverCommission">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/user/serverCommission">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-cc630f0a="" class="page">
                                <uni-view data-v-cc630f0a="" class="ellipse"></uni-view>
                                <uni-view data-v-cc630f0a="" class="top-box">
                                    <uni-view data-v-636c600c="" data-v-cc630f0a="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                        <uni-view data-v-35b9a113="" data-v-cc630f0a="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <Link to="/profile">
                                                <uni-view data-v-cc630f0a="" class="back"><img data-v-cc630f0a="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)' }} /></uni-view>

                                            </Link>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-cc630f0a="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <uni-view data-v-cc630f0a="" class="page-title">Server Commission</uni-view>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-cc630f0a="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view>
                                    </uni-view>
                                </uni-view>
                                {createdAt && serverc && remarks ? (
                                <uni-view data-v-cc630f0a="" class="list-box">
                                    <uni-view data-v-cc630f0a="" class="item">
                                        <uni-view data-v-cc630f0a="" class="first">
                                            <uni-view data-v-cc630f0a="" class="left">{createdAt}</uni-view>
                                            <uni-view data-v-cc630f0a="" class="right" style={{ color: 'rgb(53, 247, 231)' }}>+{serverc}</uni-view>
                                        </uni-view>
                                        <uni-view data-v-cc630f0a="" class="layer">
                                            <uni-view data-v-cc630f0a="" class="title">Fund Flows</uni-view>
                                            <uni-view data-v-cc630f0a="" class="value">{remarks}</uni-view>
                                        </uni-view>
                                    </uni-view>
                                </uni-view>
                                ) : (
                                    <uni-view data-v-b0a5c882="" class="content" ><uni-view data-v-b0a5c882="" class="nodata"><img data-v-b0a5c882="" src="/static/img/nodata.png" alt="" />No Data</uni-view></uni-view>

                                  )}
                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>

            </uni-app>

        </div>
    );
};

export default ServerCommission;












