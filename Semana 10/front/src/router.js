import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterAutos from "./pages/RegisterAutos";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RegisterAutos />} />
    </Routes>
  </Router>
);

export default AppRouter;
