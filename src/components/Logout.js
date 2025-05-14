import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:5001/api/auth/logout");
            localStorage.removeItem("token"); // Remove JWT token
            navigate("/login"); // Redirect to login
        } catch (error) {
            console.error("Logout failed:", error.response?.data?.error || error.message);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
