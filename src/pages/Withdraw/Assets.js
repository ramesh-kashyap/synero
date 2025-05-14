import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Api from '../../Requests/Api';

const Assets = () => {
    const [transactions, setTransactions] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [balance, setBalance] = useState(null);
    useEffect(() => {
        fetchUsers();
        withavail();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await Api.get("/getUserHistory");

            if (response.data && response.data.success) {
                console.log(response.data);
                setTransactions({
                    investment: response.data.investment || [],
                    income: response.data.income || [],
                    withdraw: response.data.withdraw || [],
                    buyfund: response.data.buyfund || []
                });
            } else {
                setTransactions({
                    investment: [],
                    income: [],
                    withdraw: [],
                    buyfund: [],
                });
            }

            console.log("Fetched:", response.data);
        } catch (err) {
            setError(err.response?.data?.error || "Error fetching history");
        }
    };
    const withavail = async () => {
          try {
             const response = await Api.get("/availbal");
             if (response.data) {
                setBalance(response.data.AvailBalance);
             }
          } catch (error) {
             console.error(error);
             setError(error);
          }
       }


       const getAmountColor = (type) => {
        return type === 'buyfund' || type === 'income' ? 'rgb(21, 213, 199)' : 'rgb(255, 61, 61)';
    };

    const getAmountPrefix = (type) => {
        return type === 'buyfund' || type === 'income' ? '+ ' : '- ';
    };
    const getAmount = (type, item) => {
        return type === 'income' ? item.comm : item.amount;
    };
    

    return (
        <div class="uni-body pages-assets-assets">
            <uni-app class="uni-app--showtabbar uni-app--maxwidth">
                <uni-page
                    data-page="pages/assets/assets">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-248ca5b8=""
                                class="page">
                                <uni-view data-v-248ca5b8="" class="ellipse"></uni-view>
                                <uni-view
                                    data-v-248ca5b8="" class="page-title">Asset Management</uni-view>
                                    
                                <uni-view
                                    data-v-248ca5b8="" class="balance-card">
                                    <uni-view data-v-248ca5b8="" class="first">
                                        <uni-view
                                            data-v-248ca5b8="" class="balance-title">Your Balance
                                            (USDT)
                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-248ca5b8="" class="second">
                                        <uni-view
                                            data-v-248ca5b8="" translate="no" class="balance-num">$ {balance ||0}</uni-view>
                                        <uni-view
                                            data-v-248ca5b8="" translate="no" class="profit-num">
                                            
                                            <uni-view
                                                data-v-248ca5b8=""
                                                class="today">Yesterday</uni-view>
                                        </uni-view>
                                    </uni-view>
                                    <uni-view
                                        data-v-248ca5b8="" class="third">
                                        <uni-view data-v-06ae08d2=""
                                            class="balance-btn">
                                            <Link to="/deposit" style={{ color: '#000', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
                                                Deposit
                                            </Link><img data-v-06ae08d2="" src="/static/img/usdtdown.png"
                                                alt="" style={{filter: 'brightness(0.90) invert(6)' }}/>
                                        </uni-view>
                                        <uni-view data-v-248ca5b8="" class="transfer"><img
                                            data-v-248ca5b8="" src="/static/img/transfer.png" alt=""style={{filter: 'brightness(0) invert(0)'}} /></uni-view>
                                        <uni-view
                                            data-v-06ae08d2="" class="balance-btn">  <Link to="/withdraw-req" style={{ color: '#000', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
                                                Withdraw
                                            </Link><img data-v-06ae08d2=""
                                                src="/static/img/usdtup.png" alt="" style={{filter: 'brightness(0.90) invert(6)' }}/></uni-view>
                                    </uni-view>
                                </uni-view>
                                {/* <uni-view data-v-248ca5b8="" class="user-title">Earnings in the past 7 days</uni-view> */}
                                {/* <uni-view
                                    data-v-248ca5b8="" class="income-box">
                                    <uni-view data-v-c3c2634e="" data-v-248ca5b8=""
                                        style={{ width: '400px', height: '200px', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
                                        echarts_instance="ec_1744619586455">
                                        <div
                                            style={{ position: 'relative', width: '384px', height: '200px', padding: '0px', margin: '0px', borderWidth: '0px', cursor: 'default' }}>
                                            <canvas data-zr-dom-id="zr_0" width="384" height="200"
                                                style={{ position: 'absolute', left: '0px', top: '0px', width: '384px', height: '200px', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', padding: '0px', margin: '0px', borderWidth: '0px' }}></canvas>
                                        </div>
                                    </uni-view>
                                </uni-view> */}
                                <uni-view data-v-248ca5b8="" class="user-title"
                                    style={{ marginTop: '30px' }}>Funding Details <uni-view data-v-248ca5b8=""
                                        class="right"
                                       
                                    >
                                        
                                        <Link to="/transaction"   style={{ textDecoration: 'none', color: '#000' }}><p>View all</p></Link>
                                    </uni-view></uni-view>
                                {['investment', 'income', 'withdraw', 'buyfund'].map((type) =>
                                    transactions[type] && transactions[type].length > 0 ? (
                                        transactions[type]
                                        
                                            .slice() // create copy
                                            .reverse() // reverse order
                                            .slice(0, 2) 
                                            .map((item, index) => (
                                                <uni-view data-v-248ca5b8=""  class="item" >
                                                    <uni-view data-v-248ca5b8=""  class="first">
                                                        <uni-view data-v-248ca5b8=""  class="left">
                                                            {new Date(item.created_at).toLocaleString()}
                                                        </uni-view>
                                                        <uni-view data-v-248ca5b8=""
                                                             class="right"style={{ color: getAmountColor(type) }}>
                                                            {getAmountPrefix(type)}$ {getAmount(type, item)}
                                                        </uni-view>
                                                    </uni-view>

                                                    <uni-view  data-v-248ca5b8=""  class="layer">
                                                        <uni-view data-v-248ca5b8=""  class="title">Remarks</uni-view>
                                                        <uni-view data-v-248ca5b8=""  class="value">
                                                              {item.remarks || item.source || '—'}
                                                        </uni-view>
                                                    </uni-view>
                                                </uni-view>
                                                
                                            ))
                                    ) : null
                                )}
                                

{/* <uni-view data-v-248ca5b8="" class="item">
                                        <uni-view data-v-248ca5b8="" class="first">
                                            <uni-view data-v-248ca5b8="" class="left">2025-04-21 14:48:49</uni-view>

                                            <uni-view data-v-248ca5b8="" class="right" style={{ color: 'rgb(255, 61, 61)' }}>-10.000000</uni-view>
                                        </uni-view>
                                        <uni-view data-v-248ca5b8="" class="layer">
                                            <uni-view data-v-248ca5b8="" class="title">Fund Flows</uni-view>
                                            <uni-view data-v-248ca5b8="" class="value">Buy Server</uni-view>

                                        </uni-view>
                                    </uni-view> */}

                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>

            </uni-app>
        </div >
    );
};

export default Assets;