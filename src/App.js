import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Auth Pages
import Login from "./frontend/Login";
import Register from "./frontend/Register";

// Crickbet Layout Components
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Sidebar from "./Component/Sidebar";
import Casino from "./Component/Casino";
import Footer from "./Component/Footer";
import Cricket from "./frontend/Cricket"; 
import Tennis from "./frontend/Tennis"; 
import Soccer from "./frontend/Soccer"; 
import Horse from "./frontend/Horse"; 
import Greyhound from "./frontend/Greyhound"; 
import Politics from "./frontend/Politics"; 
import Casino1 from "./Component/Casino1"; 
import Casino2 from "./Component/Casino2"; 
import Menucasino from "./frontend/Menucasino";
import ICasino from "./frontend/Icasino";
import Term from "./frontend/Term1"
import Virtual from "./frontend/Virtual";
import Fantasy from "./frontend/FantasyGames"; // Assuming you have a Fantasy component
import Rule from "./frontend/Rule";
import AccountStatement from "./frontend/Account"; // Assuming you have an AccountStatement component
import Deposit from "./frontend/Deposit" // Assuming you have a Deposit component
import DepositHistory from "./frontend/DepositHistory"
import WithdrawHistory from "./frontend/WithdrawHistory"; // Assuming you have a WithdrawHistory component
import WithdrawStatement from "./frontend/WithdrawStatement"; // Assuming you have a WithdrawStatement component
import ChangePassword from "./frontend/ChangePassword"; // Assuming you have a ChangePassword component
import Security from "./frontend/Security"; // Assuming you have a Security component
import Profit from "./frontend/ProfitLoss";
import ButtonValueEditor  from "./frontend/ButtonValued";
import Unsettle from "./frontend/Unsettle";
import BetHistory from "./frontend/Bet";
import DepositStatement1 from "./frontend/DepositStatement";

// CSS Imports  
import "./Css/style.css"; // ✅ Correct path
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// 🔰 Main Layout for /home
const CrickbetLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-md-9 col-lg-10">
            <Casino />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<CrickbetLayout />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/soccer" element={<Soccer />} />
        <Route path="/tennis" element={<Tennis />} />
        <Route path="/horse" element={<Horse />} />
        <Route path="/greyhound" element={<Greyhound />} />
        <Route path="/politics" element={<Politics />} /> 
        <Route path="/casino1" element={<Casino1 />} /> 
        <Route path="/casino2" element={<Casino2 />} />
        <Route path="/menucasino" element={<Menucasino />} />
        <Route path="/icasino" element={<ICasino/>} /> 
        <Route path="/term" element={<Term />} />
        <Route path="/virtual" element={<Virtual />} />
        <Route path="/fantasy-game" element={<Fantasy />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/account-statement" element={<AccountStatement />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/deposit-history" element={<DepositHistory />} />
        <Route path="/withdraw-history" element={<WithdrawHistory />} />
        <Route path="/withdraw-statement" element={<WithdrawStatement />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/security" element={<Security />} />
        <Route path="/profit" element={<Profit/>}/>
        <Route path="/button" element={<ButtonValueEditor/>}/>
        <Route path="/unsettle" element={<Unsettle/>}/>
        <Route path="/bet" element={<BetHistory/>}/>
        <Route path="/deposit-statement" element={<DepositStatement1/>}/>
       


        
       
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
