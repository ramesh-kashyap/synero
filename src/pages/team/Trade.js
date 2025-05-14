import React, { useState, useEffect } from "react";
import Api from "../../Requests/Api";
const Trade = () => {
  const [activeTab, setActiveTab] = useState("running");
  const [runtrade, setRuntrades] = useState([]);
  const [comtrade, setComtrades] = useState([]);
  const [tradeIncomes, setTradeIncomes] = useState({}); 
  useEffect(() => {
    runingtrade();
    }, [])
  const runingtrade = async () => {
    try {
      const response = await Api.get('/runingtrade');
      console.log(response.data);
      if (response.data?.success) { 
        setRuntrades(response.data.runingTrades);
        setComtrades(response.data.expiredTrades);

        const completedTradeIds = response.data.expiredTrades.map(trade => trade.id);
        if (completedTradeIds.length > 0) {
          const incomeResponse = await Api.post('/getTradeIncomes', { tradeIds: completedTradeIds });
          console.log(incomeResponse.data);
          if (incomeResponse.data?.success) {
            const incomeData = incomeResponse.data.incomes.reduce((acc, income) => {
              acc[income.user_id_fk] = income.comm || 0;  // Corrected from 'amount' to 'comm'
              return acc;
            }, {});
            setTradeIncomes(incomeData);
          }
        }


      } else {
        console.error("API did not return success");
      }
    } catch (error) {
      console.error("Error fetching servers:", error);
    }
  };
   
   

  function Countdown({ endTime }) {
    const calculateRemaining = () => {
      const now = new Date();
      const end = new Date(endTime);
      const diff = end - now; // milliseconds remaining
      if (diff <= 0) return "00:00:00";
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      const pad = (n) => n.toString().padStart(2, "0");
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    };
  
    const [time, setTime] = useState(calculateRemaining());
  
    useEffect(() => {
      const timerId = setInterval(() => setTime(calculateRemaining()), 1000);
      return () => clearInterval(timerId);
    }, [endTime]);
  
    return <>{time}</>;
  }
  

  return (
    <div class="uni-body pages-trade-trade">
      <uni-app class="uni-app--showtabbar uni-app--maxwidth">
        <uni-page data-page="pages/trade/trade">
          <uni-page-wrapper>
            <uni-page-body>
              <uni-view data-v-7cdca4f6="" class="page" >
                <uni-view data-v-7cdca4f6="" class="ellipse"></uni-view>
                <uni-view data-v-7cdca4f6="" class="top-group">
                  <uni-view
                    data-v-7cdca4f6=""
                    class="top-btn selected"
                    onClick={() => setActiveTab("running")}
                    style={{
                      backgroundColor:
                        activeTab === "running"
                          ? "#15d5c7"
                          : "#fff",
                      color:
                        activeTab === "running" ? "#000" : "#000",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Running
                  </uni-view>

                  <uni-view
                    data-v-7cdca4f6=""
                    class="top-btn selected"
                    onClick={() => setActiveTab("completed")}
                    style={{
                      backgroundColor:
                        activeTab === "completed"
                          ? "#15d5c7"
                          : "#fff",
                      color:
                        activeTab === "completed"
                          ? "#000"
                          : "#000",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Completed
                  </uni-view>
                  
                </uni-view>

                {activeTab === "running" ? (
                runtrade.length > 0 ? (
                  runtrade.map((item, index) => (
                  <uni-view data-v-b7dd60dc="" key={index} class="history-box">
                    <uni-view data-v-b7dd60dc="" class="item-box">
                      <uni-view data-v-b7dd60dc="" class="history-item">
                        <uni-view data-v-b7dd60dc="" class="first">
                          <uni-view data-v-b7dd60dc="" class="left">
                            {/* <img
                              data-v-b7dd60dc=""
                              src="/static/coin/doge.png"
                              alt=""
                            /> */}
                            {item.currency||0}
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="right">
                            Running
                          </uni-view>
                        </uni-view>

                        <uni-view data-v-b7dd60dc="" class="h-line"></uni-view>
                        <uni-view
                          data-v-542626a5=""
                          data-v-b7dd60dc=""
                          class="count-down"
                        >
                          {/* <img
                            data-v-542626a5=""
                            src="/static/img/time.png"
                            alt=""
                          /> */}
                          <Countdown endTime={item.endtime} />
                        </uni-view>
                        <uni-view data-v-b7dd60dc="" class="text-line">
                          <uni-view data-v-b7dd60dc="" class="title">
                            Server No
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="value">
                          {item.selectedServer || 0}
                          </uni-view>
                        </uni-view>
                        <uni-view data-v-b7dd60dc="" class="text-line">
                          <uni-view data-v-b7dd60dc="" class="title">
                            Create Time
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="value">
                          {item.entrytime||0}
                          </uni-view>
                        </uni-view>
                        <uni-view data-v-b7dd60dc="" class="text-line">
                          <uni-view data-v-b7dd60dc="" class="title">
                            End Time
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="value">
                          {item.endtime||0}
                          </uni-view>
                        </uni-view>
                        <uni-view data-v-b7dd60dc="" class="text-line">
                          <uni-view data-v-b7dd60dc="" class="title">
                            Investment Amount
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="value">
                         ${item.amount||0}
                          </uni-view>
                        </uni-view>
                        {/* <uni-view data-v-b7dd60dc="" class="text-line">
                          <uni-view data-v-b7dd60dc="" class="title">
                            Insurance
                          </uni-view>
                          <uni-view data-v-b7dd60dc="" class="value">
                            0.0037
                          </uni-view>
                        </uni-view> */}
                        <uni-view
                          data-v-b7dd60dc=""
                          style={{ height: "10px" }}
                        ></uni-view>
                      </uni-view>
                    </uni-view>
                  </uni-view>
                    ))
                  ) : (
                  <uni-view data-v-7cdca4f6="" class="history-box">
                    <uni-view data-v-7cdca4f6="" class="nodata">
                      {/* <img
                        data-v-7cdca4f6=""
                        src="/static/img/nodata.png"
                        alt=""  style={{filter:'brightness(0.72) invert(0)'}}
                      /> */}
                      No Data
                    </uni-view>
                  </uni-view>
                   )
                  ) : comtrade.length > 0 ? (
                    comtrade.map((item, index) => (             

                  <uni-view data-v-945761f4=""  key={index} class="history-item">
                     <uni-view data-v-945761f4="" class="first">
                       <uni-view data-v-945761f4="" class="left">
                        {/* {/ <img data-v-945761f4="" src="/static/coin/doge.png" alt=""/> } */}
                        {item.currency || 0}</uni-view>
                       <uni-view data-v-945761f4="" class="right">Completed</uni-view>
                  </uni-view>
                   <uni-view data-v-945761f4="" class="h-line"></uni-view>
                    <uni-view data-v-945761f4="" class="text-line">
                    <uni-view data-v-945761f4="" class="title">Server No</uni-view>
                   <uni-view data-v-945761f4="" class="value">{item.selectedServer || 0}</uni-view>
                  </uni-view>
                    <uni-view data-v-945761f4="" class="text-line">
                  <uni-view data-v-945761f4="" class="title">Create Time</uni-view>
                   <uni-view data-v-945761f4="" class="value">{item.entrytime||0}</uni-view>
                  </uni-view>
                    <uni-view data-v-945761f4="" class="text-line">
                    <uni-view data-v-945761f4="" class="title">End Time</uni-view>
                   <uni-view data-v-945761f4="" class="value">{item.endtime||0}</uni-view>
                </uni-view>
                  <uni-view data-v-945761f4="" class="text-line">
                   <uni-view data-v-945761f4="" class="title">Investment Amount</uni-view>
                  <uni-view data-v-945761f4="" class="value">$ {item.amount||0}</uni-view>
                </uni-view>
                {/* <uni-view data-v-945761f4="" class="text-line">
                  <uni-view data-v-945761f4="" class="title">Insurance</uni-view>
                <uni-view data-v-945761f4="" class="value">0.0038</uni-view>
                </uni-view> */}
                <uni-view data-v-945761f4="" class="h-line"></uni-view>
                    {/* <uni-view data-v-945761f4="" class="text-line">
                 <uni-view data-v-945761f4="" class="title">Total Profit</uni-view>
                <uni-view data-v-945761f4="" class="value">0.0612</uni-view>
              </uni-view>
                <uni-view data-v-945761f4="" class="text-line">

                  
                  <uni-view data-v-945761f4="" class="title">Commission</uni-view>
              <uni-view data-v-945761f4="" class="value red">-0.0183</uni-view>
             </uni-view> */}
                <uni-view data-v-945761f4="" class="text-line">
                <uni-view data-v-945761f4="" class="title">Trade Income</uni-view>
                   <div className="value green">{tradeIncomes[item.id] ? `$${tradeIncomes[item.id]}` : "wait.."}</div>
                 </uni-view>
               <uni-view data-v-945761f4="" style={{height: '10px'}}></uni-view>
                </uni-view>
                   ))
                  ) : (             
                  <uni-view data-v-7cdca4f6="" class="history-box">
                    <uni-view data-v-7cdca4f6="" class="nodata">
                      <img
                        data-v-7cdca4f6=""
                        src="/static/img/nodata.png"
                        alt="" style={{filter:'brightness(0.72) invert(0)'}}
                      />
                      No Data
                    </uni-view>
                  </uni-view>
                  )}
              </uni-view>
            </uni-page-body>
          </uni-page-wrapper>
        </uni-page>
      </uni-app>
    </div>
  );
};

export default Trade;


