import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../Requests/Api";



const Wallet = () => {
    const [userDetails, setUserDetails] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const fetchUserDetails = async () => {
            try {
                const response = await Api.get('/user');
                if (isMounted) {
                    setUserDetails(response.data); // Only update state if component is still mounted
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUserDetails();

        return () => {
            isMounted = false; // Cleanup on unmount to prevent memory leak
        };
    }, []);


    const handleCopy = (textToCopy) => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => toast.success("Copied to clipboard!"))
            .catch(() => toast.error("Failed to copy"));
    };

    const walletList = [
        { type: 'TRC20', address: userDetails?.trc20 },
        { type: 'BEP20', address: userDetails?.bep20 }
    ];
    
    const backClick = () => {
        navigate(-1); // 👈 Go back to the previous page in history
    };
    return (
        <div class="uni-body pages-user-wallet">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/user/wallet">

                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-b7bb70a2="" class="page">
                                <uni-view data-v-b7bb70a2="" class="ellipse"></uni-view>
                                <uni-view data-v-b7bb70a2="" class="top-box">
                                    <uni-view data-v-636c600c="" data-v-b7bb70a2="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                        <uni-view data-v-35b9a113="" data-v-b7bb70a2="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }} >
                                            <uni-view data-v-b7bb70a2="" class="back"onClick={backClick}><img data-v-b7bb70a2="" src="/static/img/back.png" alt="" style={{ width: '35px',filter:'brightness(0) invert(0)'  }} /></uni-view>

                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-b7bb70a2="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <uni-view data-v-b7bb70a2="" class="page-title">Wallet</uni-view>
                                        </uni-view>
                                        <Link to="/add-wallet">
                                            <uni-view data-v-35b9a113="" data-v-b7bb70a2="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                <uni-view data-v-b7bb70a2="" style={{ display: 'flex', justifyContent: 'end', marginRight: '10px' }}><img data-v-b7bb70a2="" src="/static/img/add.png" alt="ad" style={{ width: '33px',filter:'brightness(0.72) invert(0)'  }} /></uni-view>
                                            </uni-view>
                                        </Link>
                                    </uni-view>
                                </uni-view>
 
                                 <uni-view data-v-b7bb70a2="" class="wallet-box"style={{ display: 'flex', flexDirection: 'column' }}>
                                    {walletList.some(item => item.address) ? (
                                        walletList.map((item, index) => (
                                            item.address ? (
                                                <uni-view data-v-b7bb70a2=""key={index} class="wallet-list">
                                                    <uni-view data-v-b7bb70a2="" class="wallet-item">
                                                        <uni-view data-v-b7bb70a2="" class="type">{item.type}</uni-view>
                                                        <uni-view data-v-b7bb70a2="" class="cardNo">{item.address}</uni-view>
                                                        <uni-view data-v-b7bb70a2="" class="btn-group">
                                                            {/* <uni-view data-v-b7bb70a2="" class="delete"><img data-v-b7bb70a2="" src="/static/img/delete_red.png" alt="d" /></uni-view> */}
                                                            <uni-view data-v-b7bb70a2="" class="copy" onClick={handleCopy}><img data-v-b7bb70a2="" src="/static/img/copy.png" alt="c" /></uni-view>
                                                        </uni-view>
                                                    </uni-view>
                                                </uni-view>
                                            ) : null
                                        ))
                                    ) : (
                                        <uni-view data-v-b7bb70a2="" style={{ display: 'flex', justifyContent: 'end', marginRight: '10px' }}><img data-v-b7bb70a2="" src="/static/img/nocard.png" alt="ad"  /></uni-view>

                                        
                                    )}


                                </uni-view>
                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>

            </uni-app>

        </div>
    );
};

export default Wallet;

 