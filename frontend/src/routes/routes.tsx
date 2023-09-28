import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/Login";
import Home from "../pages/Home";

export function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
