import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../Requests/Api";
import Loader from "../../components/Loader";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";



const Level = () => {
  const [activeTab, setActiveTab] = useState("running");

  const location = useLocation();
  const [level, setLevel] = useState([]);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Default limit
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [loading, setLoading] = useState(false);
  const { lvl } = useParams(); // 🔹 Get the 'lvl' parameter from URL

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams(location.search);
      const level = queryParams.get("selected_level"); // Get value from query param
      setSelectedLevel(level);

      console.log(level);
      const reaponse = await Api.get("list", {
        params: { // ✅ Ensure query parameters are passed correctly
          selected_level: level || 0
        },
      });

      if (reaponse.data.status) {
        setUsers(reaponse.data.direct_team);
      }

      // console.log(users);

    } catch (error) {
      console.error("❌ Error fetching users:", error);
    }
    setLoading(false);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false // 24-hour format
    }).replace(",", ""); // Remove comma from output;
  };





  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Reset to first page when searching
    loadUsers();
  };


  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
    setPage(1); // Reset page on level change
  };
  // ✅ Show a loader while fetching data
  if (loading) {
    return <Loader />
  }
  return (
    <div class="uni-body pages-trade-trade">
      <uni-app class="uni-app--showtabbar uni-app--maxwidth">
        <uni-page data-page="pages/trade/trade">
          <uni-page-wrapper>
            <uni-page-body>
              <uni-view data-v-7cdca4f6="" class="page">
                <uni-view data-v-7cdca4f6="" class="ellipse"></uni-view>



                <uni-view data-v-1011963f="" class="top-box">
                  <uni-view data-v-636c600c="" data-v-1011963f="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <uni-view data-v-35b9a113="" data-v-1011963f="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>

                      <Link to="/team">
                        <uni-view data-v-1011963f="" class="back"><img data-v-1011963f="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)' }} /></uni-view>
                      </Link>

                    </uni-view>
                    <uni-view data-v-35b9a113="" data-v-1011963f="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                      <uni-view data-v-1011963f="" class="page-title">Level Team</uni-view>
                    </uni-view>
                    <uni-view data-v-35b9a113="" data-v-1011963f="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view>
                  </uni-view>
                </uni-view>



                {activeTab === "running" ? (
                  <uni-view data-v-b7dd60dc="" class="history-box">
                    {users.map((user, index) => (

                      <uni-view data-v-10f20c32="" class="member-item" key={index}style={{backgroundColor:'rgb(255 255 255)'}}>

                        <uni-view data-v-10f20c32="" class="first">
                          <uni-view data-v-10f20c32="" class="left">
                            <uni-view data-v-10f20c32="" class="ava-box">
                              <img data-v-10f20c32="" src="/static/img/image.png" alt="" />
                              <uni-view data-v-10f20c32="" class="name-box">
                                <uni-view data-v-10f20c32="" class="name">{user.name || "User"}</uni-view>
                                <uni-view data-v-10f20c32="" class="uid"style={{color:'gray'}}> {user.username}
                                </uni-view>
                              </uni-view>
                            </uni-view>
                            <uni-view data-v-10f20c32="" class="time"style={{color:'black'}}>{formatDate(user.jdate)}
                            </uni-view>
                          </uni-view>
                          <uni-view data-v-10f20c32="" class="right">
                            <uni-view data-v-10f20c32="" class="value">${Number(user.package,).toFixed(2)}
                            </uni-view>
                            <uni-view data-v-10f20c32="" class="title"style={{color:'gray'}}>Available Balance</uni-view>
                            <uni-view data-v-10f20c32="" class="value">${user.available_balance ? user.available_balance.toFixed(2) : "0.00"}</uni-view>
                            <uni-view data-v-10f20c32="" class="title"style={{color:'gray'}}>Trade Amount</uni-view>
                          </uni-view>
                        </uni-view>
                        <uni-view data-v-10f20c32="" class="h-line"style={{backgroundColor:'#bfbfbf'}}></uni-view>
                        {/* <uni-view data-v-10f20c32="" class="layout">
                          <uni-view data-v-10f20c32="" class="title">Number of Invitees</uni-view>
                          <uni-view data-v-10f20c32="" class="value">0(0)</uni-view>
                        </uni-view> */}
                        <uni-view data-v-10f20c32="" class="layout">
                          <uni-view data-v-10f20c32="" class="title"style={{color:'black'}}>Yesterday's Commission(Trade)</uni-view>
                          <uni-view data-v-10f20c32="" class="value">${user.available_balance ? user.available_balance.toFixed(2) : "0.00"}</uni-view>
                        </uni-view>
                        <uni-view data-v-10f20c32="" class="layout">
                          <uni-view data-v-10f20c32="" class="title"style={{color:'black'}}>Yesterday's Commission(Server)</uni-view>
                          <uni-view data-v-10f20c32="" class="value">{user.server_income.toFixed(6) || "0.00"}</uni-view>
                        </uni-view>
                        <uni-view data-v-10f20c32="" class="layout">
                          <uni-view data-v-10f20c32="" class="title"style={{color:'black'}}>Total Commission(Trade)</uni-view>
                          <uni-view data-v-10f20c32="" class="value">{user.totalTradeIncome.toFixed(6) || "0.00"}</uni-view>
                        </uni-view>
                        <uni-view data-v-10f20c32="" class="layout">
                          <uni-view data-v-10f20c32="" class="title"style={{color:'black'}}>Total Commission(Server)</uni-view>
                          <uni-view data-v-10f20c32="" class="value">{user.totalServerIncome.toFixed(6) || "0.00"}</uni-view>
                        </uni-view>

                      </uni-view>
                    ))}

                  </uni-view>
                ) : (
                  <uni-view data-v-7cdca4f6="" class="history-box">
                    <uni-view data-v-7cdca4f6="" class="nodata">
                      <img
                        data-v-7cdca4f6=""
                        src="/static/img/nodata.png"
                        alt=""
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

export default Level;