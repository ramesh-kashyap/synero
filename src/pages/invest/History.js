import React, { useState, useEffect } from 'react';
import { ChevronDown } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";
import Api from "../../Requests/Api";
import { toast } from 'react-toastify';

const History = () => {
    const [buy_funds, setInvestments] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch investments when component mounts
    useEffect(() => {
        const fetchInvestments = async () => {
            try {
                const response = await Api.get("/investments");
                // Check the response and set the data
                if (response.data.success) {
                    setInvestments(response.data.buy_funds);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error);
                // toast.error("Error fetching investments!");
            }
        };

        fetchInvestments();
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
                  
                        <uni-view data-v-53c5f33f="" class="back" onClick={backClick}><img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{ width: '35px', marginTop: '5px',filter: 'brightness(0) invert(0)' }} /></uni-view>


                </uni-view>
                    <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}><uni-view data-v-b0a5c882="" class="page-title">Deposit Records</uni-view></uni-view>

                    <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view></uni-view></uni-view>
  
                    {buy_funds.length === 0 ? (
                        <uni-view data-v-b0a5c882="" ><uni-view data-v-b0a5c882="" class="nodata"><img data-v-b0a5c882="" src="/static/img/nodata.png" alt="" />No Data</uni-view></uni-view>
                    ) : (
                        <uni-view data-v-b0a5c882="" class="content">

                            {buy_funds.map((buy_fund, index) => (

                                <uni-view data-v-b0a5c882="" class="item">
                                    <uni-view data-v-b0a5c882="" class="first">
                                        <uni-view data-v-b0a5c882="" class="left">{buy_fund.txn_no}</uni-view>
                                        <uni-view
                                            data-v-b0a5c882=""
                                            style={{
                                                color: buy_fund.status === 'Decline' ? 'red' :
                                                    (buy_fund.status === 'Active' ? 'green' : 'orange'),
                                            }}
                                        >
                                            {buy_fund.status}
                                        </uni-view>

                                    </uni-view>
                                    <uni-view data-v-b0a5c882="" class="h-line"></uni-view>
                                    <uni-view data-v-b0a5c882="" class="layout">
                                        <uni-view data-v-b0a5c882="" class="title">Create Time</uni-view>
                                        <uni-view data-v-b0a5c882="" class="value">{new Date(buy_fund.created_at).toLocaleDateString()}</uni-view>
                                    </uni-view>
                                    <uni-view data-v-b0a5c882="" class="layout">
                                        <uni-view data-v-b0a5c882="" class="title">Amount</uni-view>
                                        <uni-view data-v-b0a5c882="" class="value">{buy_fund.amount} USDT</uni-view>
                                    </uni-view>
                                    <uni-view data-v-b0a5c882="" class="layout">
                                        <uni-view data-v-b0a5c882="" class="title">Type</uni-view>
                                        <uni-view data-v-b0a5c882="" class="value">{buy_fund.type}</uni-view>
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

export default History;



// <div>
//   <h2>Investment History</h2>
//   <ul>
//     {investments.map((investment, index) => (
//       <li key={index}>
//         <p>Amount: </p>
//         <p>Status: {investment.status}</p>
//         <p>Created At: </p>
//       </li>
//   </ul>
// </div>
