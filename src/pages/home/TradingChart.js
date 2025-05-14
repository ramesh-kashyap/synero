import React, { useEffect, useState } from "react";
import { useParams, Link,useNavigate } from "react-router-dom";
import TradingViewWidget from "react-tradingview-widget";
import Smartrade from "../home/Smartrade";

import axios from "axios";  
const TradingChart = () => {
    const { symbol } = useParams();
    const [coinData, setCoinData] = useState(null);
    useEffect(() => {
        const fetchBinanceData = async () => {
          try {
            const res = await axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol.toUpperCase()}`);
            setCoinData(res.data);
          } catch (err) {
            console.error("Failed to fetch Binance data", err);
          }
        };
    
        fetchBinanceData();
      }, [symbol]);

      const navigate = useNavigate();

   const backClick = () => {
     
     navigate('/dashboard');

   };
   const SmartradeClick = () => {
    navigate('/Smartrade', { state: { symbol } });
  };  
    return (
        <div class="uni-body pages-index-symbol">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/index/symbol">

                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-ae626946="" class="page">
                                <uni-view data-v-ae626946="" class="ellipse"></uni-view>
                                <uni-view data-v-ae626946="" class="top-box"><uni-view data-v-ae626946="" style={{ display: 'flex', alignItems: 'center' }}>
                            <uni-view data-v-1011963f="" class="back"onClick={backClick}><img data-v-1011963f="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)' }} /></uni-view>
                                        <uni-view data-v-ae626946="" class="coin-box">
                                        <img data-v-ae626946="" src={`/static/coin/${symbol.toLowerCase().replace("usdt", "")}.png`} alt="{symbol}" /><uni-view data-v-ae626946="" class="coin-name">{symbol.toUpperCase()}<uni-view data-v-ae626946="" class="coin">{symbol.toUpperCase().replace("USDT", "")}</uni-view></uni-view></uni-view></uni-view><uni-view data-v-ae626946="" class="focus"><img data-v-ae626946="" src="/static/img/focus3.png" alt="" style={{ width: '20px',filter: 'brightness(0) invert(0)' }} /></uni-view></uni-view>
                                <div style={{ marginTop: "20px", width: "100%", height: "400px" }}>
                                    <TradingViewWidget
                                        symbol={`BINANCE:${symbol}`}
                                        theme="dark"
                                        locale="en"
                                        autosize
                                    />
                                </div>
                                <uni-view data-v-ae626946="" class="data-box" style={{ marginTop: "16px"}}>
                                    <uni-view data-v-ae626946="" class="data-item">
                                        <uni-view data-v-ae626946="" class="title">24h Low</uni-view>
                                        <uni-view data-v-ae626946="" class="value">{coinData?.lowPrice ? `${parseFloat(coinData.lowPrice).toFixed(3)}` : "--"}</uni-view>
                                    </uni-view>
                                    <uni-view data-v-ae626946="" class="data-item">
                                        <uni-view data-v-ae626946="" class="title">24h High</uni-view>
                                        <uni-view data-v-ae626946="" class="value">{coinData?.highPrice  ? `${parseFloat(coinData.highPrice ).toFixed(2)}` : "--"}</uni-view>
                                    </uni-view>
                                    <uni-view data-v-ae626946="" class="data-item">
                                        <uni-view data-v-ae626946="" class="title">24h quantity</uni-view>
                                        <uni-view data-v-ae626946="" class="value">{coinData?.volume ? `${(parseFloat(coinData.volume) / 1_000_000).toFixed(2)}M` : "--"}</uni-view>
                                    </uni-view>
                                    <uni-view data-v-ae626946="" class="data-item">
                                        <uni-view data-v-ae626946="" class="title">24h Volume</uni-view>
                                        <uni-view data-v-ae626946="" class="value">{coinData?.quoteVolume ? `${(parseFloat(coinData.quoteVolume) / 1_000_000).toFixed(2)}M` : "--"}</uni-view>
                                    </uni-view>
                                    {/* <uni-view data-v-ae626946="" style={{ height: '60px' }}></uni-view> */}
                                <uni-view data-v-ae626946="" class="trade-btn">
                                    <uni-view data-v-ae626946="" class="btn-item" onClick={SmartradeClick}>Smart Trade</uni-view>
                                    <uni-view data-v-ae626946="" class="btn-item1">Contract Trade</uni-view>
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

export default TradingChart;



