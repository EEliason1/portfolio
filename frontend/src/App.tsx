import React from "react";
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
  </div>
);

export default App;
