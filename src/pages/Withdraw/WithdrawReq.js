import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../Requests/Api";
import { Toaster, toast } from 'react-hot-toast';
const WithdrawReq = () => {
  const [wallets, setWallets] = useState({ bep20: "", trc20: "" });
  const [selectedWallet, setSelectedWallet] = useState("");
  const [amount, setAmount] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [availbal, setAvailableBal] = useState();
  const [walletType, setWalletType] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    withfatch();
    withreq();
  }, [])

  const withfatch = async () => {
  try {
    const response = await Api.get("/availbal");
    console.log(response.data);
    if (response.data) {
              setAvailableBal(response.data.AvailBalance);
    } 
  } catch (error) {
    console.error(error);
    // toast.error("Error submitting withdraw request.");
  }
  };
  const handleSendRequest = async () => {
    try {
      const response = await Api.post('/sendotp');
      console.log(response);
      if (response) {
        toast.success('OTP sent successfully:', response.data);
        // console.log('OTP sent successfully:', response.data);
      } else {
        toast.error('Failed to send OTP:', response.data.message);
        // console.warn('Failed to send OTP:', response.data.message);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };
  const handleSubmit = async () => {
    try {
      // Assuming you have a backend endpoint to process the withdrawal request
      const response = await Api.post("/process-withdrawal", {
        wallet: selectedWallet,
        type: walletType,
        amount: amount,
        verificationCode: verificationCode,
      });
      if (response) {
        toast.success("Withdrawal submitted successfully", response.data);
        setSelectedWallet("");
        setWalletType("");
        setAmount("");
        setVerificationCode("");
      } else {
        console.warn("Failed to process withdrawal:", response.data.message);

      }
    } catch (error) {
      toast.error("Error processing withdrawal", error);
    }
  };

  const withreq = async () => {
    try {
      const response = await Api.get("/withreq");
      if (response.data.success) {
        setWallets({
          bep20: response.data.bep20,
          trc20: response.data.trc20,
        });
      }
       if (response.data.bep20 && response.data.trc20) {
        setSelectedWallet(response.data.bep20);
        setWalletType("BEP20");
      }
    } catch (error) {
      console.error(error);
      // toast.error("Error fetching wallet addresses.");
    }
  };

  const handleSuccess = () => {
    navigate("/add-wallet");
  };
  const backClick = () => {
    navigate(-1); // 👈 Go back to the previous page in history
};
  return (
    <div class="uni-body pages-user-withdrawal" > <uni-app class="uni-app--maxwidth"><uni-page data-page="pages/user/withdrawal"> 
      <uni-page-wrapper><uni-page-body><uni-view data-v-53c5f33f="" class="page">
      <uni-view data-v-53c5f33f="" class="ellipse"></uni-view><uni-view data-v-53c5f33f="" class="top-box">
        <uni-view data-v-636c600c="" data-v-53c5f33f="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
          <uni-view data-v-35b9a113="" data-v-53c5f33f="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
     
        <Toaster position="top-right" reverseOrder={false} />
        <uni-view data-v-53c5f33f="" class="back"onClick={backClick}>
          <img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)' }} /></uni-view>

     
    </uni-view><uni-view data-v-35b9a113="" data-v-53c5f33f="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}><uni-view data-v-53c5f33f="" class="page-title">Withdrawal</uni-view></uni-view><uni-view data-v-35b9a113="" data-v-53c5f33f="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <Link to="/withdraw-history">
          <uni-view data-v-53c5f33f="" class="records"><img data-v-53c5f33f="" src="/static/img/records.png" alt="" style={{ width: '25px', marginTop: '5px' ,filter: 'brightness(0) invert(0)'}} /></uni-view>

        </Link>
      </uni-view></uni-view></uni-view>
      <uni-view data-v-53c5f33f="" class="balance-box"><uni-view data-v-53c5f33f="" translate="no" class="value">$ {availbal}</uni-view>
      <uni-view data-v-53c5f33f="" class="title">Available Balance</uni-view></uni-view>
      <uni-view data-v-53c5f33f="" class="content">
        <uni-view data-v-53c5f33f="" class="input-layer"><uni-view data-v-53c5f33f="" class="input-title">Select Deposit Type</uni-view>
          <uni-view data-v-53c5f33f="" class="select-box">


            <uni-view data-v-53c5f33f="" class="item" onClick={() => { setSelectedWallet(wallets.trc20); setWalletType("TRC20"); }}style={{
  backgroundColor: wallets.trc20 ? '' : 'rgb(255, 255, 255)',
}}>
              <img data-v-53c5f33f="" src="/static/img/USDT.png" alt="" />TRC20</uni-view>
            <uni-view data-v-53c5f33f="" class="item" onClick={() => { setSelectedWallet(wallets.bep20); setWalletType("BEP20"); }}style={{
  backgroundColor: wallets.bep20 ? '' : 'rgb(255, 255, 255)',
}}>
              <img data-v-53c5f33f="" src="/static/img/USDT.png" alt="" />BEP20</uni-view>
          </uni-view>



          
        </uni-view>
        <uni-view data-v-53c5f33f="" class="input-layer" style={{ marginTop: '10px' }}>
          <uni-view data-v-53c5f33f="" class="input-title">Wallet Address<uni-view data-v-53c5f33f="" class="right" onClick={handleSuccess}><img data-v-53c5f33f="" src="  /static/img/add.png" alt="" style={{color:'#000',filter: 'brightness(0.72) invert(0)'}}/>Add New</uni-view></uni-view><uni-view data-v-30449abe="" data-v-53c5f33f="" class="uni-easyinput" style={{ color: 'rgb(255, 255, 255)' }}><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border is-disabled " style={{ borderColor: 'rgb(22 191 179)', backgroundColor: 'unset' }}> 
              <uni-input data-v-30449abe="" class="uni-easyinput__content-input" >
          <div class="uni-input-wrapper">
            <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-53c5f33f=""> </div>
            <input disabled="disabled" style={{margin:'4px'}} maxlength="140" step="" enterkeyhint="done" autocomplete="off" value={selectedWallet} readOnly type="" class="uni-input-input" />
          </div>
        </uni-input>   </uni-view></uni-view></uni-view>
        <uni-view data-v-53c5f33f="" class="input-layer" style={{ marginTop: '10px' }}><uni-view data-v-53c5f33f="" class="input-title">Amount</uni-view>
        <uni-view data-v-30449abe="" data-v-53c5f33f="" class="uni-easyinput" style={{ color: 'rgb(255, 255, 255)' }}><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgb(22 191 179)', backgroundColor: 'unset' }}>   <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingLeft: '10px' }}>
          <div class="uni-input-wrapper">
            <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-53c5f33f=""></div>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Please Enter Amount" className="uni-input-input" />
          </div>
        </uni-input>   </uni-view></uni-view>    </uni-view>
        {/* <uni-view data-v-53c5f33f="" class="input-layer" style={{marginTop: '10px'}}><uni-view data-v-53c5f33f="" class="input-title">Payment Password</uni-view>
        <uni-view data-v-30449abe="" data-v-53c5f33f="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}>
          <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{borderColor: 'rgba(255, 255, 255, 0.2)',backgroundColor: 'unset'}}>  
             <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
          <div class="uni-input-wrapper">
            <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-53c5f33f=""></div>
            <input maxlength="140" step="" enterkeyhint="done" placeholder="Please enter your payment password" autocomplete="off" type="text" class="uni-input-input" />
          </div>
        </uni-input>  
         </uni-view>
         </uni-view>
         </uni-view> */}

        <uni-view data-v-53c5f33f="" class="input-layer">
          <uni-view data-v-53c5f33f="" class="input-title">Verification Code</uni-view>
          <uni-view data-v-30449abe="" data-v-53c5f33f="" class="uni-easyinput" style={{ color: 'rgb(255, 255, 255)' }}>
            <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgb(22 191 179)', backgroundColor: 'unset' }}>
              <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                <div class="uni-input-wrapper">
                  <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-53c5f33f=""></div>
                  <input value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} type="text" placeholder="Enter Verification Code" className="uni-input-input" />
                </div>
              </uni-input>
              <uni-view data-v-53c5f33f="" class="resend" onClick={handleSendRequest}  style={{color:'#000'}}>Send</uni-view>
            </uni-view>
          </uni-view>
        </uni-view>

        <uni-view data-v-53c5f33f="" class="submit" onClick={handleSubmit}>Submit</uni-view></uni-view><uni-view data-v-53c5f33f="" class="tips-box"><uni-view data-v-53c5f33f="" class="title">Withdrawal time</uni-view><uni-view data-v-53c5f33f="" class="text">A maximum of one withdrawal is allowed per day.</uni-view><uni-view data-v-53c5f33f="" class="title">Withdrawal fee</uni-view><uni-view data-v-53c5f33f="" class="text">Bank card cash withdrawal: 10% handling fee is charged.</uni-view><uni-view data-v-53c5f33f="" class="text">Withdrawal of USDT: 8% handling fee will be charged.</uni-view></uni-view></uni-view></uni-page-body></uni-page-wrapper></uni-page>
    </uni-app>
    </div>
  );
};

export default WithdrawReq;
