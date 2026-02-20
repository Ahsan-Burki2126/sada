import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Paymentsname = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { amount, frozenTime } = state || { amount: "0", frozenTime: "N/A" };

  const [loading, setLoading] = useState(false);

  const handleRecipientClick = (name, bank) => {
    setLoading(true);

    // Dummy delay (2 seconds)
    setTimeout(() => {
      navigate("/payment-receipt", {
        state: {
          recipientName: name,
          recipientBank: bank,
          amount,
          frozenTime,
        },
      });
    }, 2000);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen relative">
      
      {/* 🔹 Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-3 text-gray-700 text-sm">Processing payment...</p>
          </div>
        </div>
      )}

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Send money
        </h2>

        <div className="space-y-4">
          <Recipient
            name="MUHAMMAD JAVAID"
            bank="Telenor Microfinance Bank (TMB) *9918"
            onClick={handleRecipientClick}
          />
        </div>
      </div>
    </div>
  );
};

const Recipient = ({ name, bank, onClick }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
      <div>
        <p className="text-sm font-medium text-gray-700">{name}</p>
        <p className="text-xs text-gray-500">{bank}</p>
      </div>
      <button
        className="text-sm text-blue-600 hover:text-blue-800"
        onClick={() => onClick(name, bank)}
      >
        Send
      </button>
    </div>
  );
};

export default Paymentsname;
