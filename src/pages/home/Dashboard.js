import React, { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import axios from "axios";
import Api from "../../Requests/Api";
import Collapse from 'react-collapse';


import { SlArrowRight } from "react-icons/sl";
import TradingChart from "./TradingChart";
import { jwtDecode } from 'jwt-decode';
import { useTranslation } from 'react-i18next';

const symbols = ["dogeusdt", "ethusdt", "dotusdt", "nearusdt"];


const Dashboard = () => {
   const [selectedSymbol, setSelectedSymbol] = useState(null);
   const navigate = useNavigate();
   const [user, setUser] = useState(null);

   // const [isOpen, setIsOpen] = useState(false); // Modal visibility state
   // const toggleDropdown = () => setIsOpen(!isOpen);

   const [cryptoData, setCryptoData] = useState({});
   const [binanceSymbols, setBinanceSymbols] = useState([]);
   const [showAll, setShowAll] = useState(false); // toggle state



   useEffect(() => {
      const fetchCrypto = async () => {
         try {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
               params: {
                  vs_currency: "usd",
                  order: "market_cap_desc",
                  per_page: 20,
                  page: 1,
                  sparkline: false
               }
            });

            const formatted = {};
            const binanceSyms = [];

            res.data.forEach((coin) => {
               const symbol = `${coin.symbol}usdt`.toUpperCase();
               formatted[symbol] = {
                  id: coin.id,
                  name: coin.name,
                  symbol: symbol,
                  image: coin.image,
                  price: coin.current_price,
                  change: coin.price_change_24h,
                  percent: coin.price_change_percentage_24h,
                  volume: (coin.total_volume / 1_000_000).toFixed(2) + "M"
               };
               binanceSyms.push(symbol.toLowerCase());
            });

            setCryptoData(formatted);
            setBinanceSymbols(binanceSyms);
         } catch (error) {
            console.error("CoinGecko fetch error:", error);
         }
      };

      fetchCrypto();
   }, []);

   useEffect(() => {
      if (binanceSymbols.length === 0) return;

      const ws = new WebSocket(
         `wss://stream.binance.com:9443/stream?streams=${binanceSymbols
            .map((s) => `${s}@ticker`)
            .join("/")}`
      );

      ws.onmessage = (event) => {
         const msg = JSON.parse(event.data);
         const data = msg.data;

         setCryptoData((prev) => {
            const existing = prev[data.s];
            if (!existing) return prev;

            return {
               ...prev,
               [data.s]: {
                  ...existing,
                  price: parseFloat(data.c),
                  change: parseFloat(data.p),
                  percent: parseFloat(data.P),
                  volume: (parseFloat(data.v) / 1_000_000).toFixed(2) + "M"
               }
            };
         });
      };

      return () => ws.close();
   }, [binanceSymbols]);

   const allCoins = Object.values(cryptoData);
   const coinsToShow = showAll ? allCoins : allCoins.slice(0, 5);
   const [loading, setLoading] = useState(true);
   const [availbal, setAvailableBal] = useState();



   const [userDetails, setUserDetails] = useState(null);
   const token = localStorage.getItem('authToken'); // Retrieve token from localStorage

   useEffect(() => {
      fetchUserDetails();
   }, []);

   const fetchUserDetails = async () => {
      try {
         const response = await Api.get('/user');
         setUserDetails(response.data); // This should be your user object
      } catch (error) {
         console.error("Error fetching user details:", error);
      }
   };
   // }, [token]);
   useEffect(() => {
      withfatch();
   }, []);

   const withfatch = async () => {
      try {
         const response = await Api.get("/availbal");
         if (response.data?.AvailBalance !== undefined) {
            setAvailableBal(response.data.AvailBalance);
         }
      } catch (error) {
         console.error("Error:", error);
      }
   };


   const faqData = [
      { question: 'How to Choose the Right Server?', answer: 'Consider your investment amount and trading frequency.Review server specifications and performance metrics.Compare pricing plans and features.Start with a basic plan and upgrade as needed.' },
      { question: 'How is Fund Security Ensured?', answer: 'Multi-signature cold wallet storage.Regular security audits and penetration testing.Insurance coverage for digital assets.24/7 security monitoring and risk management.' },
      { question: 'Withdrawal Guidelines', answer: 'Minimum withdrawal amounts apply.Processing time varies by cryptocurrency.Two-factor authentication required for all withdrawals.' },
   ];
   const [openIndex, setOpenIndex] = useState(null);

   const toggleDropdown = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
   };

   const { t } = useTranslation();
   const navTeam = () => {
      navigate("/team"); // 👈 Go back to the previous page in history
   };
   return (

      <div class="uni-body pages-index-index">
         <uni-app class="uni-app--showtabbar uni-app--maxwidth">
            <uni-page
               data-page="pages/index/index"> <uni-page-wrapper><uni-page-body>
                  <uni-view data-v-06ae08d2=""
                     class="page">
                     <uni-view
                        data-v-06ae08d2="" class="top-box"><uni-view data-v-06ae08d2="" class="left">
                           <Link to="/setting">
                              <uni-view
                                 data-v-06ae08d2="" class="ava"><img data-v-06ae08d2="" src="../fav.png"
                                    alt="" style={{ width: 40, height: 40 }} /></uni-view>
                           </Link>

                           <uni-view data-v-06ae08d2="" class="top-text">
                              <uni-view
                                 data-v-06ae08d2="" class="name">{t('welcome')}, {userDetails?.name}</uni-view>
                              <uni-view data-v-06ae08d2=""
                                 class="uid">Username: {userDetails?.username}</uni-view>

                           </uni-view>

                        </uni-view>
                        <uni-view
                           data-v-06ae08d2="" class="right">
                           {/* <uni-view data-v-06ae08d2="" class="notice"><img
                              data-v-06ae08d2="" src="/static/img/rewards.png" alt=""
                              style={{ width: '28px' }} /></uni-view> */}
                           <Link to="/profile">
                              <uni-view data-v-06ae08d2="" class="notice"><img
                                 data-v-06ae08d2="" src="/static/img/setting.png" alt="" style={{ width: '40px', height: '40px', filter: 'brightness(0.72) invert(0)' }} /><uni-view
                                    data-v-06ae08d2=""
                                    class=""></uni-view></uni-view>
                           </Link>
                        </uni-view>
                     </uni-view>
                     <uni-view data-v-06ae08d2="" class="ellipse"></uni-view>

                     <uni-view
                        data-v-06ae08d2="" class="balance-card"><uni-view data-v-06ae08d2="" class="first"><uni-view
                           data-v-06ae08d2="" class="balance-title">{t('Balance')}
                           (USDT)</uni-view></uni-view><uni-view data-v-06ae08d2="" class="second"><uni-view
                              data-v-06ae08d2="" translate="no" class="balance-num">$ {availbal ? availbal : "0.00"}
                           </uni-view>
                           {/* <uni-view
                              data-v-06ae08d2="" translate="no" class="profit-num">+0.0000<uni-view
                                 data-v-06ae08d2=""
                                 class="today" style={{ color: '#000' }}>Yesterday</uni-view></uni-view>*/}
                        </uni-view><uni-view
                           data-v-06ae08d2="" class="third">
                           <uni-view data-v-06ae08d2=""
                              class="balance-btn">
                              <Link to="/deposit" style={{ color: '#000', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>
                                 {t('Deposit')}
                              </Link><img data-v-06ae08d2="" src="/static/img/usdtdown.png"
                                 alt="" style={{ filter: 'brightness(0.90) invert(6)' }} /></uni-view>
                           <uni-view data-v-06ae08d2="" class="transfer"><img
                              data-v-06ae08d2="" src="/static/img/transfer.png" alt="" style={{ filter: 'brightness(0) invert(0)' }} /></uni-view>

                           <uni-view
                              data-v-06ae08d2="" class="balance-btn"> <Link to="/withdraw-req" style={{ color: '#000', textDecoration: 'none', fontWeight: '500', fontSize: '16px' }}>{t('Withdraw')} </Link><img data-v-06ae08d2=""
                                 src="/static/img/usdtup.png" alt="" style={{ filter: 'brightness(0.90) invert(6)' }} /></uni-view>

                        </uni-view></uni-view>
                     <uni-view
                        data-v-06ae08d2="" class="index-title">{t('attention')}</uni-view>
                     <uni-view data-v-06ae08d2=""
                        class="attention-box">

                          {coinsToShow.map((coin, index) => {
                              const isPositive = coin.percent >= 0;
                              const percentColor = isPositive ? 'rgb(21, 213, 199)' : 'rgb(255, 87, 87)';
                              return (
                        <uni-view data-v-06ae08d2="" class="attention-item">
                           <uni-view data-v-06ae08d2="" class="coin-layer">
                              <img data-v-06ae08d2=""
                              src="/static/coin/eth.png" alt="" />
                              <uni-view data-v-06ae08d2=""
                                 class="coin-name">{coin.symbol}<uni-view data-v-06ae08d2=""
                                    class="coin">{coin.volume}</uni-view></uni-view></uni-view>
                           <uni-view
                              data-v-06ae08d2="" class="price">{coin.price}</uni-view>
                           <uni-view data-v-06ae08d2="" style={{ color: percentColor }}
                              class="prop-updown"> {coin.percent > 0 ? `+${coin.percent}%` : `${coin.percent}%`}</uni-view></uni-view>


                           );
                        })}

                              {coinsToShow.map((coin, index) => {
                              const isPositive = coin.percent >= 0;
                              const percentColor = isPositive ? 'rgb(21, 213, 199)' : 'rgb(255, 87, 87)';

                              return (
                                 <uni-view data-v-06ae08d2=""  key={index} className="attention-item">
                                    <uni-view data-v-06ae08d2="" className="coin-layer">
                                    <img src={`/static/coin/${coin.image || 'eth.png'}`} alt="" />
                                    <uni-view  data-v-06ae08d2="" className="coin-name">
                                       {coin.symbol}
                                       <uni-view data-v-06ae08d2="" className="coin">{coin.volume}</uni-view>
                                    </uni-view>
                                    </uni-view>
                                    <uni-view data-v-06ae08d2="" className="price">{coin.price}</uni-view>
                                    <uni-view data-v-06ae08d2="" className="prop-updown" style={{ color: percentColor }}>
                                    {coin.percent > 0 ? `+${coin.percent}%` : `${coin.percent}%`}
                                    </uni-view>
                                 </uni-view>
                              );
                              })}




                        <uni-view data-v-06ae08d2=""
                           class="attention-item"><uni-view data-v-06ae08d2="" class="coin-layer"><img
                              data-v-06ae08d2="" src="/static/coin/btc.png" alt="" /><uni-view
                                 data-v-06ae08d2="" class="coin-name">BTCUSDT<uni-view data-v-06ae08d2=""
                                    class="coin">471.89M</uni-view></uni-view></uni-view><uni-view
                                       data-v-06ae08d2="" class="price">84465.10</uni-view><uni-view data-v-06ae08d2="" style={{ color: 'rgb(21, 213, 199)' }}
                                          class="prop-updown">+0.75%</uni-view></uni-view><uni-view data-v-06ae08d2=""
                                             class="attention-item"><uni-view data-v-06ae08d2="" class="coin-layer"><img
                                                data-v-06ae08d2="" src="/static/coin/xrp.png" alt="" /><uni-view
                                                   data-v-06ae08d2="" class="coin-name">XRPUSDT<uni-view data-v-06ae08d2=""
                                                      class="coin">63.62M</uni-view></uni-view></uni-view><uni-view
                                                         data-v-06ae08d2="" class="price">2.13</uni-view><uni-view data-v-06ae08d2=""
                                                            class="prop-down">-0.76%</uni-view></uni-view></uni-view>
                     <uni-view
                        data-v-06ae08d2="" class="new-banner">
                        <uni-swiper data-v-06ae08d2="" style={{ height: '165px' }}>
                           <div class="uni-swiper-wrapper">
                              <div class="uni-swiper-slides">
                                 <div class="uni-swiper-slide-frame"
                                    style={{ width: '100%', height: '100%', transform: 'translate(0%, 0px) translateZ(0px)' }}>
                                    <uni-swiper-item data-v-06ae08d2=""
                                       style={{ position: 'absolute', width: '100%', height: '100%', transform: 'translate(0%, 0px) translateZ(0px)' }}><uni-view
                                          data-v-06ae08d2="" class="banner-item"><img data-v-06ae08d2=""
                                             src="/static/img/Registration.png" alt="" /><uni-view
                                                data-v-06ae08d2="" class="banner-title">{t('ExclusiveUsers')}</uni-view><uni-view data-v-06ae08d2=""
                                                   class="banner-text">{t('Exclusiverewards')}</uni-view><uni-view data-v-06ae08d2=""
                                                      class="banner-btn" onClick={navTeam}>Our Team</uni-view></uni-view></uni-swiper-item>



                                 </div>
                              </div>

                           </div>
                        </uni-swiper></uni-view>

                     <uni-view data-v-06ae08d2="" class="market-box"><uni-view
                        data-v-06ae08d2="" class="market-title">{t('MarketQuotes')}</uni-view>


                        <div style={{ padding: "2px", color: "#fff", maxWidth: "500px" }}>
                           {coinsToShow.map((coin) => {
                              const isPositive = coin.percent >= 0;
                              return (
                                 <div
                                    key={coin.symbol}

                                    // onClick={() => setSelectedSymbol(coin.symbol)} 
                                    onClick={() => coin.symbol && navigate(`/dashboard/TradingChart/${coin.symbol.toUpperCase()}`)}
                                    style={{
                                       display: "flex",
                                       alignItems: "center",
                                       justifyContent: "space-between",
                                       background: "#fff",
                                       padding: "12px",
                                       borderRadius: "10px",
                                       marginBottom: "10px"
                                    }}
                                 >
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                       <img
                                          src={coin.image}
                                          alt={coin.name}
                                          style={{
                                             width: "40px",
                                             height: "40px",
                                             borderRadius: "50%",
                                             marginRight: "10px",
                                             color: "#000"

                                          }}
                                       />

                                       <div>
                                          <div style={{ fontWeight: "bold", color: "#000" }}>{coin.symbol}</div>
                                          <div style={{ fontSize: "12px", color: "#000" }}>{coin.volume}</div>
                                       </div>
                                    </div>

                                    <div style={{ textAlign: "right", marginRight: "10px" }}>
                                       <div style={{ color: "#000" }}>${coin.price?.toFixed(2)}</div>
                                       <div style={{ fontSize: "12px", color: isPositive ? "#0f0" : "#f44" }}>
                                          {coin.change?.toFixed(2)}
                                       </div>
                                    </div>

                                    <div
                                       style={{
                                          backgroundColor: isPositive ? "rgb(21 213 199)" : "#f44336",
                                          color: "#000",
                                          padding: "4px 10px",
                                          borderRadius: "12px",
                                          fontSize: "13px",
                                          minWidth: "60px",
                                          textAlign: "center"
                                       }}
                                    >
                                       {isPositive ? "+" : ""}
                                       {coin.percent?.toFixed(2)}%
                                    </div>
                                 </div>
                              );
                           })}

                           {/* Show More / Less Button */}
                           {allCoins.length > 5 && (

                              <uni-view data-v-06ae08d2="" onClick={() => setShowAll(!showAll)}
                                 style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '3px' }}> {showAll ? "Hide " : "More "}<img
                                    data-v-06ae08d2="" src="/static/img/Expand.png" alt=""
                                    style={{ width: '30px', height: '20px', filter: 'brightness(0) invert(0)' }} /> </uni-view>
                           )}
                        </div>
                        {selectedSymbol && <TradingChart symbol={selectedSymbol} />}



                     </uni-view>
                     <uni-view
                        data-v-06ae08d2="" class="market-title"
                        style={{ marginTop: '10px', marginBottom: '8px' }}>{t('FAQ')}</uni-view>
                     <uni-view data-v-06ae08d2=""
                        class="content"
                     >

                        <uni-view data-v-6fe2d4dd="" data-v-06ae08d2="" class="uni-collapse">
                           {faqData.map((faq, index) => (
                              <uni-view
                                 key={index}
                                 data-v-9da912bc=""
                                 data-v-06ae08d2=""
                                 class="uni-collapse-item"
                              >
                                 <uni-view
                                    data-v-9da912bc=""
                                    onClick={() => toggleDropdown(index)}
                                    class="uni-collapse-item__title uni-collapse-item-border"
                                 >
                                    <uni-view data-v-9da912bc="" class="uni-collapse-item__title-wrap">
                                       <uni-view data-v-9da912bc="" class="uni-collapse-item__title-box">
                                          <uni-text
                                             data-v-9da912bc=""
                                             class="uni-collapse-item__title-text"
                                          >
                                             <span>{faq.question}</span>
                                          </uni-text>
                                       </uni-view>
                                    </uni-view>
                                    <uni-view
                                       data-v-9da912bc=""
                                       class="uni-collapse-item__title-arrow uni-collapse-item--animation"
                                    >
                                       <uni-text
                                          data-v-45a6b600=""
                                          data-v-9da912bc=""
                                          class="uni-icons"
                                          style={{ color: 'rgb(187, 187, 187)', fontSize: '2px' }}
                                       >
                                          <img
                                             src="/static/img/downarrow.png"
                                             alt=""
                                             style={{
                                                width: '14px',
                                                marginLeft: '2px',
                                                transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                                                transition: "transform 0.3s ease"
                                             }}
                                          />
                                       </uni-text>
                                    </uni-view>
                                 </uni-view>
                                 {openIndex === index && (
                                    <Collapse isOpened={true} data-v-9da912bc="" class="uni-collapse-item__wrap is--transition">
                                       <uni-view data-v-9da912bc="" id="Uni_la5w" class="uni-collapse-item__wrap-content open">
                                          <uni-view data-v-06ae08d2="" class="content">
                                             <uni-text data-v-06ae08d2="" class="text">
                                                <span>{faq.answer}</span>
                                             </uni-text>
                                          </uni-view>
                                       </uni-view>
                                    </Collapse>
                                 )}
                              </uni-view>
                           ))}
                        </uni-view>



                        {/* <uni-view data-v-06ae08d2="" class="title">{t('Policy')}</uni-view>
                        <uni-view data-v-06ae08d2="" class="policy-item">{t('FIREFLYAgreement')}<SlArrowRight size={11} style={{ marginLeft: '5px' }} /></uni-view>
                        <uni-view data-v-06ae08d2="" class="policy-item">{t('FireflyServerUsageAgreement')}<SlArrowRight size={11} style={{ marginLeft: '5px' }} /></uni-view> */}
                     </uni-view>

                  </uni-view>

               </uni-page-body>
               </uni-page-wrapper>
            </uni-page>

         </uni-app>
         <Outlet />
      </div>
   );

};
export default Dashboard;
