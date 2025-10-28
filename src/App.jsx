import React from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

const App = () => {
  const isDashboard = useLocation().pathname.includes("dashboard");

  return <>{!isDashboard && <Navbar />}</>;
};

export default App;
