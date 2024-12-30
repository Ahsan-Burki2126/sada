import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // Example transaction data
  const transaction = {
    name: "HAZRAT ULLAH",
    amount: 5000,
    time: "11:32 AM",
  };

  return (
    <div className="min-h-screen bg-[#f6fbf9] px-4 py-6">
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-4">
        {/* Current Balance Card */}
        <div
          className="bg-[#1fcf90] rounded-2xl p-4 shadow-md text-white flex flex-col justify-between"
          onClick={() => navigate("/balance")}
        >
          <div>
            <p className="text-sm">Current Balance</p>
            <h1 className="text-3xl font-bold mt-2">Rs. 6,017</h1>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div
             
              className="h-6"
            />
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9l-5 5m0 0l-5-5m5 5V3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Load Money & Send & Request */}
        <div className="grid grid-cols-1 gap-4">
          {/* Load Money */}
          <div className="bg-[#007bff] rounded-2xl p-4 shadow-md text-white flex items-center justify-between">
            <p className="text-lg font-semibold">Load Money</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </div>

          {/* Send & Request */}
          <div
            className="bg-[#f77e68] rounded-2xl p-4 shadow-md text-white flex items-center justify-between"
            onClick={() => navigate("/balance")}
          >
            <p className="text-lg font-semibold">Send & Request</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8l4-4m0 0l4 4m-4-4v16"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div
        className="bg-white rounded-2xl p-4 shadow-md mt-6"
        onClick={() => navigate("/receipt", { state: { transaction } })}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#172b4d]">Transactions</h2>
          <button className="text-[#f77e68] text-sm font-medium">See all</button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-[#e8f7f0] rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#1fcf90]"
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
            <div className="ml-3">
              <p className="text-sm font-semibold text-[#172b4d]">
                {transaction.name}
              </p>
              <p className="text-xs text-[#7a869a]">{transaction.time}</p>
            </div>
          </div>
          <p className="text-sm font-semibold text-[#1fcf90]">
            + Rs. {transaction.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
