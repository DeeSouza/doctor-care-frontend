import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const WebRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default WebRoutes;
