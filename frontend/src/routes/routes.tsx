import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/Login";

export function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
