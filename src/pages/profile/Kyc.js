import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const Kyc = () => {


    return (
        <div class="uni-body pages-user-kycSubmit">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/user/kycSubmit">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-d420a500="" class="page">
                                <uni-view data-v-d420a500="" class="ellipse"></uni-view>
                                <uni-view data-v-d420a500="" class="top-box">
                                    <uni-view data-v-636c600c="" data-v-d420a500="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                        <uni-view data-v-35b9a113="" data-v-d420a500="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <Link to="/profile">
                                                <uni-view data-v-d420a500="" class="back"><img data-v-d420a500="" src="/static/img/back.png" alt="" style={{ width: '35px' }} /></uni-view>
                                            </Link>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-d420a500="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <uni-view data-v-d420a500="" class="page-title">KYC</uni-view>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-d420a500="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-d420a500="" class="content">
                                    <uni-view data-v-d420a500="" class="input-layer">
                                        <uni-view data-v-d420a500="" class="input-title">Name</uni-view>
                                        <uni-view data-v-30449abe="" data-v-d420a500="" class="uni-easyinput" style={{ color: 'rgb(255, 255, 255)' }}>
                                            <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset' }}>

                                                <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingLeft: '10px' }}>
                                                    <div class="uni-input-wrapper">
                                                        <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-d420a500="">Please enter your name</div>
                                                        <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input" />
                                                    </div>
                                                </uni-input>

                                            </uni-view>
                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-d420a500="" class="input-layer">
                                        <uni-view data-v-d420a500="" class="input-title">Date of birth</uni-view>
                                        <uni-view data-v-5434dfc4="" data-v-d420a500="" class="uni-date">
                                            <uni-view data-v-5434dfc4="" class="uni-date-editor">
                                                <uni-view data-v-5434dfc4="" class="uni-date-editor--x uni-date-x--border">
                                                    <uni-view data-v-5434dfc4="" class="uni-date-x uni-date-single">
                                                        <uni-text data-v-45a6b600="" data-v-5434dfc4="" class="uni-icons icon-calendar uniui-calendar" style={{ color: 'rgb(192, 196, 204)', fontSize: '22px' }}><span></span></uni-text>
                                                        <uni-view data-v-5434dfc4="" class="uni-date__x-input">Please select your date of birth</uni-view>
                                                    </uni-view>

                                                </uni-view>
                                            </uni-view>
                                            <uni-view data-v-5434dfc4="" class="uni-date-mask--pc" style={{ display: 'none' }}></uni-view>
                                            <uni-view data-v-5434dfc4="" class="uni-date-picker__container" style={{ display: 'none' }}>
                                                <uni-view data-v-5434dfc4="" class="uni-date-single--x">
                                                    <uni-view data-v-5434dfc4="" class="uni-popper__arrow"></uni-view>

                                                    <uni-view data-v-41132804="" data-v-5434dfc4="" class="uni-calendar" style={{ padding: '0px 8px' }}>

                                                        <uni-view data-v-41132804="" class="uni-calendar__content">
                                                            <uni-view data-v-41132804="" class="uni-calendar__header">
                                                                <uni-view data-v-41132804="" class="uni-calendar__header-btn-box">
                                                                    <uni-view data-v-41132804="" class="uni-calendar__header-btn uni-calendar--left"></uni-view>
                                                                </uni-view>
                                                                <uni-picker data-v-41132804="">
                                                                    <div class="uni-picker-container uni-date-select">
                                                                        <div class="uni-mask uni-picker-mask" style={{ display: 'none' }}></div>
                                                                        <div class="uni-picker-custom">
                                                                            <div class="uni-picker-header">
                                                                                <div class="uni-picker-action uni-picker-action-cancel"> Cancel </div>
                                                                                <div class="uni-picker-action uni-picker-action-confirm"> Done </div>
                                                                            </div>


                                                                            <div></div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <uni-text data-v-41132804="" class="uni-calendar__header-text"><span>2025-05</span></uni-text>
                                                                    </div>

                                                                </uni-picker>
                                                                <uni-view data-v-41132804="" class="uni-calendar__header-btn-box">
                                                                    <uni-view data-v-41132804="" class="uni-calendar__header-btn uni-calendar--right"></uni-view>
                                                                </uni-view>
                                                            </uni-view>
                                                        </uni-view>
                                                    </uni-view>

                                                </uni-view>
                                            </uni-view>

                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-d420a500="" class="input-layer">
                                        <uni-view data-v-d420a500="" class="input-title">Document Type</uni-view>
                                        <uni-view data-v-7442d4f6="" data-v-d420a500="" class="uni-stat__select">

                                            <uni-view data-v-7442d4f6="" class="uni-stat-box">
                                                <uni-view data-v-7442d4f6="" class="uni-select">
                                                    <uni-view data-v-7442d4f6="" class="uni-select__input-box">
                                                        <uni-view data-v-7442d4f6="" class="uni-select__input-text uni-select__input-placeholder">Please select a type</uni-view>
                                                        <uni-view data-v-7442d4f6="">
                                                            <uni-text data-v-45a6b600="" data-v-7442d4f6="" class="uni-icons uniui-bottom" style={{ color: 'rgb(153, 153, 153)', fontSize: '14px' }}><span></span></uni-text>
                                                        </uni-view>
                                                    </uni-view>

                                                </uni-view>
                                            </uni-view>
                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-d420a500="" class="input-layer">
                                        <uni-view data-v-d420a500="" class="input-title">Document Number</uni-view>
                                        <uni-view data-v-30449abe="" data-v-d420a500="" class="uni-easyinput" style={{ color: 'rgb(255, 255, 255)' }}>
                                            <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset' }}>

                                                <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingLeft: '10px' }}>
                                                    <div class="uni-input-wrapper">
                                                        <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-d420a500="">Please Enter Document Number</div>
                                                        <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input" />
                                                    </div>
                                                </uni-input>

                                            </uni-view>
                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-d420a500="" class="input-layer">
                                        <uni-view data-v-d420a500="" class="input-title">Document Photo</uni-view>
                                        <uni-view data-v-d420a500="" class="photo-box">
                                            <uni-view data-v-d420a500="" class="photo-bg">
                                                <div data-v-c28d8bce="" data-v-d420a500="">
                                                    <uni-view data-v-c28d8bce="" class="Rboy-box">
                                                        <uni-view data-v-c28d8bce="" class="Rboy-obverse">
                                                            <uni-image data-v-c28d8bce="" class="obverseimg">
                                                                <img src="/static/img/man.png"  />
                                                            </uni-image>

                                                        </uni-view>
                                                    </uni-view>
                                                </div>
                                            </uni-view>
                                        </uni-view>
                                        <uni-view data-v-d420a500="" class="tips">Please make sure the photo is clear</uni-view>
                                    </uni-view>
                                    <uni-view data-v-d420a500="" class="submit">Submit</uni-view>
                                </uni-view>
                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>

            </uni-app>

        </div>
    );
};

export default Kyc;






















