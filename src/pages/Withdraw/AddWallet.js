import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AddWallet = () => {
    //   const [activeTab, setActiveTab] = useState();
    const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('/Add-WalletAddress'); // Yahan '/add-wallet' ko apne desired path se replace karein
    // };

    const handleClick = (network) => {
        navigate(`/add-walletAddress/${network}`); // e.g. /wallet/trc20
      }; 
      const backClick = () => {
        navigate(-1); // Go back to the previous page in history
    };
    return (
        <div class="uni-body pages-user-addCard">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/user/addCard">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-b918f992="" class="page">
                                <uni-view data-v-b918f992="" class="ellipse"></uni-view>
                                <uni-view data-v-b918f992="" class="top-box">
                                    <uni-view data-v-636c600c="" data-v-b918f992="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                        <uni-view data-v-35b9a113="" data-v-b918f992="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            
                                                <uni-view data-v-53c5f33f="" class="back"onClick={backClick}><img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)' }} /></uni-view>

                                                                          </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-b918f992="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <uni-view data-v-b918f992="" class="page-title">Add Wallet</uni-view>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-b918f992="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-b918f992="" class="type-box">

                                    <uni-view data-v-b918f992="" class="item" onClick={() => handleClick('Trc20')}>
                                        <uni-view data-v-b918f992="" class="left"><img data-v-b918f992="" src="/static/img/USDT.png" alt="" />TRC20</uni-view>
                                        <img data-v-b918f992="" src="/static/img/in.png" alt="" style={{filter: 'brightness(0) invert(0)'}} />
                                    </uni-view>
                                   <uni-view data-v-b918f992="" class="item"  onClick={() => handleClick('Bep20')}>
                                        <uni-view data-v-b918f992="" class="left"><img data-v-b918f992="" src="/static/img/USDT.png" alt="" />BEP20</uni-view>
                                        <img data-v-b918f992="" src="/static/img/in.png" alt=""  style={{filter: 'brightness(0) invert(0)'}}/>
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

export default AddWallet;

