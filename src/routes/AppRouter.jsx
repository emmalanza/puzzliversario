import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from '../pages/StartPage';
import GamePage from '../pages/GamePage';
import FinalTimelinePage from '../pages/FinalTimelinePage';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/juego" element={<GamePage />} />
        <Route path="/final" element={<FinalTimelinePage />} />
      </Routes>
    </Router>
  );
}
