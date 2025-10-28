import React from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const isDashboard = useLocation().pathname.includes("dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      <div className="min-h-[70vh]">
        <Home />
      </div>
    </>
  );
};

export default App;
