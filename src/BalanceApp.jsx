import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BalanceApp = () => {
  const [amount, setAmount] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [frozenTime, setFrozenTime] = useState(""); // State to hold frozen time
  const navigate = useNavigate();

  const handlePress = (value) => {
    if (amount === "0" && value !== "0") {
      setAmount(value);
    } else {
      setAmount((prev) => prev + value);
    }
  };

  const handleBackspace = () => {
    if (amount.length > 1) {
      setAmount((prev) => prev.slice(0, -1));
    } else {
      setAmount("0");
    }
  };

  const handleSend = () => {
    if (amount !== "0") {
      // Freeze the current time
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
      setFrozenTime(now.toLocaleString("en-PK", options));

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/receipt", {
          state: { amount, frozenTime: now.toLocaleString("en-PK", options) },
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f77e68] flex flex-col items-center justify-evenly py-6 ">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-70 z-50">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-[#f77e68] rounded-full animate-spin"></div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col items-center">
        <p className="text-white text-sm">Current balance</p>
        <p className="text-white text-2xl font-bold">Rs. 6,017</p>
      </div>

      {/* Amount */}
      <div>
        <p className="text-white text-5xl font-bold">Rs. {amount}</p>
      </div>

      {/* Number Pad */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key, index) => (
          <button
            key={index}
            className="w-20 h-20 bg-[#f98c76] text-white text-3xl font-semibold rounded-full flex items-center justify-center shadow-lg"
            onClick={() => handlePress(key.toString())}
          >
            {key}
          </button>
        ))}
        {/* Spacer for alignment */}
        <div className="w-20 h-20"></div>
        <button
          className="w-20 h-20 bg-[#f98c76] text-white text-3xl font-semibold rounded-full flex items-center justify-center shadow-lg"
          onClick={() => handlePress("0")}
        >
          0
        </button>
        <button
          className="w-20 h-20 bg-[#f98c76] text-white text-3xl font-semibold rounded-full flex items-center justify-center shadow-lg"
          onClick={handleBackspace}
        >
          ⌫
        </button>
      </div>

      {/* Buttons */}
      <div className="flex w-full px-10 mt-8 mb-5">
        <button
          className={`flex-1 py-4 rounded-lg mx-2 text-lg font-bold shadow-md ${
            amount === "0"
              ? "bg-neutral-700 text-white opacity-50 cursor-not-allowed"
              : "bg-black text-white hover:bg-opacity-80"
          }`}
        >
          Request
        </button>
        <button
          className={`flex-1 py-4 rounded-lg mx-2 text-lg font-bold shadow-md ${
            amount === "0"
              ? "bg-neutral-700 text-white opacity-50 cursor-not-allowed"
              : "bg-black text-white hover:bg-opacity-80"
          }`}
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default BalanceApp;
