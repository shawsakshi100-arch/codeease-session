import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import GameScreen from "./pages/GameScreen";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/game" element={<GameScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
