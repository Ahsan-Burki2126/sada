import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import BalanceApp from "./BalanceApp";
import PaymentReceipt from "./PaymentReceipt";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route to the Dashboard */}
        <Route path="/" element={<Dashboard />} />
        {/* Route to BalanceApp */}
        <Route path="/balance" element={<BalanceApp />} />
        {/* Route to PaymentReceipt */}
        <Route path="/receipt" element={<PaymentReceipt />} />
      </Routes>
    </Router>
  );
};

export default App;
