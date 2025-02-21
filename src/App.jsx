import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import BalanceApp from "./BalanceApp";
import PaymentReceipt from "./PaymentReceipt";
import Paymentsname from "./Paymentsname";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/balance" element={<BalanceApp />} />
        <Route path="/payments" element={<Paymentsname />} />
        <Route path="/payment-receipt" element={<PaymentReceipt />} />
      </Routes>
    </Router>
  );
};

export default App;