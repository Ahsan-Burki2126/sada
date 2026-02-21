
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const transaction = {
    name: "HAZRAT ULLAH",
    amount: 5000,
    time: "11:32 AM",
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8] flex flex-col justify-between">

      {/* MAIN CONTENT */}
      <div className="px-4 pt-6 pb-24">

        {/* ===== TOP CARDS ===== */}
        <div className="grid grid-cols-3 gap-4">

          {/* Balance Card */}
          <div
            className="col-span-2 bg-gradient-to-br from-[#1fcf90] to-[#14b8a6] rounded-3xl p-6 shadow-xl text-white flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition"
            onClick={() => navigate("/balance")}
          >
            <div>
              <p className="text-sm opacity-80 tracking-wide">
                Current Balance
              </p>
              <h1 className="text-3xl font-bold mt-2 tracking-tight">
                Rs. 6,017
              </h1>
            </div>

            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                <div className="w-6 h-6 bg-yellow-400 rounded-full -ml-3"></div>
              </div>

              <div className="bg-white/20 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">

            <div className="bg-[#2f80ed] rounded-3xl p-5 shadow-lg text-white flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition">
              <div className="bg-white/20 w-fit p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
                </svg>
              </div>
              <p className="text-base font-semibold mt-6">
                Load Money
              </p>
            </div>

            <div
              className="bg-[#f77e68] rounded-3xl p-5 shadow-lg text-white flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition"
              onClick={() => navigate("/balance")}
            >
              <div className="bg-white/20 w-fit p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <p className="text-base font-semibold mt-4 leading-tight">
                Send & <br /> Request
              </p>
            </div>

          </div>
        </div>

        {/* ===== TRANSACTIONS ===== */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mt-8">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-[#172b4d]">
              Transactions
            </h2>
            <button className="text-[#f77e68] text-sm font-medium">
              See all
            </button>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div className="ml-4">
                <p className="text-sm font-semibold text-[#172b4d]">
                  {transaction.name}
                </p>
                <p className="text-xs text-[#7a869a]">
                  {transaction.time}
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#1fcf90]">
              + Rs. {transaction.amount}
            </p>
          </div>
        </div>

      </div>

      {/* ===== BOTTOM NAVIGATION ===== */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md">
        <div className="flex justify-around py-3 text-gray-500 text-xs">

          <div className="flex flex-col items-center text-[#f77e68]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Personal
          </div>

          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
            </svg>
            Payments
          </div>

          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4z" />
            </svg>
            Scan QR
          </div>

          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            More
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;
