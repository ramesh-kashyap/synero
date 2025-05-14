import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'; // Import Link for navigation
import Api from '../../Requests/Api';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [balance, setBalance] = useState(null);
        const navigate = useNavigate();
    
    useEffect(() => {
        fetchUsers();
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


    const getAmountColor = (type) => {
        return type === 'buyfund' || type === 'income' ? 'rgb(21, 213, 199)' : 'rgb(255, 61, 61)';
    };

    const getAmountPrefix = (type) => {
        return type === 'buyfund' || type === 'income' ? '+ ' : '- ';
    };
    const getAmount = (type, item) => {
        return type === 'income' ? item.comm : item.amount;
    };


    const backClick = () => {
        navigate(-1); // 👈 Go back to the previous page in history
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
                                <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>

                                    <uni-view data-v-53c5f33f="" class="back" onClick={backClick}><img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{ width: '35px', marginTop: '5px',filter: 'brightness(0) invert(0)' }} /></uni-view>


                                </uni-view>
                                <uni-view
                                    data-v-248ca5b8="" class="page-title" style={{marginRight:'95px'}}>All Transaction</uni-view>


                                <uni-view data-v-248ca5b8="" class="user-title"
                                    style={{ marginTop: '30px' }}>Funding Details</uni-view>


                                {['investment', 'income', 'withdraw', 'buyfund'].map((type) =>
                                    transactions[type] && transactions[type].length > 0 ? (
                                        transactions[type]
                                            .slice() // create copy
                                            .reverse() // reverse order
                                            
                                            .map((item, index) => (
                                                <uni-view data-v-248ca5b8="" class="item" >
                                                    <uni-view data-v-248ca5b8="" class="first">
                                                        <uni-view data-v-248ca5b8="" class="left">
                                                            {new Date(item.created_at).toLocaleString()}
                                                        </uni-view>
                                                        <uni-view data-v-248ca5b8=""
                                                            class="right" style={{ color: getAmountColor(type) }}>
                                                            {getAmountPrefix(type)}$ {getAmount(type, item)}
                                                        </uni-view>
                                                    </uni-view>

                                                    <uni-view data-v-248ca5b8="" class="layer">
                                                        <uni-view data-v-248ca5b8="" class="title">Remarks</uni-view>
                                                        <uni-view data-v-248ca5b8="" class="value">
                                                            {item.remarks || item.source || '—'}
                                                        </uni-view>
                                                    </uni-view>
                                                </uni-view>
                                            ))
                                    ) : null
                                )}



                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>

            </uni-app>
        </div >
    );
};

export default Transaction;










