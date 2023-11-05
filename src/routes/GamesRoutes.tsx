import { Route, Routes } from "react-router-dom";

import TicTacToePage from "../pages/TicTacToePage";
import SnakePage from "../pages/SnakePage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

function GamesRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tictactoe" element={<TicTacToePage />} />
      <Route path="snake" element={<SnakePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default GamesRoute;
