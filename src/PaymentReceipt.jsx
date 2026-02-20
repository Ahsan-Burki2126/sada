import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Raast from "../src/assets/Raast.jpg";
import { X } from "lucide-react";

const PaymentReceipt = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { amount, frozenTime, recipientName, recipientBank } = state || {
    amount: "0",
    frozenTime: "N/A",
    recipientName: "N/A",
    recipientBank: "N/A",
  };

  // 🔊 Play Success Sound on Load
  useEffect(() => {
    const audio = new Audio(
      "https://www.soundjay.com/buttons/sounds/button-3.mp3"
    );
    audio.play();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-evenly bg-[#f6fbf9] animate-fadeIn">
      
      {/* Header */}
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
      <div className="w-[80%] h-[450px] bg-white rounded-2xl p-6 z-10 shadow-lg relative animate-scaleUp">
        
        {/* Animated Status Icon */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#f77e68] text-white text-3xl rounded-full h-20 w-20 flex items-center justify-center shadow-md animate-bounce">
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
          <h1 className="text-3xl font-bold text-[#172b4d] animate-pulse">
            Rs. {amount}
          </h1>
          <p className="text-sm mt-2">
            Amjad Hayat to{" "}
            <span className="font-semibold">{recipientName}</span>
          </p>
          <p className="text-xs text-[#7a869a] mt-2 flex items-center justify-center">
            Powered by
            <img src={Raast} alt="Raast Logo" className="h-6 ml-1" />
          </p>
        </div>

        <div className="text-[#172b4d] text-sm mt-4">
          <p className="mb-2">
            <span className="font-medium text-[#7a869a]">
              Date & Time (PKT):
            </span>{" "}
            {frozenTime}
          </p>
          <p className="mb-2">
            <span className="font-medium text-[#7a869a]">
              Receiver's Account:
            </span>{" "}
            {recipientBank}
          </p>
          <p className="mb-2">
            <span className="font-medium text-[#7a869a]">
              Reference Number:
            </span>{" "}
            Raast-978560
          </p>
        </div>
      </div>

      {/* Close Button */}
      <div className="mt-6 flex">
        <button
          onClick={() => navigate("/")}
          className="w-80 p-4 flex bg-[#f77e68] text-white items-center justify-between mx-4 rounded-lg text-lg font-bold hover:scale-105 transition"
        >
          Close
          <span className="ml-24">
            <X className="font-semibold text-lg" />
          </span>
        </button>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }

          .animate-scaleUp {
            animation: scaleUp 0.5s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes scaleUp {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default PaymentReceipt;
