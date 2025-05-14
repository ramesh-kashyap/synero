import React, { useEffect, useState, useRef } from 'react';
import Api from '../Requests/Api';
import { LogOut, Lock, User } from "lucide-react"; // Icons
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState("Guest");
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
  const menuRef = useRef(null);

  const getFirstLetter = (str) => str ? str.charAt(0).toUpperCase() : '';

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await Api.get('auth/userinfo');
      if (response.data.status) {
        setUsername(response.data.name);
      }
    } catch (err) {
      console.error("❌ Error fetching user info:", err);
    }
  };

  const navigate = useNavigate();
  
  // Function to open the logout confirmation popup
  const handleLogoutClick = () => {
    setIsPopupOpen(true); // Show the popup
  };

  // Function to handle logout
  const handleLogoutConfirm = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setIsPopupOpen(false); // Close the popup after logout
  };

  // Function to close the popup
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex items-center justify-between py-2 mt-5 px-4 md:px-10 lg:px-10 xl:px-20">
      {/* Logo Section */}
      <a className="md:hidden" href="/">
        <img
          alt="Logo"
          loading="lazy"
          width="163"
          height="40"
          decoding="async"
          className="max-w-[156px]"
          src="/upnl/assets/icons/logo.png"
          style={{ color: "transparent", width: "154px" }}
        />
      </a>
      <div className="w-full flex flex-row justify-end md:justify-between">
        {/* User Section */}
        <div className="flex items-center h-[38px] text-gray-800 font-medium">
          <a className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3" href="/team">
            <div className="flex items-center rounded-full pl-3 text-sm">
              <img
                alt="User Avatar"
                loading="lazy"
                width="16"
                height="16"
                decoding="async"
                className="mr-3"
                src="/upnl/assets/icons/icon_user_add.svg"
                style={{ color: "transparent" }}
              />
              
            </div>
            <div class="flex ml-3 items-center justify-center rounded-full bg-gray-200 min-w-8 h-8 text-xs px-2">0</div>
          </a>
          <a className="flex flex-row gap-4 h-[38px] bg-white p-1 px-2 rounded-full md:mr-3" title="Wallet" href="/wallet">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex items-center justify-center font-bold">0</div>
              <img
                alt="MCC"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                src="upnl/assets/icons/logo_mcc_2.svg"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="hidden md:flex flex-row justify-center items-center gap-2">
              <div className="flex items-center justify-center font-bold">0</div>
              <img
                alt="POINT"
                loading="lazy"
                width="30"
                height="30"
                decoding="async"
                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                src="upnl/assets/icons/logo_point_2.svg"
                style={{ color: "transparent" }}
              />
            </div>
          </a>
        </div>

        {/* Button Section */}
        <div className="relative flex items-center space-x-2 font-semibold">
        <span class="hidden lg:inline text-xl">Hello, {username}!</span>
          {/* User Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="" style={{position:"relative"}}>
            <div
              className="flex items-center justify-center w-[40px] h-[38px] rounded-full text-[24px] font-semibold"
              style={{
                backgroundColor: "#0093E9",
                backgroundImage: "linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)",
              }}
            >
              {getFirstLetter(username)}
            </div>
          </button>
   
          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div ref={menuRef} className="absolute right-0 top-10 mt-2 w-[182px] bg-white text-sm font-medium rounded-[16px] shadow-lg p-3 z-10">
              <ul className="py-2">
                <li className="flex items-center w-full mb-2 h-[42px] text-gray-700 hover:bg-gray-200 p-4 rounded-[16px]">
                  <Link to="/profile" className="flex gap-2 items-center w-full">
                    <User size={20} />
                    Profile
                  </Link>
                </li>
                <li className="flex items-center w-full mb-2 h-[42px] text-gray-700 hover:bg-gray-200 p-4 rounded-[16px]">
                  <Link to="/security" className="flex gap-2 items-center w-full">
                    <Lock size={20} />
                    Security
                  </Link>
                </li>

                <li onClick={handleLogoutClick} className="cursor-pointer flex gap-2 items-center h-[42px] w-full text-red-500 hover:bg-red-100 p-4 rounded-[16px]">
                  <LogOut size={20} />
                  Logout
                </li>
              </ul>
            </div>
          )}

          {/* Language Button */}
          <div className="hidden md:inline-block">
            <div className="relative inline-block text-[16px] font-bold">
              <button className="flex p-2 items-center bg-white border justify-center align-center h-[38px] w-[60px] rounded-[20px] hover:bg-gray-200 focus:outline-none">
                EN
              </button>
            </div>
          </div>
        </div>
 {/* Confirmation Popup */}
{isPopupOpen && (
  <div ref={menuRef} className="jsx-9b2c38d357270ef1 w-full fixed inset-0 flex items-center justify-center bg-black1 bg-opacity-50 z-[999999999]"style={{zIndex:"18"}}>
    <div className="jsx-9b2c38d357270ef1 bg-white px-8 pt-10 pb-6 w-[385px] max-w-[90%] rounded-[20px] shadow-lg animate-fade-in">
      <div className="jsx-9b2c38d357270ef1 flex justify-center mb-4">
        <LogOut size={30} />
      </div>
      <h3 className="jsx-9b2c38d357270ef1 text-center font-semibold mb-10">
        Confirmation of logout
      </h3>
      <div className="jsx-9b2c38d357270ef1 justify-center w-full">
        <button onClick={handleLogoutConfirm} className="jsx-9b2c38d357270ef1 w-full bg-black text-white rounded-full px-6 py-2">
          Confirm
        </button>
        <button onClick={handlePopupClose} className="jsx-9b2c38d357270ef1 w-full mt-2 bg-gray-200 text-black rounded-full px-6 py-2">
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

      </div>

    
      
    
    </div>
    
  );
};

export default Header;
