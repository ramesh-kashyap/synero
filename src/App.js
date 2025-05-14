import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

import Language from "./components/Langauge";


import Dashboard from "./pages/home/Dashboard";
import Notice from "./pages/home/Notice";
import Faq from "./pages/home/Faq";
import TradingChart from "./pages/home/TradingChart";
import Smartrade from "./pages/home/Smartrade";


import Deposit from "./pages/invest/Deposit";
import History from "./pages/invest/History";

import WithdrawReq from "./pages/Withdraw/WithdrawReq";
import Assets from "./pages/Withdraw/Assets";
import Transaction from "./pages/Withdraw/Transaction";
import Whistory from "./pages/Withdraw/Whistory";
import Wallet from "./pages/Withdraw/Wallet";
import AddWallet from "./pages/Withdraw/AddWallet";
import AddWalletAddress from "./pages/Withdraw/AddWalletAddress";

import Server from "./pages/server/Server";

import Profile from "./pages/profile/Profile";
import ServerCommission from "./pages/profile/ServerCommission";
import ChangePassword from "./pages/profile/ChangePassword";
import PaymentPassword from "./pages/profile/PaymentPassword";

import Refer from "./pages/profile/Refer";
import Kyc from "./pages/profile/Kyc";
import Team from "./pages/profile/Team";
import Level from "./pages/profile/Level";
import Setting from "./pages/profile/Setting";

import Trade from "./pages/team/Trade";
  
import Footer from "./components/Footer";
  
import { AuthProvider } from "./components/AuthContext";
import { ProtectedRoute, PublicRoute } from './Helper/helper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function AppContent() {
    const location = useLocation();
    const hiddenFooterRoutes = [
        "/",                // Login default
        "/login",
        "/register",
        "/team",
        "/deposit-history",
        "/withdraw-history",
        "/withdraw-req",
        "/Smartrade",
        "/profile",
        "/deposit",
        "/add-walletAddress",
        "/add-wallet",
        "/forgot-password",
        "/change-password",
        "/payment-password",
        "/notice",
        "/server-commission",
        "/refer",
        "/kyc",
        "/wallet",
        "/langauge",
        "/faq",
        "/setting",
        "/level"
        // "/transaction"
    ];

    // Check if current path matches any of the above OR dynamic TradingChart route
    const hideFooter =
    hiddenFooterRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/add-walletAddress") ||
    location.pathname.startsWith("/dashboard/TradingChart");

    return (
        <div className="uni-body pages-index-index">
            <div className="uni-app uni-app--showtabbar uni-app--maxwidth">
                <div className="ellipse" style={{ height: 60 }}></div>

                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                    <Route path="/forgot-password" element={<PublicRoute><ForgotPassword /></PublicRoute>} />
                    <Route path="/langauge" element={<Language />} />
 
                    {/* Protected Routes */}
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/notice" element={<ProtectedRoute><Notice /></ProtectedRoute>} />
                    <Route path="/setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
                    <Route path="/faq" element={<ProtectedRoute><Faq /></ProtectedRoute>} />
                    <Route path="/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />

                    <Route path="/trade" element={<ProtectedRoute><Trade /></ProtectedRoute>} />
                    <Route path="/assets" element={<ProtectedRoute><Assets /></ProtectedRoute>} />
                    <Route path="/transaction" element={<ProtectedRoute><Transaction /></ProtectedRoute>} />
                    <Route path="/server" element={<ProtectedRoute><Server /></ProtectedRoute>} />
                    <Route path="/wallet" element={<ProtectedRoute><Wallet /></ProtectedRoute>} />
                    <Route path="/refer" element={<ProtectedRoute><Refer /></ProtectedRoute>} />
                    <Route path="/Kyc" element={<ProtectedRoute><Kyc /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/server-commission" element={<ProtectedRoute><ServerCommission /></ProtectedRoute>} />
                    <Route path="/payment-password" element={<ProtectedRoute><PaymentPassword /></ProtectedRoute>} />
                    <Route path="/level" element={<ProtectedRoute><Level/></ProtectedRoute>}/>
                    <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
                    
                    <Route path="/withdraw-req" element={<ProtectedRoute><WithdrawReq /></ProtectedRoute>} />
                    <Route path="/deposit-history" element={<ProtectedRoute><History /></ProtectedRoute>} />
                    <Route path="/withdraw-history" element={<ProtectedRoute><Whistory /></ProtectedRoute>} />
                    <Route path="/smartrade" element={<ProtectedRoute><Smartrade /></ProtectedRoute>} />
                    <Route path="/deposit" element={<ProtectedRoute><Deposit /></ProtectedRoute>} />
                    <Route path="/dashboard/TradingChart/:symbol" element={<ProtectedRoute><TradingChart /></ProtectedRoute>} />
                    <Route path="/add-wallet" element={<ProtectedRoute><AddWallet /></ProtectedRoute>} />
                    <Route path="/add-walletAddress/:networkType" element={  <ProtectedRoute><AddWalletAddress /></ProtectedRoute>} />
                </Routes>

                {/* Footer only if route not in hidden list */}
                {!hideFooter && <Footer />}
                <ToastContainer />
            </div>
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
           
                <AppContent />
           
        </AuthProvider>
    );
}

export default App;
