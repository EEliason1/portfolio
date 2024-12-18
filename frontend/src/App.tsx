import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-1">
      <AppRouter />
    </div>
    <Footer />
    <ToastContainer position="top-center" autoClose={3000} />
  </div>
);

export default App;
