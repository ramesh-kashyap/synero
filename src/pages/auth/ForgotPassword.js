import { useState } from "react";
import Api from "../../Requests/Api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSendRequest = async () => {
    try {
      const response = await Api.post('/sendForgotOtp', {
        email: email.trim() // Make sure 'email' state variable exists
      });
  
      if (response?.data?.success) {
        toast.success("OTP sent successfully!");
      } else {
        toast.error(response?.data?.message || "Failed to send OTP!");
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error(error?.response?.data?.message || "Failed to send OTP!");
    }
  };
  
  const handleForgotPassword = async () => {
    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match!");
      return;
    }
  
    try {
      const response = await Api.post('/forgotPassword', {
        email,
        password,
        password_confirmation: passwordConfirmation,
        verification_code: verificationCode
      });
  
      if (response.data.success) {
        toast.success(response.data.message);
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');
        setVerificationCode('');
        navigate('/login');

      }
     
      else {
        toast.error(response.data.message || 'Something went wrong.');
      }
    } catch (err) {
      console.error('Error:', err.response);
      toast.error(err.response?.data?.message || "Server error");
    }
  };
  

 
  return (
<div class="uni-body pages-user-changepwd">
      <uni-app class="uni-app--maxwidth">
        <uni-page data-page="pages/user/changepwd">
          <uni-page-wrapper>
            <uni-page-body>
              <uni-view data-v-34a1f189="" class="page">
                <uni-view data-v-34a1f189="" class="ellipse"></uni-view>
                <uni-view data-v-34a1f189="" class="top-box">
                  <uni-view data-v-636c600c="" data-v-34a1f189="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}><uni-view data-v-35b9a113="" data-v-34a1f189="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <Link to="/Setting">
                      <uni-view data-v-34a1f189="" class="back"><img data-v-34a1f189="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)' }} /></uni-view>
                    </Link>
                  </uni-view>
                    <uni-view data-v-35b9a113="" data-v-34a1f189="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                      <uni-view data-v-34a1f189="" class="page-title">Forgot Password</uni-view>
                    </uni-view>
                    <uni-view data-v-35b9a113="" data-v-34a1f189="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view></uni-view></uni-view>
                <uni-view data-v-34a1f189="" class="content">
                <uni-view data-v-0c515aee="" class="input-layer">
                     <uni-view data-v-0c515aee="" class="input-title">Email Address</uni-view>
                     <uni-view data-v-30449abe="" data-v-0c515aee="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}>
                        <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{borderColor: 'rgb(22 191 179)', backgroundColor: 'unset'}}>
                           <uni-view data-v-30449abe="" class="content-clear-icon"><img data-v-30449abe="" src="/static/img/email-fill.png" alt=""/></uni-view>
                             
                           <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
                              <div class="uni-input-wrapper">
                                 <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-0c515aee="" style={{display: 'none'}}>Please Enter Email Address</div>
                                 <input maxlength="140" step="" enterkeyhint="done"   placeholder=" Enter Email Address"type="email"value={email}
                                  onChange={(e) => setEmail(e.target.value)} class="uni-input-input"/>  
                              </div>
                           </uni-input>
                             
                           <uni-text data-v-45a6b600="" data-v-30449abe="" class="uni-icons content-clear-icon " style={{color: 'rgb(192, 196, 204)', fontsize: '24px'}}><span></span></uni-text>
                        </uni-view>
                     </uni-view>
                  </uni-view>
                  <uni-view data-v-34a1f189="" class="input-layer">
                    <uni-view data-v-34a1f189="" class="input-title">New Password</uni-view>
                    <uni-view data-v-30449abe="" data-v-34a1f189="" class="uni-easyinput" style={{ color: 'rgb(255, 255, 255)' }}><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgb(22 191 179)', backgroundColor: 'unset' }}> <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingLeft: '10px' }}>
                      <div class="uni-input-wrapper">
                        <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="password" class="uni-input-input" value={password}
                          onChange={(e) => setPassword(e.target.value)} placeholder="Please enter new password" />
                      </div>
                    </uni-input>
                    </uni-view>
                    </uni-view>
                  </uni-view>
                  <uni-view data-v-34a1f189="" class="input-layer">
                    <uni-view data-v-34a1f189="" class="input-title">Confirm Password</uni-view>
                    <uni-view data-v-30449abe="" data-v-34a1f189="" class="uni-easyinput" style={{ color: 'rgb(255, 255, 255)' }}><uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgb(22 191 179)', backgroundColor: 'unset' }}> <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingLeft: '10px' }}>
                      <div class="uni-input-wrapper">
                        <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="password" class="uni-input-input" value={passwordConfirmation}
                          onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Please enter your new password again" />
                      </div>
                    </uni-input>
                    </uni-view>
                    </uni-view></uni-view>
                  <uni-view data-v-b918f992="" class="input-layer">
                    <uni-view data-v-b918f992="" class="input-title">Verification Code</uni-view>
                    <uni-view data-v-30449abe="" data-v-b918f992="" class ="uni-easyinput" style={{ color: 'rgb(255, 255, 255)' }}>
                      <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgb(22 191 179)', backgroundColor: 'unset' }}>
                        <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingRight: '10px', paddingLeft: '10px' }}>
                          <div class="uni-input-wrapper">
                            {/* <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-b918f992=""></div> */}
                            <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} type="" placeholder="Please Enter Verification Code" class="uni-input-input" />
                          </div>
                        </uni-input>
                        <uni-view data-v-b918f992="" class="resend" onClick={handleSendRequest} style={{color:'#000'}}>Send</uni-view>
                      </uni-view>
                    </uni-view>
                  </uni-view>
                </uni-view>
                <uni-view data-v-34a1f189="" class="submit"onClick={handleForgotPassword}>Submit</uni-view>
              </uni-view>
            </uni-page-body>
          </uni-page-wrapper>
        </uni-page>
      </uni-app>
    </div>  );
};

export default ForgotPassword;


//  <div class="uni-body pages-login-forget">
// <uni-app class="uni-app--maxwidth">
//    <uni-page data-page="pages/login/forget">
        
//       <uni-page-wrapper>
//          <uni-page-body>
//             <uni-view data-v-0c515aee="" class="page">
//                <uni-view data-v-0c515aee="" class="ellipse"></uni-view>
//                <uni-view data-v-0c515aee="" class="top-box">
//                   <uni-view data-v-636c600c="" data-v-0c515aee="" class="uni-row" style="margin-left: 0px; margin-right: 0px;">
//                      <uni-view data-v-35b9a113="" data-v-0c515aee="" class="uni-col uni-col-6" style="padding-left: 0px; padding-right: 0px;">
//                         <uni-view data-v-0c515aee="" class="back"><img data-v-0c515aee="" src="/static/img/back.png" alt="" style="width: 35px;"/></uni-view>
//                      </uni-view>
//                      <uni-view data-v-35b9a113="" data-v-0c515aee="" class="uni-col uni-col-12" style="padding-left: 0px; padding-right: 0px;">
//                         <uni-view data-v-0c515aee="" class="page-title">Forget</uni-view>
//                      </uni-view>
//                      <uni-view data-v-35b9a113="" data-v-0c515aee="" class="uni-col uni-col-6" style="padding-left: 0px; padding-right: 0px;"></uni-view>
//                   </uni-view>
//                </uni-view>
//                <uni-view data-v-0c515aee="" class="content">
//                   <uni-view data-v-0c515aee="" class="input-layer">
//                      <uni-view data-v-0c515aee="" class="input-title">Email Address</uni-view>
//                      <uni-view data-v-30449abe="" data-v-0c515aee="" class="uni-easyinput" style="color: rgb(255, 255, 255);">
//                         <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style="border-color: rgba(255, 255, 255, 0.2); background-color: unset;">
//                            <uni-view data-v-30449abe="" class="content-clear-icon"><img data-v-30449abe="" src="/static/img/email-fill.png" alt=""></uni-view>
                             
//                            <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style="padding-left: 10px;">
//                               <div class="uni-input-wrapper">
//                                  <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-0c515aee="" style="display: none;">Please Enter Email Address</div>
//                                  <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input">  
//                               </div>
//                            </uni-input>
                             
//                            <uni-text data-v-45a6b600="" data-v-30449abe="" class="uni-icons content-clear-icon uniui-clear" style="color: rgb(192, 196, 204); font-size: 24px;"><span></span></uni-text>
//                         </uni-view>
//                      </uni-view>
//                   </uni-view>
//                   <uni-view data-v-0c515aee="" class="input-layer">
//                      <uni-view data-v-0c515aee="" class="input-title">New Password</uni-view>
//                      <uni-view data-v-30449abe="" data-v-0c515aee="" class="uni-easyinput" style="color: rgb(255, 255, 255);">
//                         <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style="border-color: rgba(255, 255, 255, 0.2); background-color: unset;">
                             
//                            <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style="padding-left: 10px;">
//                               <div class="uni-input-wrapper">
//                                  <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-0c515aee="" style="display: none;">Please enter new password</div>
//                                  <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="password" class="uni-input-input">  
//                               </div>
//                            </uni-input>
//                            <uni-text data-v-45a6b600="" data-v-30449abe="" class="uni-icons content-clear-icon uniui-eye-filled" style="color: rgb(192, 196, 204); font-size: 22px;"><span></span></uni-text>
//                            <uni-text data-v-45a6b600="" data-v-30449abe="" class="uni-icons content-clear-icon uniui-clear" style="color: rgb(192, 196, 204); font-size: 24px;"><span></span></uni-text>
//                         </uni-view>
//                      </uni-view>
//                   </uni-view>
//                   <uni-view data-v-0c515aee="" class="input-layer">
//                      <uni-view data-v-0c515aee="" class="input-title">Confirm Password</uni-view>
//                      <uni-view data-v-30449abe="" data-v-0c515aee="" class="uni-easyinput" style="color: rgb(255, 255, 255);">
//                         <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style="border-color: rgba(255, 255, 255, 0.2); background-color: unset;">
                             
//                            <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style="padding-left: 10px;">
//                               <div class="uni-input-wrapper">
//                                  <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-0c515aee="">Please enter your new password again</div>
//                                  <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="password" class="uni-input-input">  
//                               </div>
//                            </uni-input>
                             
//                         </uni-view>
//                      </uni-view>
//                   </uni-view>
//                   <uni-view data-v-0c515aee="" class="input-layer">
//                      <uni-view data-v-0c515aee="" class="input-title">Verification Code</uni-view>
//                      <uni-view data-v-30449abe="" data-v-0c515aee="" class="uni-easyinput" style="color: rgb(255, 255, 255);">
//                         <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style="border-color: rgba(255, 255, 255, 0.2); background-color: unset;">
                             
//                            <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style="padding-right: 10px; padding-left: 10px;">
//                               <div class="uni-input-wrapper">
//                                  <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-0c515aee="">Please Enter Verification Code</div>
//                                  <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input">  
//                               </div>
//                            </uni-input>
                             
//                            <uni-view data-v-0c515aee="" class="resend">Send</uni-view>
//                         </uni-view>
//                      </uni-view>
//                   </uni-view>
//                </uni-view>
//                <uni-view data-v-0c515aee="" class="submit">Submit</uni-view>
//             </uni-view>
//          </uni-page-body>
//       </uni-page-wrapper>
//    </uni-page>
   
// </uni-app>

// </div> 