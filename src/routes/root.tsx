import { Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import GamesRoute from "./GamesRoutes";

function Root() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="games/*" element={<GamesRoute />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Root;
