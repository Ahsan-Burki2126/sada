import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Raast from "../src/assets/Raast.jpg";
import { X } from "lucide-react";

const PaymentReceipt = () => {
  const navigate = useNavigate(); // React Router hook for navigation
  const { state } = useLocation();
  const { amount } = state || { amount: "0" };

  const [currentDateTime, setCurrentDateTime] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Karachi",
      };
      setCurrentDateTime(now.toLocaleString("en-PK", options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false); // Stop the transition after 2 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-evenly bg-[#f6fbf9]">
      {/* Header Section */}
      <div className="flex">
        <div className="flex items-center ml-12">
          <img
            src="https://images.sftcdn.net/images/t_app-icon-m/p/c1ee60d5-102a-4162-aa1d-9acf3633c849/2641861057/sadapay-logo"
            alt="SadaPay Logo"
            className="h-16"
          />
          <div className="font-bold text-[#0b4861] font-sans">
            SADA<span className="text-[#38597e]">PAY</span>
          </div>
        </div>
        <button className="text-[#f77e68] font-medium text-sm ml-12">
          Share
        </button>
      </div>

      {/* Receipt Card */}
      <div className="w-[80%] h-[450px] bg-white rounded-2xl p-6 z-10 shadow-lg relative">
        {/* Status Icon */}
        <div
          className={`absolute -top-12 left-1/2 transform -translate-x-1/2 transition-transform duration-2000 ease-in-out ${
            isTransitioning ? "translate-y-4" : "translate-y-0"
          }`}
        >
          <div className="bg-[#f77e68] text-white text-3xl rounded-full h-24 w-24 flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Payment Details */}
        <div className="text-center mt-12">
          <h1 className="text-3xl font-bold text-[#172b4d]">Rs. {amount}</h1>
          <p className="text-sm mt-2">
            Umer Akbar to <p className="font-semibold">Abdul Rashid</p>
          </p>
          <p className="text-xs text-[#7a869a] mt-2 flex items-center justify-center">
            Powered by
            <img src={Raast} alt="Raast Logo" className="h-6 ml-1" />
          </p>
        </div>

        <div className="text-[#172b4d] text-sm mt-4">
          <p className="mb-2">
            <p className="font-medium text-[#7a869a]">Date & Time (PKT):</p>{" "}
            {currentDateTime}
          </p>
          <p className="mb-2">
            <p className="font-medium text-[#7a869a]">Receiver's Account:</p>{" "}
            Mobilink Microfinance Bank (MMBL) *5426
          </p>
          <p className="mb-2">
            <p className="font-medium text-[#7a869a]">Reference Number:</p>{" "}
            Raast-512271
          </p>
        </div>
      </div>

      {/* Close Button */}
      <div className="mt-6 flex">
        <button
          onClick={() => navigate("/")} // Navigate to Dashboard
          className="w-80 p-4 flex bg-[#f77e68] text-white items-center justify-between mx-4 rounded-lg text-lg font-bold"
        >
          Close
          <span className="ml-24">
            {<X className="font-semibold text-lg" />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default PaymentReceipt;
