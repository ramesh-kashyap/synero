import React, { useEffect, useState } from 'react';

import { useNavigate, useLocation, Link } from 'react-router-dom';
import Api from "../../Requests/Api";
import { Toaster, toast } from 'react-hot-toast';
const Notice = () => {


    return (
        <div class="uni-body pages-index-message">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/index/message">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-c62a6474="" class="page">
                                <uni-view data-v-c62a6474="" class="ellipse"></uni-view>
                                <uni-view data-v-c62a6474="" class="top-box">
                                    <uni-view data-v-636c600c="" data-v-c62a6474="" class="uni-row" style={{marginLeft: '0px',marginRight: '0px'}}>
                                        <uni-view data-v-35b9a113="" data-v-c62a6474="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                            <Link to="/dashboard">
                                                <uni-view data-v-c62a6474="" class="back">
                                                    <img data-v-c62a6474="" src="/static/img/back.png"  alt="" style={{width: '35px',filter: 'brightness(0) invert(0)'}}/>
                                                </uni-view>
                                            </Link>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-c62a6474="" class="uni-col uni-col-12" style={{paddingLeft: '0px',paddingRight: '0px'}}>
                                            <uni-view data-v-c62a6474="" class="page-title">Message</uni-view>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-c62a6474="" class="uni-col uni-col-6" style={{paddingLeft: '0px',paddingright: '0px'}}></uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-c62a6474="" class="tabs-box">
                                    <uni-view data-v-c62a6474="" class="tab-item selected">All</uni-view>
                                    <uni-view data-v-c62a6474="" class="tab-item">News</uni-view>
                                    <uni-view data-v-c62a6474="" class="tab-item">Notice</uni-view>
                                    <uni-view data-v-c62a6474="" class="tab-item">System</uni-view>
                                    <uni-view data-v-c62a6474="" class="tab-item">Message</uni-view>
                                </uni-view>
                                <uni-view data-v-c62a6474="" class="content">
                                    <uni-view data-v-c62a6474="">
                                        <uni-view data-v-c62a6474="" class="time-text">2025-03-21 00:19:08</uni-view>
                                        <uni-view data-v-c62a6474="" class="message-item">
                                            <uni-view data-v-c62a6474="" class="title">
                                                📩 Welcome to Firefly Star! 🚀
                                                <uni-view data-v-c62a6474="" class="noread"></uni-view>
                                            </uni-view>
                                            <uni-view data-v-c62a6474="" class="content-text">View Details</uni-view>
                                        </uni-view>
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

export default Notice;




