import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Paymentsname = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { amount, frozenTime } = state || { amount: "0", frozenTime: "N/A" };

  const handleRecipientClick = (name, bank) => {
    navigate("/payment-receipt", {
      state: { recipientName: name, recipientBank: bank, amount, frozenTime },
    });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Get help</h2>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Send money</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter IBAN, Raast ID, account or name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="PK19SADA00000311XXXXXXX"
          />
        </div>
        <div className="space-y-4">
          <Recipient
            name="MUHAMMAD JAVAID"
            bank="Telenor Microfinance Bank (TMB) *9918"
            onClick={handleRecipientClick}
          />
          <Recipient
            name="MUHAMMAD ASIF"
            bank="Telenor Microfinance Bank (TMB) *5885"
            onClick={handleRecipientClick}
          />
          <Recipient
            name="ABDUL RASHID"
            bank="HBL*8303"
            onClick={handleRecipientClick}
          />
          <Recipient
            name="NAZEER ANJUM SHAHEEN"
            bank="Telenor Microfinance Bank (TMB) *5082"
            onClick={handleRecipientClick}
          />
          <Recipient
            name="REHMAT SHAH"
            bank="Telenor Microfinance Bank (TMB) *6734"
            onClick={handleRecipientClick}
          />
          <Recipient
            name="Akhtar lqbal"
            bank="NayaPay*6669"
            onClick={handleRecipientClick}
          />
          <Recipient
            name="MUHAMMAD UMAR FAROOQ"
            bank="Telenor Microfinance Bank (TMB) *7786"
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
