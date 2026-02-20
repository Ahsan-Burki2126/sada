import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { X, Share2 } from "lucide-react";
import RaastLogo from "../src/assets/Raast.jpg";

// Reusable component for the data rows
const InfoRow = ({ label, value }) => (
  <div className="mb-4">
    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</p>
    <p className="text-sm font-semibold text-[#172b4d]">{value}</p>
  </div>
);

const PaymentReceipt = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Robust fallback data
  const { 
    amount = "0.00", 
    frozenTime = "N/A", 
    recipientName = "Unknown Recipient", 
    recipientBank = "N/A" 
  } = state || {};

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#f6fbf9] py-8 px-4">
      
      {/* Header Section */}
      <header className="w-full max-w-md flex justify-between items-center mb-12 px-2">
        <div className="flex items-center gap-2">
          <img 
            src="https://images.sftcdn.net/images/t_app-icon-m/p/c1ee60d5-102a-4162-aa1d-9acf3633c849/2641861057/sadapay-logo" 
            alt="SadaPay" 
            className="h-12 w-12 object-contain" 
          />
          <h2 className="font-bold text-[#0b4861] tracking-tighter text-xl">
            SADA<span className="text-[#38597e]/70">PAY</span>
          </h2>
        </div>
        <button className="text-[#f77e68] font-bold text-sm flex items-center gap-1 hover:opacity-80 transition-opacity">
          <Share2 size={16} />
          SHARE
        </button>
      </header>

      {/* Receipt Card */}
      <main className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/60 relative">
        
        {/* Status Checkmark Icon */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <div className="bg-[#f77e68] text-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg border-4 border-[#f6fbf9]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Amount & Main Info */}
        <div className="text-center mt-8 mb-8">
          <h1 className="text-4xl font-extrabold text-[#172b4d]">Rs. {amount}</h1>
          <div className="text-slate-500 text-sm mt-2">
            Amjad Hayat to <span className="block font-bold text-[#172b4d] text-base">{recipientName}</span>
          </div>
          
          <div className="inline-flex items-center gap-1 mt-4 px-3 py-1 bg-slate-50 rounded-full border border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase italic">Powered by</span>
            <img src={RaastLogo} alt="Raast" className="h-4" />
          </div>
        </div>

        <hr className="border-dashed border-slate-200 mb-6" />

        {/* Transaction Meta Data */}
        <div className="space-y-1">
          <InfoRow label="Date & Time (PKT)" value={frozenTime} />
          <InfoRow label="Receiver's Account" value={recipientBank} />
          <InfoRow label="Reference Number" value="Raast-978560" />
        </div>
      </main>

      {/* Footer / Close Action */}
      <footer className="mt-auto w-full max-w-sm pb-6">
        <button 
          onClick={() => navigate("/")} 
          className="w-full bg-[#f77e68] hover:bg-[#e56d59] text-white flex items-center justify-between p-5 rounded-2xl shadow-lg transition-all active:scale-[0.98]"
        >
          <span className="text-lg font-bold">Close</span>
          <X className="w-6 h-6" strokeWidth={3} />
        </button>
      </footer>

    </div>
  );
};

export default PaymentReceipt;
