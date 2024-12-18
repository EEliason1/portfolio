import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1 p-4">
      <AppRouter />
    </main>
    <Footer />
    <ToastContainer position="top-center" autoClose={3000} />
  </div>
);

export default App;
