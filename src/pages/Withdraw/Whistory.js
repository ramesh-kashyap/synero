import React, { useState, useEffect } from 'react';
import { ChevronDown } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";
import Api from "../../Requests/Api";
import { toast } from 'react-toastify';

const Whistory = () => {
    const [withdraws, setWithdraws] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    // Fetch investments when component mounts
    useEffect(() => {
        const fetchWithdraws = async () => {
            try {
               
                const response = await Api.get("/withdraw-history",);

                // Check the response and set the data
                if (response.data.success) {
                    setWithdraws(response.data.withdraws);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error);
               //  toast.error("Error fetching withdraws!");
            }
        };

        fetchWithdraws();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    const backClick = () => {
        navigate(-1); // 👈 Go back to the previous page in history
    };
    return (
        <div class=" ">
            <uni-app class="">

                <uni-page data-page="pages/user/withdrawalRecords"> <uni-page-wrapper><uni-page-body><uni-view data-v-b0a5c882="" class="page"><uni-view data-v-b0a5c882="" class="ellipse"></uni-view><uni-view data-v-b0a5c882="" class="top-box"><uni-view data-v-636c600c="" data-v-b0a5c882="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}><uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                  
                        <uni-view data-v-53c5f33f="" class="back"onClick={backClick}><img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{ width: '35px', marginTop: '5px',filter: 'brightness(0) invert(0)' }} /></uni-view>

              
                </uni-view>
                    <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}><uni-view data-v-b0a5c882="" class="page-title">Withdraw Records</uni-view></uni-view>

                    <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view></uni-view></uni-view>
                    {/* <uni-view data-v-b0a5c882="" class="top-group"><uni-view data-v-b0a5c882="" class="top-btn selected">USDT</uni-view></uni-view> */}
                    {loading ? (
                        <p>Loading...</p>
                    ) : withdraws.length === 0 ? (
                     // style={{ display: 'none' }} 
                     <uni-view data-v-b0a5c882="" class="content" ><uni-view data-v-b0a5c882="" class="nodata"><img data-v-b0a5c882="" src="/static/img/nodata.png" alt="" />No Data</uni-view></uni-view>
                  ) : (
                        <uni-view data-v-b0a5c882="" class="content">

                            {withdraws.map((withdraw, index) => (

                                <uni-view data-v-b0a5c882="" class="item">
                                    <uni-view data-v-b0a5c882="" class="first">
                                        <uni-view data-v-b0a5c882="" class="left">{withdraw.txn_id}</uni-view>
                                        <uni-view
                                            data-v-b0a5c882=""
                                            style={{
                                                color: withdraw.status === 'Pending' ? 'orange' :
                                                    (withdraw.status === 'Approved' ? 'green' : 'orange'),
                                            }}
                                        >
                                            {withdraw.status}
                                        </uni-view>

                                    </uni-view>
                                    <uni-view data-v-b0a5c882="" class="h-line"></uni-view>
                                    <uni-view data-v-b0a5c882="" class="layout">
                                        <uni-view data-v-b0a5c882="" class="title">Create Time</uni-view>
                                        <uni-view data-v-b0a5c882="" class="value">{new Date(withdraw.created_at).toLocaleDateString()}</uni-view>
                                    </uni-view>
                                    <uni-view data-v-b0a5c882="" class="layout">
                                        <uni-view data-v-b0a5c882="" class="title">Amount</uni-view>
                                        <uni-view data-v-b0a5c882="" class="value">{withdraw.payable_amt} USDT</uni-view>
                                    </uni-view>
                                    <uni-view data-v-b0a5c882="" class="layout">
                                        <uni-view data-v-b0a5c882="" class="title">Type</uni-view>
                                        <uni-view data-v-b0a5c882="" class="value">{withdraw.payment_mode}</uni-view>
                                    </uni-view>
                                </uni-view>
                            ))}

                        </uni-view>

                    )}

                </uni-view></uni-page-body></uni-page-wrapper></uni-page>
            </uni-app>
        </div>
    );
};

export default Whistory;


